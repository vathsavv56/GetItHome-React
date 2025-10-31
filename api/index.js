import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRouter from "../server/routes/auth.js";
import bookingsRouter from "../server/routes/bookings.js";

const app = express();

// Middlewares
app.use(cors({ origin: "*", credentials: false }));
app.use(express.json());

// MongoDB connection (cached for serverless)
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb && mongoose.connection.readyState === 1) {
    return cachedDb;
  }

  const MONGODB_URI = process.env.MONGODB_URI || "";

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is not set");
  }

  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(MONGODB_URI, {
      dbName: process.env.MONGODB_DB || "getithome",
    });
  }

  cachedDb = mongoose.connection;
  console.log("MongoDB connected");
  return cachedDb;
}

// Health check
app.get("/api/health", async (_req, res) => {
  try {
    await connectToDatabase();
    res.json({
      ok: true,
      service: "getithome-api",
      time: new Date().toISOString(),
      db: "connected",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      service: "getithome-api",
      time: new Date().toISOString(),
      error: error.message,
    });
  }
});

// Routes
app.use(
  "/api/auth",
  async (req, res, next) => {
    try {
      await connectToDatabase();
      next();
    } catch (error) {
      res
        .status(500)
        .json({ error: "Database connection failed: " + error.message });
    }
  },
  authRouter
);

app.use(
  "/api/bookings",
  async (req, res, next) => {
    try {
      await connectToDatabase();
      next();
    } catch (error) {
      res
        .status(500)
        .json({ error: "Database connection failed: " + error.message });
    }
  },
  bookingsRouter
);

// Global error handler
app.use((err, _req, res, _next) => {
  console.error("Error:", err);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || "Internal Server Error" });
});

// Export handler for Vercel
export default app;
