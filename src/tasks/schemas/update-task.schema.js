const Joi = require("joi");

const updateTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  start_date: Joi.date().iso(),
  end_date: Joi.date().iso(),
  status: Joi.string()
    .valid("todo", "in_progress", "completed")
    .default("todo"),
  user_id: Joi.number(),
  assignee_id: Joi.number(),
  parent_id: Joi.number(),
});

module.exports = updateTaskSchema;
