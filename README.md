# GetItHome-React

GetItHome — React rewrite with Vite

This is a modern Vite + React application that recreates the GetItHome website with enhanced animations and user experience.

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vathsavv56/GetItHome-React&env=MONGODB_URI,JWT_SECRET&envDescription=Required%20environment%20variables%20for%20the%20app&envLink=https://github.com/vathsavv56/GetItHome-React/blob/main/.env.example)

**→ See [QUICK-START.md](./QUICK-START.md) for 5-minute deployment guide!**

## Features

- ⚡ Built with Vite for lightning-fast development
- ⚛️ React 18 with functional components and hooks
- 🎨 Fully responsive design with mobile-first approach
- ✨ Subtle animations and hover effects throughout
- 🎯 Hash-based routing for simple navigation
- 💅 Clean, maintainable CSS with modern design patterns

## Quick Start

### Option 1: Run Everything Together (Recommended)

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Configure MongoDB** (create `server/.env`):

   ```env
   MONGODB_URI=mongodb://localhost:27017/getithome
   MONGODB_DB=getithome
   JWT_SECRET=your-secret-key-change-this-in-production
   PORT=5000
   ```

   For MongoDB Atlas, use:

   ```env
   MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster-host>/?retryWrites=true&w=majority
   ```

3. **Start both frontend and backend:**

   ```powershell
   # Run both servers with one command
   cmd /c "npm start"
   ```

   This will start:

   - API server at http://localhost:5000
   - Frontend at http://localhost:5173 (or next available port)

### Option 2: Run Servers Separately

2. **Run the frontend dev server:**
   ```bash
   npm run dev
   ```
3. **Run the backend API server (in another terminal):**

   ```bash
   npm run server:dev
   ```

4. **Open in browser:**
   - Frontend: http://localhost:5173
   - API health check: http://localhost:5000/api/health

## Backend API (MongoDB)

This project includes a lightweight Express API to handle signup/login and persist users in MongoDB (database name: `getithome`).

### Endpoints

- POST `/api/auth/signup` — body: `{ name?, email, password }`
- POST `/api/auth/login` — body: `{ email, password }` (returns `{ user, token }`)
- GET `/api/health` — health check endpoint

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

- `/src/components` - React components (Navbar, Home, Blog, Services, etc.)
- `/src/styles.css` - Global styles with animations and responsive design
- `/src/App.jsx` - Main app component with routing logic
- `/src/main.jsx` - Application entry point

## Technologies

- React 18.2.0
- Vite 5.0.0
- CSS3 with modern features (Grid, Flexbox, Animations)
- Google Fonts (Inter family)

## Notes

- Images use placeholder services (placehold.co)
- Full authentication with MongoDB backend for signup/login
- Supports local MongoDB or MongoDB Atlas
- Icons can be enhanced with Phosphor or similar icon libraries

## Available Scripts

- `npm start` — Run both frontend and backend together (recommended)
- `npm run dev` — Run only the frontend dev server
- `npm run server:dev` — Run only the backend API with auto-reload
- `npm run server` — Run backend API (production mode)
- `npm run build` — Build frontend for production
- `npm run preview` — Preview production build

## Deploying to Vercel

### Prerequisites

1. **MongoDB Atlas Account** (for cloud database)

   - Sign up at https://www.mongodb.com/cloud/atlas
   - Create a cluster and get your connection string
   - Whitelist all IPs (0.0.0.0/0) in Network Access for serverless functions

2. **Vercel Account**
   - Sign up at https://vercel.com
   - Install Vercel CLI (optional): `npm i -g vercel`

### Deployment Steps

#### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Ready for Vercel deployment"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Import to Vercel**

   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Vercel will auto-detect the configuration from `vercel.json`

3. **Add Environment Variables**

   - In Vercel dashboard, go to: **Settings → Environment Variables**
   - Add the following variables:
     ```
     MONGODB_URI = mongodb+srv://username:password@cluster.mongodb.net/
     MONGODB_DB = getithome
     JWT_SECRET = your-super-secret-jwt-key-change-this
     ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your app will be live at `https://your-project.vercel.app`

#### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed)

   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**

   ```bash
   vercel login
   ```

3. **Deploy**

   ```bash
   vercel
   ```

   - Follow the prompts
   - Add environment variables when prompted or via dashboard

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Environment Variables Required

Add these in Vercel Dashboard → Settings → Environment Variables:

| Variable      | Description               | Example                                        |
| ------------- | ------------------------- | ---------------------------------------------- |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/` |
| `MONGODB_DB`  | Database name             | `getithome`                                    |
| `JWT_SECRET`  | Secret key for JWT tokens | `your-secret-key-min-32-chars`                 |

### Verifying Deployment

After deployment, test these endpoints:

1. **Health Check**: `https://your-project.vercel.app/api/health`
2. **Frontend**: `https://your-project.vercel.app`
3. **Signup**: POST to `https://your-project.vercel.app/api/auth/signup`
4. **Login**: POST to `https://your-project.vercel.app/api/auth/login`

### Troubleshooting

- **MongoDB Connection Issues**: Make sure to whitelist `0.0.0.0/0` in MongoDB Atlas Network Access
- **Environment Variables**: Double-check they're added in Vercel dashboard
- **Build Errors**: Check Vercel build logs in the deployment dashboard
- **API Routes Not Working**: Ensure `vercel.json` is in the root directory

### Important Notes

- Vercel uses serverless functions for the backend (auto-scaling)
- MongoDB connection is cached to improve performance
- Cold starts may cause first request to be slightly slower
- Free tier has limits on bandwidth and function execution time
