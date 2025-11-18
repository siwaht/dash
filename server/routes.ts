import type { Express } from "express";
import { storage } from "./storage.js";
import { insertDemoRequestSchema, insertConsultationRequestSchema } from "../shared/schema.js";

export function registerRoutes(app: Express) {
  app.get("/api/health", (_req, res) => {
    const supabaseConfigured = !!(
      (process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL) &&
      (process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY)
    );

    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      supabaseConfigured,
      environment: process.env.NODE_ENV || "development"
    });
  });

  app.post("/api/demo-requests", async (req, res) => {
    try {
      const data = insertDemoRequestSchema.parse(req.body);
      const request = await storage.createDemoRequest(data);
      res.json(request);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.post("/api/consultation-requests", async (req, res) => {
    try {
      const data = insertConsultationRequestSchema.parse(req.body);
      const request = await storage.createConsultationRequest(data);
      res.json(request);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });
}
