const express = require("express");

const tasksRouter = express.Router();

const TasksController = require("./tasks.controllers");

tasksRouter.get("/", TasksController.getAllTasks);
tasksRouter.get("/:id", TasksController.getOneTask);
// tasksRouter.post("/", TasksController.createTask);
// tasksRouter.delete("/:id", TasksController.deleteTask);

module.exports = tasksRouter;
