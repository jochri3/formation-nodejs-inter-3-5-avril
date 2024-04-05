const tasksService = require("./tasks.service");

// let tasksNextId = 1;

const getAllTasks = async (req, res) => {
  const { page = 1, limit = 4, search = "", sort = {} } = req.query;

  const parsedPage = parseInt(page);
  const parsedLimit = parseInt(limit);
  const parsedSort = {
    field: sort.field || "id",
    order: sort.order || "asc",
  };

  const { tasks, totalCount, totalPages } = await tasksService.findAllTasks(
    parsedPage,
    parsedLimit,
    search,
    parsedSort
  );

  res.status(200).json({ tasks, totalCount, totalPages });
};

const getOneTask = async (req, res) => {
  const id = parseInt(req.params.id) || null;
  if (!id) {
    return res.status(400).json({ error: "Invalid task ID" });
  }
  const task = await tasksService.findOneTask(id);
  return res.status(200).json(task);
};

const createTask = async (req, res) => {
  const taskData = req.body;
  const task = await tasksService.createTask(taskData);
  res.status(201).send(task);
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
