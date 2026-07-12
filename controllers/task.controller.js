const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const app = express();
const Task = require("../model/task.model");
const Categories = require("../model/categories.model")
const User = require("../model/user.model")


class TaskController {

    async GetAll(req, res) {
        try {
            const users = await Task.find()
            return res.status(200).json(users);
        }
        catch (err) {
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    }

    async GetById(req, res) {
        try {
            const id = req.params.id;
            const found = await Task.findById(id);
            if (found) {
                return res.status(200).json(found);
            }
            return res.status(404).json({
                message: "Id is not found"
            });
        } catch (e) {
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    }

    async Create(req, res) {
        try {
            console.log(req?.body);

            const userId = req.currentUser?._id || req.currentUser?.id;

            const { title, description, progress, dueDate } = req?.body;

            if (!title || !userId) {
                return res.status(401).json({
                    message: "Unauthorized. Please login again."
                });
            }


            const newTask = new Task({
                title,
                description,
                isActive: true,
                userId,
                progress,
                dueDate
            })

            await newTask.save();

            return res.status(201).json({
                message: "Task created successfully"
            })


        } catch (err) {
            console.error(err);
            return res.status(500).json({
                message: "Internal server error"
            });
        }
    }


    async Update(req, res) {
        try {
            const { id } = req.params;
            const { Title } = req.body;
            console.log(id, Title)
            const updated = await Task.findByIdAndUpdate(
                id,
                { Title: Title },
                { new: true }
            );

            if (!updated) {
                return res.status(400).json({
                    message: `Task against given id #${id} is not found`
                });
            }

            return res.status(200).json(updated);

        } catch (e) {
            console.error(e);
            return res.status(500).json({
                message: "Internal Server Error."
            });
        }
    }


    async Delete(req, res) {
        try {
            const id = req.params.id;

            const deleted = await Task.findByIdAndDelete(id);

            if (deleted) {
                return res.status(200).json(deleted);
            } else {
                return res.status(400).json({
                    message: "deleted not found to be deleted",
                });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "internal servere error",
            });
        }
    }
}

const taskController = new TaskController();
module.exports = taskController;
