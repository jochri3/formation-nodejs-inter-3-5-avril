const Joi = require("joi");

const createTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  start_date: Joi.date().iso().required(),
  end_date: Joi.date().iso().required(),
  status: Joi.string()
    .valid("todo", "in_progress", "completed")
    .default("todo"),
  user_id: Joi.number().integer().required(),
  assignee_id: Joi.number().integer(),
  parent_id: Joi.number().integer(),
});

module.exports = createTaskSchema;
