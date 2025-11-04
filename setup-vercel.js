#!/usr/bin/env node

console.log(`
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║     🚀 GetItHome - Vercel Deployment Setup Helper       ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝

This helper will guide you through deploying to Vercel!

📝 What you'll need:
   1. MongoDB Atlas account (free)
   2. GitHub account  
   3. That's it!

┌──────────────────────────────────────────────────────────┐
│  STEP 1: Setup MongoDB Atlas (2 minutes)                │
└──────────────────────────────────────────────────────────┘

1. Open: https://www.mongodb.com/cloud/atlas/register
2. Sign up with Google (easiest!)
3. Create FREE cluster (M0) - just click through defaults
4. Create Database User:
   • Username: getithomeuser
   • Password: Auto-generate & COPY IT!
5. Network Access:
   • Add IP Address → "Allow Access from Anywhere"
6. Connect → Drivers → COPY connection string
7. Replace <password> in connection string with your password

Example connection string:
mongodb+srv://getithomeuser:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/

┌──────────────────────────────────────────────────────────┐
│  STEP 2: Deploy to Vercel (3 minutes)                   │
└──────────────────────────────────────────────────────────┘

OPTION A - One-Click Deploy (Easiest!):
─────────────────────────────────────────
1. Open: https://vercel.com/new/clone?repository-url=https://github.com/vathsavv56/GetItHome-React&env=MONGODB_URI,JWT_SECRET

2. Login with GitHub

3. Enter Environment Variables:
   • MONGODB_URI: (paste your MongoDB connection string)
   • JWT_SECRET: your-super-secret-jwt-key-min-32-chars-long

4. Click "Deploy" and wait 2 minutes!

OPTION B - Import Existing Repo:
─────────────────────────────────
1. Push this code to GitHub:
   
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main

2. Go to: https://vercel.com/new

3. Import your GitHub repository

4. Add Environment Variables:
   • MONGODB_URI: (your MongoDB connection string)
   • MONGODB_DB: getithome
   • JWT_SECRET: your-super-secret-jwt-key-min-32-chars-long

5. Click "Deploy"!

┌──────────────────────────────────────────────────────────┐
│  ✅ YOU'RE DONE!                                         │
└──────────────────────────────────────────────────────────┘

Your app will be live at: https://your-project.vercel.app

Test it:
✓ Visit the URL
✓ Sign up with a test account
✓ Log in
✓ Create a booking
✓ Check MongoDB Atlas to see your data!

┌──────────────────────────────────────────────────────────┐
│  📚 Need More Help?                                      │
└──────────────────────────────────────────────────────────┘

• Quick Guide: See QUICK-START.md
• Detailed Guide: See DEPLOYMENT.md  
• Checklist: See CHECKLIST.md

Happy deploying! 🎉

`);
