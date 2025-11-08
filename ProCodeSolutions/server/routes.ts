import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      res.json(inquiry);
    } catch (error) {
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({ error: "Invalid request data", details: error });
      } else {
        res.status(500).json({ error: "Failed to submit contact inquiry" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
