# 📝 Copy-Paste Commands for Deployment

## Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Ready for Vercel deployment"

# Create main branch
git branch -M main

# Add your GitHub repository (replace with YOUR repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push
git push -u origin main
```

---

## Step 2: Get MongoDB Connection String

**Just go to:** https://www.mongodb.com/cloud/atlas/register

Then follow the visual guide in `EASIEST-DEPLOY.md`

---

## Step 3: Deploy to Vercel

### Option A: Click this link

https://vercel.com/new

Then:

1. Login with GitHub
2. Import your repository
3. Add environment variables (see below)
4. Click Deploy

### Option B: Use Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Then deploy to production
vercel --prod
```

---

## 🔑 Environment Variables to Add in Vercel

```
MONGODB_URI=mongodb+srv://YOUR_USER:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/
MONGODB_DB=getithome
JWT_SECRET=your-super-secret-jwt-key-at-least-32-characters-long
```

---

## ✅ Test Your Deployment

Open these URLs (replace `YOUR_APP` with your Vercel URL):

```
https://YOUR_APP.vercel.app
https://YOUR_APP.vercel.app/api/health
```

---

## 🔄 Update After Changes

```bash
# Make your changes, then:
git add .
git commit -m "Updated something"
git push
```

That's it! Vercel auto-deploys! ✨

---

## 🆘 Quick Fixes

### Reset everything and redeploy:

```bash
git add .
git commit -m "Fix"
git push
```

### Check what's deployed:

```bash
vercel ls
```

### See logs:

```bash
vercel logs
```

---

## 📞 Get Help

Run this command for interactive setup:

```bash
npm run setup-vercel
```

Or read these guides:

- **Easiest:** `EASIEST-DEPLOY.md`
- **Quick:** `QUICK-START.md`
- **Detailed:** `DEPLOYMENT.md`
- **Checklist:** `CHECKLIST.md`
