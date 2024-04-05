const express = require("express");
const TasksController = require("./tasks.controllers");
const { createTaskSchema, updateTaskSchema } = require("./schemas");
const { validateBodyMiddleware, errorWrapper } = require("../middlewares");

const tasksRouter = express.Router();

tasksRouter.get("/", errorWrapper(TasksController.getAllTasks));
tasksRouter.get("/:id", errorWrapper(TasksController.getOneTask));
tasksRouter.post(
  "/",
  validateBodyMiddleware(createTaskSchema),
  errorWrapper(TasksController.createTask)
);
tasksRouter.patch(
  "/:id",
  validateBodyMiddleware(updateTaskSchema),
  errorWrapper(TasksController.updateTask)
);
tasksRouter.delete("/:id", errorWrapper(TasksController.deleteTask));

module.exports = tasksRouter;
