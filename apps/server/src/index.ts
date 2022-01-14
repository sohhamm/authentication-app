import 'reflect-metadata'
import express, {Express, Response} from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'
import passport from 'passport'
import {connectDB} from './config/db'
import {
  authRoutes,
  userRoutes,
  twitterRoutes,
  githubRoutes,
  googleRoutes,
  facebookRoutes,
} from './routes'
import {notFound} from './middlewares/not-found'
import {authenticate} from './middlewares/authenticate'
import {
  facebookAuth,
  githubAuth,
  googleAuth,
  passportSession,
  twitterAuth,
} from './config/auth'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 9000

googleAuth()
twitterAuth()
facebookAuth()
githubAuth()
passportSession()

app.use(
  require('express-session')({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  }),
)
app.use(passport.initialize())
app.use(passport.session())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// health check route
app.get('/api/health', (_, res: Response) => {
  res.send('Health Check')
})

app.use('/api/auth', authRoutes)
app.use('/api/auth/google', googleRoutes)
app.use('/api/auth/twitter', twitterRoutes)
app.use('/api/auth/facebook', facebookRoutes)
app.use('/api/auth/github', githubRoutes)
app.use('/api/user', authenticate, userRoutes)

app.use([notFound])

const startServer = async () => {
  try {
    await connectDB()
    console.log('🚀 connected to the database...')
    app.listen(PORT, () => {
      console.log(`🔥 server listening at http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error('😞 DB connection failed')
    console.error(err)
  }
}

startServer()
