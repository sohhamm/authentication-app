import {ConnectionOptions, createConnection} from 'typeorm'
import {User} from './entities/user'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config({path: path.resolve(__dirname + '../.env')})

export const connectDB = async () => {
  const options: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'me',
    password: process.env.DEV_DB_PASSWORD,
    database: 'auth_db',
    entities: [User],
    synchronize: true,
  }

  if (process.env.NODE_ENV === 'production') {
    Object.assign(options, {
      url: process.env.DATABASE_URL,
      ssl: {rejectUnauthorized: false},
    })
  }

  await createConnection(options)
}
