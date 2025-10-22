import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI || ''

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', ts: Date.now() })
})

app.use('/api/auth', authRoutes)

async function start() {
  if (!MONGODB_URI) {
    console.error('Missing MONGODB_URI in environment')
    process.exit(1)
  }
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('MongoDB connected')
    app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`))
  } catch (err) {
    console.error('Failed to start server:', err)
    process.exit(1)
  }
}

start()

