const express = require("express");
const tasksRouter = require("./tasks/tasks.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());
app.use("/api/tasks", tasksRouter);
app.use(errorMiddleware);

module.exports = app;
