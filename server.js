import connectdb from "./Db/db.js";
import express from "express";
import dotenv from "dotenv";
import route from "./Routes/routes.js";
import authRoute from "./Routes/authRoutes.js";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
connectdb();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoute);
app.use('/tasks', route);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
