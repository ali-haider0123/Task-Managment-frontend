const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express")
const app = express();
const generateToken = require("../utils/usertoken");
const Categories = require("../model/categories.model");

class CategoriesController {
    constructor() { }

    async GetAll(req, res) {
        try {
            const categories = await Categories.find();
            return res.status(200).json(categories);
        } catch (e) {
            cconsole.log(e);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async GetById(req, res) {
        try {
            const id = req.params.id;
            const found = await Category.findById(id);
            if (found) {
                return res.status(200).json(found);
            }
            return res
                .status(404)
                .json(new Message(`Category for id:${id} is not found`, 404));
        } catch (e) {
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async Create(req, res) {
        try {
            console.log(req.body);
            const { Name, Rank, Color, Image, Description } = req.body;
            //you can apply all required server side validation here
            let msg;
            if (!Name) msg = "Name is required";
            if (Name.length < 3 || Name.length > 50)
                msg += "Name must have 3 to 50 characters";
            if (msg)
                return res
                    .status(400)
                    .json(new Message(`Invalid json data: ${msg}`, 404));
            const created = await Categories.create(req.body);
            // console.log(req.url);
            // console.log(req.baseUrl);
            // console.log(req.originalUrl);
            res.header("location", `${req.originalUrl}/${created._id}`);
            return res.status(201).json(created);
            //return res.status(200).json(new Message("Done", 200));
        } catch (e) {
            console.log(e);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async Delete(req, res) {
        try {
            const id = req.params.id;

            const category = await Categories.findOneAndDelete({ _id: id });

            if (category) {
                return res.status(200).json(category);
            } else {
                return res.status(400).json({
                    message: "Category not found to be deleted",
                });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "internal servere error",
            });
        }
    }

    async Edit(req, res) {
        try {
            let id = req.params.id;
            console.log(req.body);
            const { Name, Rank, Color, Image, Description } = req.body;
            //you can apply all required server side validation here
            let msg;
            if (!Name) msg = "Name is required";
            if (Name.length < 3 || Name.length > 50)
                msg += "Name must have 3 to 50 characters";
            if (msg)
                return res
                    .status(400)
                    .json(new Message(`Invalid json data: ${msg}`, 404));

            const category = await Categories.findOneAndUpdate(
                { _id: id },
                {
                    Name,
                    Description,
                    Rank,
                    Color,
                },
            );

            return res.status(200).json(category);
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "Internal Server error!",
            });
        }
    }
}

const categoryController = new CategoriesController();
module.exports = categoryController;