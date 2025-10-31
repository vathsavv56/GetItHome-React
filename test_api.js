import fetch from "node-fetch";

// Test configuration
const BASE_URL = process.env.API_URL || "http://localhost:5000";
const TEST_USER = {
  name: "Test User",
  email: `test${Date.now()}@example.com`,
  password: "test123456",
};

console.log("🧪 Testing GetItHome API...\n");
console.log(`📍 Base URL: ${BASE_URL}\n`);

async function test() {
  try {
    // 1. Health Check
    console.log("1️⃣ Testing Health Check...");
    const healthRes = await fetch(`${BASE_URL}/api/health`);
    const health = await healthRes.json();
    console.log("✅ Health:", health);
    console.log("");

    // 2. Signup
    console.log("2️⃣ Testing Signup...");
    const signupRes = await fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(TEST_USER),
    });
    const signupData = await signupRes.json();

    if (!signupRes.ok) {
      console.log("❌ Signup failed:", signupData);
      return;
    }

    console.log("✅ Signup successful!");
    console.log("   User:", signupData.user);
    console.log("   Token:", signupData.token.substring(0, 20) + "...");
    console.log("");

    // 3. Login
    console.log("3️⃣ Testing Login...");
    const loginRes = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: TEST_USER.email,
        password: TEST_USER.password,
      }),
    });
    const loginData = await loginRes.json();

    if (!loginRes.ok) {
      console.log("❌ Login failed:", loginData);
      return;
    }

    console.log("✅ Login successful!");
    console.log("   User:", loginData.user);
    console.log("   Token:", loginData.token.substring(0, 20) + "...");
    console.log("");

    // 4. Create Booking
    console.log("4️⃣ Testing Create Booking...");
    const bookingRes = await fetch(`${BASE_URL}/api/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${loginData.token}`,
      },
      body: JSON.stringify({
        service: "Home Cleaning",
        date: new Date().toISOString(),
        notes: "Test booking from automated test",
      }),
    });
    const bookingData = await bookingRes.json();

    if (!bookingRes.ok) {
      console.log("❌ Booking failed:", bookingData);
      return;
    }

    console.log("✅ Booking created!");
    console.log("   Booking ID:", bookingData.booking._id);
    console.log("   Service:", bookingData.booking.service);
    console.log("");

    console.log("🎉 All tests passed!\n");
    console.log("✨ Your API is ready for deployment to Vercel!\n");
  } catch (error) {
    console.error("❌ Test failed:", error.message);
    console.log("\n💡 Make sure your server is running:");
    console.log("   npm run server");
  }
}

test();
