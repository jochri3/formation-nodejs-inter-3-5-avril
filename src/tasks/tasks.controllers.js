// const { generateUniqueId } = require("../utils/generate-unique-id.util");
const tasksService = require("./tasks.service");

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

module.exports = {
  getAllTasks,
  getOneTask,
};
