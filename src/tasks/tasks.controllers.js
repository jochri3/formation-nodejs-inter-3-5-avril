// const { generateUniqueId } = require("../utils/generate-unique-id.util");
const tasksService = require("./tasks.service");
const _ = require("lodash");

// let tasksNextId = 1;

const getAllTasks = async (req, res) => {
  try {
    const tasks = await tasksService.findAllTasks();
    res.status(200).json(tasks);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getOneTask = async (req, res) => {
  try {
    const id = parseInt(req.params.id) || null;
    if (!id) {
      return res.status(400).json({ error: "Invalid task ID" });
    }
    const task = await tasksService.findOneTask(id);
    return res.status(200).json(task);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createTask = async (req, res) => {
  try {
    const taskData = req.body;
    const task = await tasksService.createTask(taskData);
    res.status(201).send(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateTask = async (req, res) => {
  const taskId = Number.parseInt(req.params.id);
  const taskData = req.body;
  const updatedTask = await tasksService.updateTask(taskId, taskData);
  res.json(updatedTask);
};

const deleteTask = async (req, res) => {
  const taskId = Number.parseInt(req.params.id);
  await tasksService.deleteTask(taskId);
  res.sendStatus(204);
};

module.exports = {
  getAllTasks,
  getOneTask,
  createTask,
  deleteTask,
  updateTask,
};
