const { PrismaClient } = require("@prisma/client");
const NotFoundError = require("../errors/not-found.error");

const prisma = new PrismaClient();

const defaultReturnFields = {
  id: true,
  title: true,
  description: true,
};

const findAllTasks = () => {
  return prisma.tasks.findMany();
};

const findOneTask = async (id) => {
  const task = await prisma.tasks.findUnique({ where: { id } });
  if (!task) {
    throw new NotFoundError("Task not found");
  }
  return task;
};

// Usage of defaultReturnFields objects

// const createTask = (data) => {
//   return prisma.tasks.create({
//     data,
//     select: { ...defaultReturnFields, description: true },
//   });
// };
const createTask = (data) => {
  return prisma.tasks.create({
    data,
    select: {
      id: true,
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
    throw new Error("Task not found");
  }
  return prisma.tasks.update({
    where: { id },
    data,
    select: defaultReturnFields,
  });
};

const deleteTask = async (id) => {
  const task = await prisma.tasks.findUnique({
    where: { id },
  });
  if (!task) {
    throw new Error("Task not found");
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
