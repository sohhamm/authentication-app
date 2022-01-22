import express from 'express'
import passport from 'passport'
import {CLIENT_URL} from '../utils'
const router = express.Router()

router.get(
  '/login',
  passport.authenticate('github', {scope: ['user:email', 'read:user']}),
)

router.get('/logout', (req, res, _next) => {
  req.logout()
  res.redirect('/')
})

router.get(
  '/callback',
  passport.authenticate('google', {failureRedirect: CLIENT_URL + '/register'}),
  (_req, res, _next) => {
    res.redirect(CLIENT_URL)
  },
)

export {router as githubRoutes}
