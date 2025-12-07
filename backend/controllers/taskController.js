import Task from "../models/taskModel.js";

export const createTask = async (req, res) => {
  const user_id = req.user.id;
  const task = await Task.create({ ...req.body, user_id });
  res.status(201).json(task);
};

export const getUserTasks = async (req, res) => {
  const tasks = await Task.findAll({ where: { user_id: req.user.id } });
  res.json(tasks);
};
