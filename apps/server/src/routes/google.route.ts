import express from 'express'
import passport from 'passport'
const router = express.Router()

router.get('/login', passport.authenticate('google', {scope: 'profile'}))

router.get('/logout', (req, res, _next) => {
  req.logout()
  res.redirect('/')
})

router.get(
  '/callback',
  passport.authenticate('google', {failureRedirect: '/'}),
  (_req, res, _next) => {
    res.redirect('/')
  },
)

export {router as googleRoutes}
