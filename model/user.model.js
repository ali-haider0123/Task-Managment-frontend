const { Schema, mongoose, SchemaTypes} = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: SchemaTypes.String,
        require: true
    },
    email: {
        type: SchemaTypes.String,
        require: true,
        unique: true
    },
    password: {
        type: SchemaTypes.String,
        require: true,
        unique: true
    },
    contact: {
        type: SchemaTypes.String
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;