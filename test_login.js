// Quick login test using Node's http module
import http from "http";

const credentials = {
  email: "inavoluvathsav@gmail.com",
  password: "Madarau1@",
};

const payload = Buffer.from(JSON.stringify(credentials));
const options = {
  hostname: "localhost",
  port: 5000,
  path: "/api/auth/login",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": payload.length,
  },
};

const req = http.request(options, (res) => {
  let body = "";
  res.on("data", (chunk) => (body += chunk));
  res.on("end", () => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Response: ${body}`);
    const data = JSON.parse(body);
    if (data.token) {
      console.log("\n✅ LOGIN SUCCESSFUL!");
      console.log(`Token: ${data.token.substring(0, 50)}...`);
    } else {
      console.log("\n❌ LOGIN FAILED - No token returned");
    }
  });
});

req.on("error", (err) => console.error("ERROR:", err.message));
req.write(payload);
req.end();
