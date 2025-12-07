import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./userModel.js";

const Task = sequelize.define("Task", {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },

  title: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },

  description: { 
    type: DataTypes.TEXT, 
    allowNull: false 
  },

  status: { 
    type: DataTypes.ENUM("pending", "done"), 
    defaultValue: "pending" 
  },

  due_date: { 
    type: DataTypes.DATE, 
    allowNull: false 
  }
});


Task.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Task, { foreignKey: "user_id" });

export default Task;
