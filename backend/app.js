import express from "express";
import cors from "cors";
import sequelize from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

sequelize.sync().then(() => {
  console.log("Database connected!");
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
export default app;