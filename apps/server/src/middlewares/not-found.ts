import {ReasonPhrases, StatusCodes} from 'http-status-codes'
import {Request, Response} from 'express'

export const notFound = (_: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND).json({err: ReasonPhrases.NOT_FOUND})
}
