import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { z } from "zod";
import type { Express } from "express";

export const createMcpServer = (app: Express) => {
    const server = new McpServer({
        name: "Dash MCP Server",
        version: "1.0.0",
    });

    // Example Tool: Hello World
    server.tool(
        "hello_world",
        { name: z.string() },
        async ({ name }) => {
            return {
                content: [{ type: "text", text: `Hello, ${name}!` }],
            };
        }
    );

    // Set up SSE endpoint
    let transport: SSEServerTransport | undefined;

    app.get("/api/mcp/sse", async (req, res) => {
        transport = new SSEServerTransport("/api/mcp/messages", res);
        await server.connect(transport);
    });

    app.post("/api/mcp/messages", async (req, res) => {
        if (transport) {
            await transport.handlePostMessage(req, res);
        } else {
            res.status(400).send("No active transport");
        }
    });

    return server;
};
