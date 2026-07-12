
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
const { json } = require("stream/consumers");
require("dotenv").config();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use("/uploads", express.static("./uploads"))
const port = process.env.PORT || 8080;

app.use("/api/v1/user", router);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/task", taskRouter);


app.get("/", (req, res) => {
    return res.send("  Hello")
})



app.use((err, req, res, next) => {
    return res.send(err);
})

app.use((req, res, next) => {
    return res.status(404).json(
        {
            message: "Request Not Found",
        }
    )
})



async function connect() {
    try {
        await mongoose.connect;
        console.log("DB is Conneted")
    } catch (e) {
        console.log("Db is not Connect")
    }


}
app.listen(port, async () => {
    try {
        await connect();
        console.log("server is running")
    }
    catch (err) {
        console.log("app not running or db failed")
    }
})

// console.log("Done")