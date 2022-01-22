import express from 'express'
import passport from 'passport'
import {CLIENT_URL} from '../utils'
const router = express.Router()

router.get(
  '/login',
  passport.authenticate('google', {scope: ['profile', 'email']}),
)

router.get(
  '/callback',
  passport.authenticate('google', {failureRedirect: CLIENT_URL + '/register'}),
  (_req, res, _next) => {
    // todo move to jwt instead of session
    res.redirect(CLIENT_URL)
  },
)

export {router as googleRoutes}
