const jwt = require("jsonwebtoken")
const User = require("../models/userSchema")
const { sendErrorResponse } = require("../lib/sendError")

// Middleware to check if the user has a valid token
exports.isAuthenticatedUser = async (req, res, next) => {
    try {
        const { jwtToken } = req.cookies;

        if (!jwtToken) {
            return res.status(401).send('Unauthorized');
        }

        if (!jwtToken) {
            return sendErrorResponse(res, 401, "Login first to access resources");
        }

        const decoded = await jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        if (!decoded || !decoded._id) {
            return sendErrorResponse(res, 401, "Invalid token or token has expired");
        }

        const user = await User.findById(decoded._id);
        // console.log(user)
        if (!user) {
            return sendErrorResponse(res, 404, "User not found");
        }
        req.user = user;
        next();
    } catch (error) {
        sendErrorResponse(res, 500, error.message);
    }
}