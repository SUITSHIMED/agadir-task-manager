import { Sequelize } from "sequelize";
import sequelize from "../config/database.js";
import { User } from "./userModel.js";
import { Task } from "./taskModel.js";

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = User;
db.Task = Task;

User.hasMany(Task, { foreignKey: "userId", as: "tasks" });
Task.belongsTo(User, { foreignKey: "userId", as: "user" });

export { db };    
