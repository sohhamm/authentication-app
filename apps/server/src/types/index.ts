import {Request} from 'express'

export type ComparePasswordFn = (
  password: string,
  hash: string,
) => Promise<boolean>

export type HashPasswordFn = (password: string) => Promise<string>

export type CreateJWTFn = (email: string) => Promise<string>

export interface AuthRequest extends Request {
  user?: {email: string}
}
