import connectDB from "@/lib/db";
import Visitor from "@/lib/models/visitors";
import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js!",
  });
});

app.post("/visitors/increment", async (c) => {
  try {
    await connectDB();

    const visitor = await Visitor.findOneAndUpdate(
      {},
      {
        $inc: { count: 1 },
        $set: { lastUpdated: new Date() },
      },
      {
        new: true, // return updated document
        upsert: true, // create if doesn't exist
      },
    );

    return c.json({ count: visitor.count });
  } catch (error) {
    console.error("POST /visitors/increment error:", error);
    return c.json({ error: "Failed to increment visitor count" }, 500);
  }
});

export const GET = handle(app);
export const POST = handle(app);
