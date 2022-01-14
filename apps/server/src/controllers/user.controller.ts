import {Request, Response} from 'express'
import {StatusCodes} from 'http-status-codes'
import {getManager} from 'typeorm'
import {User} from '../entities/user'
import {AuthRequest} from '../types'

export const getUserDetails = async (req: Request, res: Response) => {
  try {
    const authReq: any = req
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

export const updateUserDetails = async (req: Request, res: Response) => {
  try {
    const authReq: AuthRequest = req
    const _email = authReq.user?.email
    const entityManager = getManager()
    const user = await entityManager.findOne(User, {email: _email})

    if (!user) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({msg: 'user does not exist'})
    }
    const {name, bio, photoUrl, phone, email, password} = req.body

    if (name) {
      user.name = name
    }

    if (bio) {
      user.bio = bio
    }

    if (photoUrl) {
      user.photoUrl = photoUrl
    }

    if (phone) {
      user.phone = phone
    }

    if (email) {
      user.email = email
    }

    if (password) {
      user.password = password
    }
    await entityManager.save(user)

    res.status(StatusCodes.CREATED).json({...user, password: undefined})
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: err})
  }
}
