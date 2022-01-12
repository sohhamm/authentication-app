import {Request, Response} from 'express'
import {StatusCodes} from 'http-status-codes'
import {User} from '../entities/user'
import {AuthRequest} from '../types'

export const getUserDetails = async (req: Request, res: Response) => {
  try {
    const authReq: AuthRequest = req
    const email = authReq.user?.email
    const user = await User.findOne({email})
    if (!user) {
      res.status(StatusCodes.BAD_REQUEST).json({msg: 'user does not exist'})
    }

    res.json({...user, password: undefined})
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: err})
  }
}
