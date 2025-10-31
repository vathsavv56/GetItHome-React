# ✅ Vercel Deployment Checklist

Copy this checklist and check off items as you complete them!

## 📋 Pre-Deployment

### MongoDB Atlas Setup

- [ ] Create MongoDB Atlas account (https://www.mongodb.com/cloud/atlas)
- [ ] Create a new FREE cluster
- [ ] Create database user with username and password
- [ ] Go to Network Access → Add IP Address → Allow 0.0.0.0/0 (important!)
- [ ] Get connection string from "Connect" button
- [ ] Connection string format: `mongodb+srv://username:password@cluster.mongodb.net/`

### Local Testing (Optional but Recommended)

- [ ] Create `server/.env` file with:
  ```
  MONGODB_URI=your_mongodb_connection_string
  MONGODB_DB=getithome
  JWT_SECRET=any-random-string-for-testing
  ```
- [ ] Run `npm install`
- [ ] Run `npm start` to test locally
- [ ] Visit http://localhost:5173 and test signup/login
- [ ] Verify data appears in MongoDB Atlas

### GitHub Repository

- [ ] Initialize git: `git init`
- [ ] Add all files: `git add .`
- [ ] Commit: `git commit -m "Ready for Vercel deployment"`
- [ ] Create GitHub repository
- [ ] Push code:
  ```
  git remote add origin https://github.com/yourusername/your-repo.git
  git push -u origin main
  ```

## 🚀 Deployment on Vercel

### Step 1: Import Project

- [ ] Go to https://vercel.com
- [ ] Sign up/Login with GitHub
- [ ] Click "Add New Project" or "Import Project"
- [ ] Select your GitHub repository
- [ ] Click "Import"

### Step 2: Configure Project

- [ ] Framework Preset: Should auto-detect as "Vite"
- [ ] Root Directory: Leave as `./` (root)
- [ ] Build Command: Should be `npm run build` or auto-detected
- [ ] Output Directory: Should be `dist`
- [ ] Install Command: Should be `npm install`

### Step 3: Environment Variables

Click "Environment Variables" and add:

- [ ] **MONGODB_URI**
  - Value: Your MongoDB Atlas connection string
  - Example: `mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/`
- [ ] **MONGODB_DB**
  - Value: `getithome`
- [ ] **JWT_SECRET**
  - Value: Generate a secure random string (32+ characters)
  - Use: https://www.random.org/strings/ or PowerShell command:
    ```powershell
    [System.Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes((New-Guid).ToString() + (New-Guid).ToString()))
    ```

### Step 4: Deploy

- [ ] Click "Deploy" button
- [ ] Wait for deployment (usually 1-3 minutes)
- [ ] Check for any errors in build logs

## ✅ Post-Deployment Testing

### Verify Everything Works

- [ ] Visit your Vercel URL (will be shown after deployment)
- [ ] Check homepage loads correctly
- [ ] Test API health: `https://your-app.vercel.app/api/health`
- [ ] Click "Sign Up" and create a test account
- [ ] Log in with the test account
- [ ] Create a test booking/service request
- [ ] Verify data in MongoDB Atlas:
  - Go to Atlas → Browse Collections
  - Check `getithome` database for `users` and `bookings` collections

### Test Each Feature

- [ ] Navigation menu works
- [ ] Home page loads
- [ ] Services page loads
- [ ] Sign Up form works
- [ ] Login form works
- [ ] Logout works
- [ ] User session persists on page reload
- [ ] Booking/service forms work
- [ ] Data saves to MongoDB

## 🐛 Troubleshooting

If something doesn't work:

### Frontend Issues

- [ ] Check Vercel deployment logs
- [ ] Verify `dist` folder was created during build
- [ ] Check browser console for errors

### API Issues

- [ ] Verify all environment variables are set correctly
- [ ] Check `/api/health` endpoint
- [ ] Review Vercel Functions logs (Settings → Functions)
- [ ] Verify MongoDB Atlas allows connections from anywhere (0.0.0.0/0)

### Database Issues

- [ ] Check MongoDB Atlas is active and running
- [ ] Verify Network Access includes 0.0.0.0/0
- [ ] Test connection string with MongoDB Compass
- [ ] Check database user has read/write permissions

## 🎉 Success Indicators

You've successfully deployed when:

- ✅ Vercel URL loads your React app
- ✅ `/api/health` returns success JSON
- ✅ You can sign up a new user
- ✅ You can log in
- ✅ User data appears in MongoDB Atlas
- ✅ Booking/service data saves to database
- ✅ Sessions persist across page reloads

## 📝 After Deployment

### Domain (Optional)

- [ ] Add custom domain in Vercel Settings → Domains
- [ ] Update DNS records as instructed
- [ ] Wait for SSL certificate (automatic)

### Monitoring

- [ ] Check Vercel Analytics (available in dashboard)
- [ ] Monitor MongoDB Atlas metrics
- [ ] Set up alerts for errors (in Vercel settings)

### Optimization

- [ ] Review performance in Vercel Analytics
- [ ] Check function execution times
- [ ] Optimize MongoDB queries if needed

## 🔒 Security Notes

- ✅ Never commit `.env` files to git
- ✅ Use strong JWT_SECRET (32+ characters)
- ✅ Use strong MongoDB password
- ✅ Keep Vercel and MongoDB Atlas accounts secure
- ✅ Regularly update dependencies

## 📞 Getting Help

If you're stuck:

1. Check Vercel deployment logs
2. Check MongoDB Atlas connection
3. Review DEPLOYMENT.md for detailed guides
4. Check Vercel documentation: https://vercel.com/docs
5. MongoDB Atlas docs: https://docs.atlas.mongodb.com/

---

**Last Updated:** October 31, 2025
**Status:** Ready for deployment! 🚀
