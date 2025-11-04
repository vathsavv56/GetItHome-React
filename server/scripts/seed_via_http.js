// Seed users by making HTTP POST requests without relying on fetch
import http from "http";

const API_HOST = "localhost";
const API_PORT = 5000;
const API_PATH = "/api/auth/signup";

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

function postJson(path, data) {
  const payload = Buffer.from(JSON.stringify(data));
  const options = {
    hostname: API_HOST,
    port: API_PORT,
    path,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": payload.length,
    },
  };
  return new Promise((resolve) => {
    const req = http.request(options, (res) => {
      let body = "";
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => resolve({ status: res.statusCode, body }));
    });
    req.on("error", (err) =>
      resolve({ status: 0, body: String(err.message || err) })
    );
    req.write(payload);
    req.end();
  });
}

async function run() {
  for (const u of users) {
    const r = await postJson(API_PATH, u);
    console.log(`${u.email} -> ${r.status} ${r.body}`);
  }
}

run();
