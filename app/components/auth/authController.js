import user from '../user/userModel.js';
import { successResponse, errorResponse } from '../../utils/response.js';
import { generateToken, extractToken, deleteToken, refreshToken } from '../../utils/token.js';

exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (email && password) {
        user.findOne({ email: email }, (err, thisUser) => {
            if (err) throw err;
    
            if (!thisUser) {
                return errorResponse(res, 'Authentication failed. User not found.', null, 404);
            } else {
                // Check if password matches
                thisUser.comparePassword(password, async(err, isMatch) => {
                    if (err) return errorResponse(res, 'Error while comparing passwords.', null, 500);

                    if (isMatch) {
                        // Create the JWT tokens
                        const generatedToken = await generateToken(thisUser._id);
                        const data = {
                            _id: thisUser._id,
                            username: thisUser.username,
                            email: thisUser.email,
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
        });
    } else {
        return errorResponse(res, 'Invalid Username or email', null, 400);
    }
};

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
