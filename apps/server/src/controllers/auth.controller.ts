import {Request, Response} from 'express'

export const register = async (_req: Request, res: Response) => {
  res.send('register')
}

export const login = async (_req: Request, res: Response) => {
  res.send('login')
}
