import express from 'express'
import passport from 'passport'
const router = express.Router()

const CLIENT_URL = 'http://localhost:3000'

router.get(
  '/login',
  passport.authenticate('google', {scope: ['profile', 'email']}),
)

router.get(
  '/callback',
  passport.authenticate('google', {failureRedirect: CLIENT_URL + '/register'}),
  (req, res, _next) => {
    console.log(req.user, 'callback user')
    res.redirect(CLIENT_URL)
  },
)

export {router as googleRoutes}
