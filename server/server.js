const express = require("express");
const app = express();
const PORT = 3001;
const db = require("./models");
const cors = require("cors");

const usersRouter = require("./routes/Users");
const inputsRouter = require("./routes/Inputs");
// const exRouter = require("./routes/Exercises");
const insertPredefinedExercises = require("./routes/Exercises");


app.use(express.json())
app.use(cors());

app.use("/auth", usersRouter);
app.use("/insert", inputsRouter);
// app.use("/ex", exRouter);

db.sequelize.sync().then(async () => {
    await insertPredefinedExercises();
    app.listen(PORT, async () => {
        console.log("Server is online");
    })
})
