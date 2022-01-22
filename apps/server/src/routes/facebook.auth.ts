import express from 'express'
import passport from 'passport'
import {CLIENT_URL} from '../utils'
const router = express.Router()

router.get('/login', passport.authenticate('facebook'))

router.get(
  '/callback',
  passport.authenticate('facebook', {
    failureRedirect: CLIENT_URL + '/register',
  }),
  (_req, res, _next) => {
    res.redirect(CLIENT_URL)
  },
)

export {router as facebookRoutes}
