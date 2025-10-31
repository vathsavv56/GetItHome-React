# GetItHome-React

GetItHome — React rewrite with Vite

This is a modern Vite + React application that recreates the GetItHome website with enhanced animations and user experience.

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
