import { Router } from "express";
import { storage } from "../storage.js";
import { insertUserSchema } from "../../shared/schema.js";

const router = Router();

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await storage.getUserByUsername(username);

    if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    // In a real app, we would set a session or return a token here.
    // For this simple implementation, we'll just return the user (without password).
    const { password: _, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
});

router.post("/users", async (req, res) => {
    try {
        const data = insertUserSchema.parse(req.body);
        const existingUser = await storage.getUserByUsername(data.username);

        if (existingUser) {
            return res.status(400).json({ message: "Username already exists" });
        }

        const user = await storage.createUser(data);
        const { password: _, ...userWithoutPassword } = user;
        res.json(userWithoutPassword);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.get("/users/:username", async (req, res) => {
    const user = await storage.getUserByUsername(req.params.username);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const { password: _, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
});

export default router;
