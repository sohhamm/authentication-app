import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import {Request, Response} from 'express'
import {StatusCodes} from 'http-status-codes'
import {User} from '../entities/user'
import {validate} from 'class-validator'

export const register = async (req: Request, res: Response) => {
  try {
    // assigning default value is important for skip missing properties config to work in class validators
    const {email = '', password = ''} = req.body

    // edge case if the client send null explicitly for email or password, undefined is already handled
    if (!email || !password) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({msg: 'Please enter email or password'})
    }

    const user = new User()
    user.email = email
    user.password = password

    const errors = await validate(user, {
      skipMissingProperties: true,
      forbidUnknownValues: true,
    })

    if (errors.length > 0) {
      return res.status(StatusCodes.BAD_REQUEST).json(errors)
    }

    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password, salt)
    user.password = hashedPassword
    const token = jwt.sign({email}, process.env.JWT_SECRET!, {
      expiresIn: '30d',
    })
    await user.save()
    res.status(StatusCodes.CREATED).json({email, token})
  } catch (err) {
    res.status(StatusCodes.NOT_IMPLEMENTED).json({msg: err})
  }
}

export const login = async (_req: Request, res: Response) => {
  res.send('login')
}
