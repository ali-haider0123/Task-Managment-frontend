const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const Categories = require("../model/categories.model")
const express = require("express")
const generateToken = require("../utils/usertoken");
const User = require("../model/user.model")

class UserController {


    async Create(req, res) {
        try {
            const {
                name, email, password
            } = req.body;

            if (!email || !password || !name) {
                return res.status(400).json({
                    message: "Bad Request Error. Please fill all fields",
                })
            }

            const existingUser = await User.findOne({ email })

            if (existingUser) {
                return res.status(400).json({
                    message: "Bad Request Error, User already exist",
                });

            }
            const hashedPassword = await bcrypt.hash(password, 10)

            const newUser = new User({
                email,
                password: hashedPassword,
                name
            });
            await newUser.save();
            return res.status(201).json({
                message: "User registered successfully !", newUser
            });

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: "Internel Server Error"
            });
        }
    }

    async Login(req, res) {
        try {
                const { email, password } = req.body;

                if (!email || !password) {
                    return res.status(400).json({
                        message: "Bad Request Error. Please fill all fields",
                    });
                }

                const myUser = await User.findOne({ email });

                if (!myUser) {
                    return res.status(400).json({
                        message: "Incorrect Email or Password",
                    });
                }

                const isMatch = await bcrypt.compare(password, myUser.password);

                if (!isMatch) {
                    return res.status(400).json({
                        message: "Incorrect Email or Password",
                    });
                }

                const token = generateToken({
                    id: myUser._id,
                    email: myUser.email,
                    name: myUser.name,
                });

                return res.status(200).json({
                    message: "Login successful",
                    token,
                });


            } catch (e) {
                console.log(e);
                res.status(500).json({
                    message: "Internet Server Error"
                });
            }
        }

        async Profile(req, res) {
            try {
                const userId = req.user.id;

                const user = await User.findById(userId).select("-password");

                if (!user) {
                    return res.status(404).json({
                        message: "User Not Found."
                    })
                }

            return res.status(200).json({
                message: "Profile Fetch Succesfully", user
            })
            console.log(user);

        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: "Internal Server Error."
            })
        }
    }
}

const userController = new UserController();
module.exports = userController