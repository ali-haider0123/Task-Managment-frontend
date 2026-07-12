const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const userSchema = require("../model/user.model");
require("dotenv").config();

function generateToken(payload){
    const secretKey = process.env.JWT_SECRET_KEY;
    const expireKey = process.env.JWT_TOKEN_EXPIRES_IN;

    if(!secretKey){
        throw new Error("JWT_SECRET_KEY is not available.");
    }

    const token = jwt.sign(payload, secretKey, {
        expiresIn : '1h'
    });

    return token
}

module.exports = generateToken;