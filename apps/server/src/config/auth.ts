import passport from 'passport'
import dotenv from 'dotenv'
import {Strategy as GStrategy} from 'passport-google-oauth20'
import {Strategy as TStrategy} from 'passport-twitter'
dotenv.config()
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  TWITTER_CLIENT_ID,
  TWITTER_CLIENT_SECRET,
  SESSION_SECRET,
} = process.env

export const googleAuth = () => {
  passport.use(
    new GStrategy(
      {
        clientID: GOOGLE_CLIENT_ID!,
        clientSecret: GOOGLE_CLIENT_SECRET!,
        callbackURL: 'auth/google/callback',
        sessionKey: SESSION_SECRET,
      },
      (accessToken, refreshToken, profile, cb) => {
        console.log(accessToken, refreshToken)
        console.log({profile})
        return cb(null, {accessToken, profile})
      },
    ),
  )
}

export const twitterAuth = () => {
  passport.use(
    new TStrategy(
      {
        consumerKey: TWITTER_CLIENT_ID!,
        consumerSecret: TWITTER_CLIENT_SECRET!,
        callbackURL: 'auth/twitter/callback',
        sessionKey: SESSION_SECRET,
      },
      (accessToken, refreshToken, profile, cb) => {
        console.log(accessToken, refreshToken)
        console.log({profile})
        return cb(null, {accessToken, profile})
      },
    ),
  )
}

export const passportSession = () => {
  passport.serializeUser((user, cb) => {
    cb(null, user)
  })

  passport.deserializeUser((obj: any, cb) => {
    cb(null, obj)
  })
}
