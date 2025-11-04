# 🚀 ONE-CLICK DEPLOYMENT TO VERCEL

## Super Quick Deploy (5 Minutes!)

### Step 1: Setup MongoDB Atlas (2 minutes)

1. Go to https://www.mongodb.com/cloud/atlas/register
2. Click **"Try Free"** → Sign up with Google
3. Click **"Create"** on the free M0 cluster (leave all defaults)
4. **Create Database User**:
   - Username: `getithomeuser`
   - Password: Click "Autogenerate Secure Password" → **COPY IT!**
   - Click "Create User"
5. **Network Access**:
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" → Confirm
6. Click **"Connect"** → **"Drivers"**
7. **COPY** the connection string (looks like: `mongodb+srv://getithomeuser:<password>@cluster0.xxxxx.mongodb.net/`)
8. Replace `<password>` with the password you copied in step 4

### Step 2: Deploy to Vercel (3 minutes)

#### Option A: Deploy Button (Easiest!)

Click this button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vathsavv56/GetItHome-React&env=MONGODB_URI,JWT_SECRET&envDescription=Required%20environment%20variables%20for%20the%20app&envLink=https://github.com/vathsavv56/GetItHome-React/blob/main/.env.example)

Then:

1. Login with GitHub
2. Give it a name (or use default)
3. Paste environment variables:
   - **MONGODB_URI**: Paste your MongoDB connection string from Step 1
   - **JWT_SECRET**: Use this: `your-super-secret-jwt-key-min-32-characters-long-change-in-prod`
4. Click **"Deploy"**
5. Wait 2 minutes → DONE! 🎉

#### Option B: Import from GitHub

1. Go to https://vercel.com/new
2. Login with GitHub
3. Click "Import" next to your repository
4. Add Environment Variables:
   ```
   MONGODB_URI = (paste from Step 1)
   MONGODB_DB = getithome
   JWT_SECRET = your-super-secret-jwt-key-min-32-characters-long-change-in-prod
   ```
5. Click **"Deploy"**
6. Wait 2 minutes → DONE! 🎉

---

## ✅ That's It!

Your app is live at: `https://your-project-name.vercel.app`

Test it:

- Visit the URL
- Click "Sign Up"
- Create an account
- Log in
- Create a booking

All data automatically saves to MongoDB! 🎊

---

## 🔧 Need to Change Something?

### Update Environment Variables

1. Go to https://vercel.com/dashboard
2. Select your project
3. Settings → Environment Variables
4. Edit and redeploy

### Redeploy

Just push to GitHub - Vercel auto-deploys! Or click "Redeploy" in Vercel dashboard.

---

## 🆘 Troubleshooting

**Problem:** Can't connect to database

- Make sure MongoDB Atlas Network Access allows `0.0.0.0/0`
- Check MONGODB_URI is correct in Vercel

**Problem:** API returns 404

- Redeploy the project in Vercel dashboard

**Everything else:** Check `DEPLOYMENT.md` for detailed help!
