const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const findAllTasks = () => {
  return prisma.tasks.findMany();
};

const findOneTask = async (id) => {
  const task = await prisma.tasks.findUnique({ where: { id } });
  if (!task) {
    throw new Error("Task not found");
  }
  return task;
};

const createTask = (data) => {
  return prisma.tasks.create({
    data,
    select: {
      title: true,
      description: true,
    },
  });
};

const updateTask = async (id, data) => {
  const task = await prisma.tasks.findUnique({
    where: { id },
  });
  if (!task) {
    throw new NotFoundError("Task not found");
  }
  return prisma.tasks.update({
    where: { id },
    data,
    select: {
      title: true,
      description: true,
    },
  });
};

const deleteTask = async (id) => {
  const task = await prisma.tasks.findUnique({
    where: { id },
  });
  if (!task) {
    throw new NotFoundError("Task not found");
  }
  return prisma.tasks.delete({
    where: { id },
  });
};

module.exports = {
  findAllTasks,
  findOneTask,
  createTask,
  updateTask,
  deleteTask,
};
