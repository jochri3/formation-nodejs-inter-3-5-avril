const express = require("express");
const tasksRouter = require("./tasks/tasks.routes");
const { rateLimiter, errorMiddleware } = require("./middlewares");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:8080",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(rateLimiter);
app.use("/api/tasks", tasksRouter);
app.use(errorMiddleware);

module.exports = app;
