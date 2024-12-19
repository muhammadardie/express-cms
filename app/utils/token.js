import { createClient } from 'redis';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import config from '../config';
import { parsehumanTime } from './time';

export const generateToken = async (userID) => {
    const client = await createClient({url: config.redis.url})
                    .on('error', err => console.log('Redis Client Error', err))
                    .connect();

    const tokenDetails = {
        accessToken: "",
        refreshToken: "",
        accessUuid: "",
        refreshUuid: "",
        atExpires: parsehumanTime(config.accessTokenExpiry),
        rtExpires: parsehumanTime(config.refreshTokenExpiry)
    };
    
    tokenDetails.accessUuid = uuidv4();
    tokenDetails.refreshUuid = tokenDetails.tokenUuid + "++" + userID;
    
    // Access Token
    tokenDetails.accessToken = jwt.sign(
        { access_uuid: tokenDetails.accessUuid, user_id: userID },
        config.accessSecret,
        { expiresIn: config.accessTokenExpiry }
    );

    // Refresh Token
    tokenDetails.refreshToken = jwt.sign(
        { refresh_uuid: tokenDetails.refreshUuid, user_id: userID },
        config.refreshSecret,
        { expiresIn: config.refreshTokenExpiry }
    );


    // store to redis
    await client.set(tokenDetails.accessUuid, tokenDetails.accessToken, {EX: tokenDetails.atExpires})
    await client.set(tokenDetails.refreshUuid, tokenDetails.refreshToken, {EX: tokenDetails.rtExpires})
    await client.quit();

    return { success: true, data: tokenDetails };
}

export const extractToken = (header) => {
    if (!header || !header.startsWith("Bearer ")) return null;
    
    return header.split(" ")[1];
};

// tokenType = access | refresh
export const deleteToken = async (token, tokenType) => {
    try {
        const client = createClient({
            url: config.redis.url
        });
        const secret = config[`${tokenType}Secret`]
        const uuidType = `${tokenType}_uuid`

        const decoded = jwt.verify(token, secret);
        client.del(decoded[uuidType])

        return { success: true, data: decoded }
    } catch (err) {

        return { success: false, msg: err }
    }
};

export const refreshToken = async (refreshToken) => {
    const tokenType = "refresh"
    const deleteToken = await deleteToken(refreshToken, tokenType)

    if(deleteToken.success) {
        const userId = deleteToken.data.user_id;
        const generateToken = generateToken(userId)

        if(generateToken.success) {

            return { success: true, data: generateToken.data}
        }
    }

    return deleteToken;
};

export const verifyToken = async (token, tokenType) => {
    try {
        tokenType = tokenType || "access";
        const client = await createClient({url: config.redis.url})
                        .on('error', err => console.log('Redis Client Error', err))
                        .connect();
        const secret = config[`${tokenType}Secret`]
        const tokenJwt = jwt.verify(token, secret, function(err, decoded) {
            if (err) {
                return { decoded: false, msg: err }
            }

            return { decoded: true, data: decoded }
        });
        if(tokenJwt.decoded) {
            const accessUuid = tokenJwt.data.access_uuid
            const valid = await client.get(accessUuid)

            return { success: !!valid }
        }

        else {
            return { success: false, msg: "Token Invalid" }
        }
        
    } catch (err) {

        return { success: false, msg: err }
    }
};