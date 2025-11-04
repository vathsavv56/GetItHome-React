import { Router } from "express";
import jwt from "jsonwebtoken";
import Booking from "../models/Booking.js";

const router = Router();

// Middleware to verify JWT token
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.substring(7);
  const JWT_SECRET = process.env.JWT_SECRET || "";

  if (!JWT_SECRET) {
    return res.status(500).json({ error: "Server configuration error" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.sub;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}

// POST /api/bookings - Create a new booking
router.post("/", authenticate, async (req, res, next) => {
  try {
    const { service, name, phone, address, date, time, notes } = req.body || {};

    if (!service || !name || !phone || !address || !date || !time) {
      return res
        .status(400)
        .json({ error: "All required fields must be provided" });
    }

    const booking = await Booking.create({
      userId: req.userId,
      service,
      name,
      phone,
      address,
      date,
      time,
      notes: notes || "",
    });

    return res.status(201).json({ booking: booking.toJSON() });
  } catch (err) {
    next(err);
  }
});

// GET /api/bookings - Get all bookings for the authenticated user
router.get("/", authenticate, async (req, res, next) => {
  try {
    const bookings = await Booking.find({ userId: req.userId }).sort({
      createdAt: -1,
    });
    return res.json({ bookings: bookings.map((b) => b.toJSON()) });
  } catch (err) {
    next(err);
  }
});

export default router;
