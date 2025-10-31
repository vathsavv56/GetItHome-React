# 🚀 Quick Vercel Deployment Guide

## ✅ What You Need Before Deploying

### 1. MongoDB Atlas Setup

- Go to https://www.mongodb.com/cloud/atlas
- Create a **FREE** cluster
- Create a database user (username & password)
- **IMPORTANT**: Go to Network Access → Add IP Address → Allow Access from Anywhere (0.0.0.0/0)
- Get your connection string from "Connect" → "Connect your application"
  - Should look like: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/`

### 2. GitHub Repository

- Push your code to GitHub
- Make sure all changes are committed

## 🎯 Step-by-Step Deployment

### Option A: Via Vercel Dashboard (Recommended - Easiest!)

1. **Go to Vercel**: https://vercel.com
2. **Sign up/Login** with your GitHub account
3. **Click "Add New Project"**
4. **Import your GitHub repository**
5. **Configure Project**:
   - Framework Preset: Vite (should auto-detect)
   - Build Command: `npm run build` (or leave default)
   - Output Directory: `dist` (should auto-detect)
6. **Add Environment Variables** (click "Environment Variables"):

   ```
   Name: MONGODB_URI
   Value: mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/

   Name: MONGODB_DB
   Value: getithome

   Name: JWT_SECRET
   Value: (generate a random 32+ character string)
   ```

7. **Click Deploy** 🎉

### Option B: Via Command Line

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Follow prompts, then deploy to production
vercel --prod
```

## 🧪 Testing Your Deployment

After deployment, test these URLs (replace `your-app` with your Vercel URL):

1. **Frontend**: https://your-app.vercel.app
2. **API Health**: https://your-app.vercel.app/api/health
3. **Test Signup**:
   ```bash
   curl -X POST https://your-app.vercel.app/api/auth/signup \
     -H "Content-Type: application/json" \
     -d '{"name":"Test User","email":"test@example.com","password":"test123"}'
   ```

## 🔧 Important Configuration Files

Your project now has these Vercel-specific files:

- ✅ `vercel.json` - Vercel configuration (routing, builds)
- ✅ `api/index.js` - Serverless API handler
- ✅ `.env.example` - Template for environment variables
- ✅ `.vercelignore` - Files to exclude from deployment

## 📝 Environment Variables You Need

| Variable      | Where to Get It                             | Example                                        |
| ------------- | ------------------------------------------- | ---------------------------------------------- |
| `MONGODB_URI` | MongoDB Atlas → Connect → Connection String | `mongodb+srv://user:pass@cluster.mongodb.net/` |
| `MONGODB_DB`  | Choose a name                               | `getithome`                                    |
| `JWT_SECRET`  | Generate random string (32+ chars)          | Use a password generator                       |

### Generate JWT_SECRET:

```bash
# On Windows PowerShell
[System.Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes((New-Guid).ToString() + (New-Guid).ToString()))

# Or use any password generator online
```

## ⚡ How It Works on Vercel

1. **Frontend (React/Vite)**: Built as static files, served from CDN
2. **Backend (Express API)**: Runs as serverless functions
3. **Database (MongoDB)**: Hosted on MongoDB Atlas (cloud)
4. **Routing**:
   - `/` → React app
   - `/api/*` → Express API (serverless)

## 🐛 Common Issues & Solutions

### Issue: "Cannot connect to MongoDB"

**Solution**:

- Check MongoDB Atlas Network Access allows `0.0.0.0/0`
- Verify `MONGODB_URI` is correct in Vercel environment variables
- Make sure username/password don't have special characters (or URL-encode them)

### Issue: "API routes return 404"

**Solution**:

- Verify `vercel.json` exists in root directory
- Check `api/index.js` exists
- Redeploy the project

### Issue: "Environment variables not working"

**Solution**:

- Add variables in Vercel Dashboard → Settings → Environment Variables
- Redeploy after adding variables (important!)

### Issue: "Build fails"

**Solution**:

- Check build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Try building locally: `npm run build`

## 🎉 Success Checklist

- [ ] MongoDB Atlas cluster created
- [ ] Network Access configured (0.0.0.0/0)
- [ ] Database user created
- [ ] Connection string copied
- [ ] Code pushed to GitHub
- [ ] Project imported to Vercel
- [ ] Environment variables added in Vercel
- [ ] Deployment successful
- [ ] Frontend loads at Vercel URL
- [ ] API health check works
- [ ] Can sign up new user
- [ ] Can log in
- [ ] Data saved to MongoDB

## 📚 Resources

- Vercel Documentation: https://vercel.com/docs
- MongoDB Atlas Docs: https://docs.atlas.mongodb.com/
- Vercel + Express: https://vercel.com/guides/using-express-with-vercel

## 💡 Pro Tips

- Use Vercel's preview deployments for testing (every git push creates one)
- Set up automatic deployments from GitHub (it's automatic by default)
- Check Vercel logs if something isn't working
- MongoDB Atlas free tier is 512MB - more than enough to start!
- Vercel free tier includes SSL certificate (HTTPS) automatically

---

**Need Help?** Check the Vercel dashboard logs or MongoDB Atlas metrics for clues!
