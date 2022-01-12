import express from 'express'
import {getUserDetails} from '../controllers/user.controller'

const router = express.Router()

router.route('/').get(getUserDetails).post()

export {router}
