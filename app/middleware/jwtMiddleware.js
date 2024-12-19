import { verifyToken } from '../utils/token';
import { errorResponse } from '../utils/response.js';

export const jwtMiddleware = async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const errorMsg = "Error: Access Token is not valid or has expired";

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return errorResponse(res, errorMsg, null, 401)
    }
    
    const token = authHeader.split(" ")[1];
    const verified = await verifyToken(token)

    if(verified.success) {
        return next();
    }

    return errorResponse(res, errorMsg, null, 401)
};