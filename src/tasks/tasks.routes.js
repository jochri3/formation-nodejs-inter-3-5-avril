const express = require("express");
const errorWrapper = require("../middlewares/error-wrapper.middleware");

const tasksRouter = express.Router();

const TasksController = require("./tasks.controllers");

tasksRouter.get("/", errorWrapper(TasksController.getAllTasks));
tasksRouter.get("/:id", errorWrapper(TasksController.getOneTask));
tasksRouter.post("/", errorWrapper(TasksController.createTask));
tasksRouter.patch("/:id", errorWrapper(TasksController.updateTask));
tasksRouter.delete("/:id", errorWrapper(TasksController.deleteTask));

module.exports = tasksRouter;
