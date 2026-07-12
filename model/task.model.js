const { Schema, mongoose } = require("mongoose");
const Categories = require("./categories.model");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required.'],
        maxlength: [100, 'Title cannot exceed 100 characters.']
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
        maxlength: [500, 'Description cannot exceed 500 characters.']
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    progress: {
        type: Number,
        min: [0, 'Progress cannot be less than 0'],
        max: [100, 'Progress cannot exceed 100'],
        default: 0
    },
    dueDate: {
        type: Date
    },
    isActive: {
        type: Boolean,
        default: true
    }

}, {timestamps: true});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;