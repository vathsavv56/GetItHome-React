// Seed users by calling the running API's signup endpoint
// Useful when direct MongoDB access from this machine has TLS/DNS issues

const API = process.env.API_BASE || "http://localhost:5000/api";

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

async function seedViaApi() {
  for (const u of users) {
    try {
      const res = await fetch(`${API}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(u),
      });
      const text = await res.text();
      console.log(`${u.email} -> ${res.status} ${text}`);
    } catch (err) {
      console.error(`${u.email} -> ERROR`, err.message || err);
    }
  }
}

seedViaApi();
