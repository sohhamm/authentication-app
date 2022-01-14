import express from 'express'
import passport from 'passport'
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
  passport.authenticate('github', {failureRedirect: '/'}),
  (_req, res, _next) => {
    res.redirect('/')
  },
)

export {router as githubRoutes}
