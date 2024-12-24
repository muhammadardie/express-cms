import user from '../user/userModel.js';
import { successResponse, errorResponse } from '../../utils/response.js';
import { generateToken, extractToken, deleteToken, refreshToken } from '../../utils/token.js';

exports.login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (email && password) {
        const userRecord = await user.findOne({ email: email });
    
        if (!userRecord) {
            return errorResponse(res, 'Authentication failed. User not found.', null, 404);
        } else {
            // Check if password matches
            userRecord.comparePassword(password, async(err, isMatch) => {
                if (err) return errorResponse(res, 'Error while comparing passwords.', null, 500);

                if (isMatch) {
                    // Create the JWT tokens
                    const generatedToken = await generateToken(userRecord._id);
                    const data = {
                        _id: userRecord._id,
                        username: userRecord.username,
                        email: userRecord.email,
                        access_token: generatedToken.data.accessToken,
                        refresh_token: generatedToken.data.refreshToken,
                    }
                    if(generatedToken.success) {
                        return successResponse(res, 'Successfully logged in', data);
                    }

                    return errorResponse(res, generatedToken.msg, null, 401); 
                    
                } else {
                    return errorResponse(res, 'Authentication failed. Wrong password.', null, 401);
                }
            });
        }
    }
}

exports.logout = async (req, res) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Authorization header missing or invalid" });
    }

    const accessToken = extractToken(authHeader)
    const tokenType = "acccess"
    const tokenDeleted = deleteToken(accessToken, tokenType)

    if(tokenDeleted.success === true) return successResponse(res, 'Successfully logged out');

    return errorResponse(res, tokenDeleted.msg, null, 401);
};

exports.refresh = async (req, res) => {
    const { refresh_token } = req.body;
    const tokenRefreshed = refreshToken(refresh_token)

    if(tokenRefreshed.success === true) return successResponse(res, 'Successfully logged out');

    return errorResponse(res, tokenRefreshed.msg, null, 401);
};
