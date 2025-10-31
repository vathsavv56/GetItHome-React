import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import bookingsRouter from "./routes/bookings.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env from server directory
dotenv.config({ path: join(__dirname, ".env") });

const app = express();

// Config
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "";

// Middlewares
app.use(cors({ origin: "*", credentials: false }));
app.use(express.json());

// Health check
app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    service: "getithome-api",
    time: new Date().toISOString(),
  });
});

// Routes
app.use("/api/auth", authRouter);
app.use("/api/bookings", bookingsRouter);

// Global error handler
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error("Error:", err);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || "Internal Server Error" });
});

// Start server after DB connect
async function start() {
  try {
    if (!MONGODB_URI) {
      console.warn(
        "WARNING: MONGODB_URI is not set. Server will start but DB operations will fail."
      );
    } else {
      await mongoose.connect(MONGODB_URI, {
        dbName: process.env.MONGODB_DB || "getithome",
      });
      console.log("MongoDB connected");
    }
    app.listen(PORT, () => {
      console.log(`API listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

start();
