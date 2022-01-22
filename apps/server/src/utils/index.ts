import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import {ComparePasswordFn, CreateJWTFn, HashPasswordFn} from '../types'

export const createJWT: CreateJWTFn = async email => {
  return jwt.sign({email}, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRY,
  })
}

export const hashPassword: HashPasswordFn = async password => {
  const salt = await bcrypt.genSalt(10)

  return await bcrypt.hash(password, salt)
}

export const comparePassword: ComparePasswordFn = async (password, hash) => {
  return await bcrypt.compare(password, hash)
}

export const CLIENT_URL = 'http://localhost:3000'
