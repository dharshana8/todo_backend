import taskCollection from "../Model/model.js";

export const addTask = async (req, res) => {
    try {
        const data = new taskCollection({ task: req.body.task, user: req.user.id });
        await data.save();
        res.status(201).json({ message: "task added successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getTask = async (req, res) => {
    try {
        const data = await taskCollection.find({ user: req.user.id });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateTask = async (req, res) => {
    try {
        const data = await taskCollection.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteTask = async (req, res) => {
    try {
        await taskCollection.findByIdAndDelete(req.params.id);
        res.json({ message: "task deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
