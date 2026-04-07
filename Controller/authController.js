import userCollection from "../Model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existing = await userCollection.findOne({ email });
        if (existing) return res.status(400).json({ message: "Email already registered" });
        const hashed = await bcrypt.hash(password, 10);
        const user = new userCollection({ name, email, password: hashed });
        await user.save();
        res.status(201).json({ message: "Registered successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userCollection.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({ message: "Invalid password" });
        const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({ token, user: { name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
