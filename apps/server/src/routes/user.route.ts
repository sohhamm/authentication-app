import express from 'express'
import {getUserByID} from '../controllers/user.controller'

const router = express.Router()

router.route('/:id').get(getUserByID).post()

export {router}
