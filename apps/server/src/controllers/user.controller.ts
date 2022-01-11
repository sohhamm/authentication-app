import {Request, Response} from 'express'

export const getUserByID = (req: Request, res: Response) => {
  try {
    const {id = ''} = req.params
  } catch (err) {
    res.status(500).json({msg: err})
  }
}
