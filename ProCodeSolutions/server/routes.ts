import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      
      // Save to storage
      const inquiry = await storage.createContactInquiry(validatedData);
      
      // Send email notification
      try {
        await resend.emails.send({
          from: "Contact Form <onboarding@resend.dev>",
          to: "ben.meredith1@icloud.com",
          subject: `New Website Inquiry from ${validatedData.name}`,
          html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #333;">New Contact Form Submission</h2>
    
    <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <p style="margin: 10px 0;"><strong>Name:</strong> ${validatedData.name}</p>
      <p style="margin: 10px 0;"><strong>Email:</strong> ${validatedData.email}</p>
      ${validatedData.phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
      ${validatedData.company ? `<p style="margin: 10px 0;"><strong>Company:</strong> ${validatedData.company}</p>` : ''}
      ${validatedData.budget ? `<p style="margin: 10px 0; color: #0071e3;"><strong>Budget:</strong> ${validatedData.budget}</p>` : ''}
    </div>
    
    <div style="margin: 20px 0;">
      <h3 style="color: #333;">Message:</h3>
      <p style="background: #fff; padding: 15px; border-left: 4px solid #0071e3;">
        ${validatedData.message}
      </p>
    </div>
    
    <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
    
    <p style="color: #666; font-size: 12px;">
      Reply directly to ${validatedData.email}
    </p>
  </div>
`,
text: `
New Website Inquiry

Name: ${validatedData.name}
Email: ${validatedData.email}
${validatedData.phone ? `Phone: ${validatedData.phone}` : ''}
${validatedData.company ? `Company: ${validatedData.company}` : ''}
${validatedData.budget ? `Budget: ${validatedData.budget}` : ''}

Message:
${validatedData.message}

Reply to: ${validatedData.email}
`,
        });
        
        console.log("✅ Email sent to ben.meredith1@icloud.com");
      } catch (emailError) {
        console.error("❌ Email failed:", emailError);
      }
      
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
