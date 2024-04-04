const { loadFile, writeToFile } = require("../utils/file.utils");

const findAllTasks = async () => {
  const tasks = await loadFile("tasks.json");
  return JSON.parse(tasks);
};

const findOneTask = async (id) => {
  const tasks = JSON.parse(await loadFile("tasks.json"));
  return tasks.find((task) => task.id === id);
};

const deleteTask = async () => {};

const createTask = async (data) => {
  await writeToFile("tasks.json", data);
};

module.exports = {
  findAllTasks,
  findOneTask,
};
