const jwt = require("jsonwebtoken");
const User = require("../model/user.model")

async function authenticate(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        let token = null;

        if (authHeader) {
            if (authHeader.startsWith("Bearer ")) {
                token = authHeader.split(" ")[1];
            } else {
                token = authHeader;
            }
        }

        if (!token) {
            return res.status(401).json({ message: "Access denied. No token provided." });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY || process.env.JWT_SECRET);

        req.currentUser = decoded;

        if (!req.currentUser._id && decoded.id) {
            req.currentUser._id = decoded.id;
        }

        next();
    } catch (err) {
        console.error("Authentication Middleware Error:", err.message);
        return res.status(401).json({ message: "Invalid or expired token." });
    }
}

module.exports = authenticate;