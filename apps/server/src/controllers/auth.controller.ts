import {Request, Response} from 'express'
import {StatusCodes} from 'http-status-codes'
import {User} from '../entities/user'
import {validate} from 'class-validator'
import {createJWT, hashPassword, comparePassword} from '../utils'

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

    user.password = await hashPassword(password)
    const token = await createJWT(email)

    await user.save()
    res.status(StatusCodes.CREATED).json({email, token})
  } catch (err) {
    res.status(StatusCodes.NOT_IMPLEMENTED).json({msg: err})
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const {email = '', password = ''} = req.body

    if (!email || !password) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({msg: 'Please enter email or password'})
    }

    const user = await User.findOne({email})

    if (!user) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({msg: 'account not found please register'})
    }

    const isCorrectPassword = await comparePassword(
      password,
      user.password ?? '',
    )

    if (!isCorrectPassword) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({msg: 'invalid password'})
    }

    const token = await createJWT(email)
    res.status(StatusCodes.CREATED).json({email, token})
  } catch (err) {
    res.status(StatusCodes.NOT_IMPLEMENTED).json({msg: err})
  }
}
