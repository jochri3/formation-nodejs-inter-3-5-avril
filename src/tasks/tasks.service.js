const tasksRepository = require("./tasks.repository");

const findAllTasks = async () => {
  return await tasksRepository.findAllTasks();
};

const findOneTask = async (id) => {
  const task = tasksRepository.findOneTask(id);
  if (!task) {
    throw new Error("Tasks not found");
  }
  return task;
};

module.exports = {
  findAllTasks,
  findOneTask,
};
