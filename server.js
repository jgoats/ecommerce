const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user.js");

mongoose
    .connect(process.env.DATABASE, { useNewUrlParser: true })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB Error => ", err));

app.use("/api", userRoutes);

const port = process.env.PORT || 8080;
app.listen(port, (err) => {
    if (err) {
        console.log("port not running on " + port)
    }
    console.log("port is running on " + port)
})


