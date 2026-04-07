import { addTask, getTask, updateTask, deleteTask } from "../Controller/controller.js";
import express from "express";
import authMiddleware from "../Middleware/authMiddleware.js";

const route = express.Router();
route.post("/addtask", authMiddleware, addTask);
route.get("/gettask", authMiddleware, getTask);
route.put("/updatetask/:id", authMiddleware, updateTask);
route.delete("/deletetask/:id", authMiddleware, deleteTask);

export default route;
