import type { Express } from "express";
import adminRoutes from "./routes/admin.js";
import requestRoutes from "./routes/requests.js";
import { createMcpServer } from "./mcp.js";

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

  app.use("/api/admin", adminRoutes);
  app.use("/api", requestRoutes);

  // Initialize MCP Server
  createMcpServer(app);
}
