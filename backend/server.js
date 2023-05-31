require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");

// express app
const app = express();
// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.get("/", (req, res) => {
    res.json({ mssg: "welcome to the app" });
});
// routes
app.use("/api/workouts/", workoutRoutes);
// connect to db
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        // listen for request
        app.listen(process.env.PORT, () => {
            console.log(
                "connect to db && listening on port ",
                process.env.PORT
            );
        });
    })
    .catch((error) => {
        console.log(error);
    });

// listen for request
// app.listen(process.env.PORT, () => {
//     console.log("listening on port 4000!!!", process.env.PORT);
// });
