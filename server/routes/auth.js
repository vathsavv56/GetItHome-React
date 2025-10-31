import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = Router();

// POST /api/auth/signup
router.post("/signup", async (req, res, next) => {
  try {
    const { name = "", email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters" });
    }
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ error: "Email already registered" });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, passwordHash });
    return res.status(201).json({ user });
  } catch (err) {
    // handle duplicate key error from Mongo
    if (err?.code === 11000) {
      return res.status(409).json({ error: "Email already registered" });
    }
    next(err);
  }
});

// POST /api/auth/login
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: "Invalid credentials" });

    const JWT_SECRET = process.env.JWT_SECRET || "";
    let token = null;
    if (JWT_SECRET) {
      token = jwt.sign({ sub: user.id, email: user.email }, JWT_SECRET, {
        expiresIn: "7d",
      });
    }
    return res.json({ user: user.toJSON(), token });
  } catch (err) {
    next(err);
  }
});

export default router;
