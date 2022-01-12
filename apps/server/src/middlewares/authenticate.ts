import jwt from 'jsonwebtoken'
import {NextFunction, Response} from 'express'
import {StatusCodes} from 'http-status-codes'
import {AuthRequest} from '../types'

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
      return res.status(StatusCodes.UNAUTHORIZED).json({msg: 'unauthenticated'})
    }
    const token = authHeader.split(' ')[1]
    const payload: any = jwt.verify(token, process.env.JWT_SECRET!)
    req.user = {email: payload.email}
    next()
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
  }
}
