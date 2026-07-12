const { Schema, mongoose } = require("mongoose");
const Task = require("./task.model");

const categoriesSchema = new mongoose.Schema({
    Name: {
        type: String,
        require: true,
        unique: true,
        minLength: [3, "Minimum Length should be 3"],
        maxLength: [30, "Maximum Length should be 30"]
    },
    Description: {
        type: String,
        require: true,
        minLength: [10, "Minimum Length should be 10"],
        maxLength: [100, "Maximum Length should be 100"]
    },
    Rank: {
        type: Number,
        require: true,
        min: [0, "0 rank is invalid"]
    },
    Color:{
        type: String,
        Minlength: 7
    },
    
})

const Categories = mongoose.model("Categories", categoriesSchema);
module.exports = Categories;