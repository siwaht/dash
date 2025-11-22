import { Router } from "express";
import { storage } from "../storage.js";
import { insertDemoRequestSchema, insertConsultationRequestSchema } from "../../shared/schema.js";

const router = Router();

router.post("/demo-requests", async (req, res) => {
    try {
        const data = insertDemoRequestSchema.parse(req.body);
        const request = await storage.createDemoRequest(data);
        res.json(request);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.post("/consultation-requests", async (req, res) => {
    try {
        const data = insertConsultationRequestSchema.parse(req.body);
        const request = await storage.createConsultationRequest(data);
        res.json(request);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
