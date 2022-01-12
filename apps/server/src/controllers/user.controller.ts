import {Request, Response} from 'express'
import {StatusCodes} from 'http-status-codes'
import {getManager} from 'typeorm'
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

export const updateUserDetails = async (req: Request, res: Response) => {
  try {
    const authReq: AuthRequest = req
    const _email = authReq.user?.email
    const entityManager = getManager()
    const user = await entityManager.findOne(User, {email: _email})

    if (!user) {
      res.status(StatusCodes.BAD_REQUEST).json({msg: 'user does not exist'})
    }
    const {name, bio, photoUrl, phone, email, password} = req.body

    const updatedFields: any = {}
    if (name) {
      updatedFields.name = name
    }

    if (bio) {
      updatedFields.bio = bio
    }

    if (photoUrl) {
      updatedFields.photoUrl = photoUrl
    }

    if (phone) {
      updatedFields.phone = phone
    }

    if (email) {
      updatedFields.email = email
    }

    if (password) {
      updatedFields.password = password
    }
    await entityManager.save(user)

    res.status(StatusCodes.CREATED).json({...user, password: undefined})
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: err})
  }
}
