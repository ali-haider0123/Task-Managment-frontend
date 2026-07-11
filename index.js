
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const router = require("./routes/user.router")
const categoryRouter = require("./routes/catergory.router");
const taskRouter = require("./routes/task.router")
const { default: mongoose } = require("mongoose");
const app = new express();
const auth = require("./middleware/user.middleware")
// const hosting = require("./config/hosting")
const cors = require("cors");
require("dotenv").config();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use("/uploads", express.static("./uploads"))
const port = process.env.APP_PORT;

app.use("/api/v1/user", router);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/task", taskRouter);


app.get("/", (res, req) => {
    return res.send("  Hello")
})

app.listen(port, async () => {
    await mongoose.connect;
})

// console.log("Done")