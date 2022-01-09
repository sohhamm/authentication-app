import express, {Express} from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'
dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 9000

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// health check route
app.get('/', (_, res) => {
  res.send('Health Check')
})

// app.use("/api", catRoutes);
// app.use([notFound]);
// main function
;(async () => {
  try {
    // await connectDB()
    // console.log('🚀 connected to the database...')
    app.listen(PORT, () => {
      console.log(`🔥 server listening at http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error('😞 DB connection failed')
    console.error(err)
  }
})()
