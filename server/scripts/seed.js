import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import User from "../models/User.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load env from server/.env
dotenv.config({ path: join(__dirname, "..", ".env") });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Missing MONGODB_URI in server/.env");
  process.exit(1);
}

const users = [
  {
    name: "Inavolu Vathsav",
    email: "inavoluvathsav@gmail.com",
    password: "Madarau1@",
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    password: "Password1!",
  },
  { name: "Bob Smith", email: "bob.smith@example.com", password: "Password1!" },
  {
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    password: "Password1!",
  },
  {
    name: "Diana Prince",
    email: "diana.prince@example.com",
    password: "Password1!",
  },
  {
    name: "Ethan Hunt",
    email: "ethan.hunt@example.com",
    password: "Password1!",
  },
  {
    name: "Fiona Gallagher",
    email: "fiona.gallagher@example.com",
    password: "Password1!",
  },
  {
    name: "George Clark",
    email: "george.clark@example.com",
    password: "Password1!",
  },
  {
    name: "Hannah Lee",
    email: "hannah.lee@example.com",
    password: "Password1!",
  },
  {
    name: "Ian Wright",
    email: "ian.wright@example.com",
    password: "Password1!",
  },
];

async function main() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI, {
      dbName: process.env.MONGODB_DB || "getithome",
    });
    console.log("Connected");

    // Prepare docs with passwordHash
    const docs = [];
    for (const u of users) {
      const passwordHash = await bcrypt.hash(u.password, 10);
      docs.push({ name: u.name, email: u.email, passwordHash });
    }

    // Insert with upsert-like behavior: try insertMany unordered
    console.log("Seeding users...");
    const result = await User.insertMany(docs, { ordered: false });
    console.log(`Inserted ${result.length} users`);
  } catch (err) {
    // If duplicates occur, insertMany throws but may still insert others when ordered:false
    if (err && err.writeErrors) {
      const inserted = err.result?.result?.nInserted || 0;
      const dupCount = err.writeErrors.length;
      console.warn(
        `Completed with duplicates. Inserted: ${inserted}, Duplicates: ${dupCount}`
      );
    } else {
      console.error("Seeding error:", err.message || err);
    }
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected");
  }
}

main().then(() => process.exit(0));
