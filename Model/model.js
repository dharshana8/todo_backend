import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    task: { type: String, required: true },
    status: { type: String, enum: ["not completed", "in progress", "completed"], default: "not completed" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }
})
const taskCollection = mongoose.model("task", taskSchema);
export default taskCollection;
