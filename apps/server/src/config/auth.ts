import passport from 'passport'
import dotenv from 'dotenv'
import {Strategy as GStrategy} from 'passport-google-oauth20'
import {Strategy as TStrategy} from 'passport-twitter'
import {Strategy as FBStrategy} from 'passport-facebook'
import {Strategy as GHStrategy} from 'passport-github2'
import {User} from '../entities/user'
import {getManager} from 'typeorm'
dotenv.config()
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  SESSION_SECRET,
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
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
      async (accessToken, refreshToken, profile, cb) => {
        console.log(accessToken, refreshToken)
        console.log({profile})
        const entityManager = getManager()
        const _email = profile?.emails ? profile.emails[0].value : ''
        const user = await entityManager.findOne(User, {
          email: _email,
        })
        if (!user) {
          //create a user
        } else {
          //update gID
          user.googleID = profile.id
        }
        return cb(null, {accessToken, profile})
      },
    ),
  )
}

export const twitterAuth = () => {
  passport.use(
    new TStrategy(
      {
        consumerKey: TWITTER_CONSUMER_KEY!,
        consumerSecret: TWITTER_CONSUMER_SECRET!,
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

export const facebookAuth = () => {
  passport.use(
    new FBStrategy(
      {
        clientID: FACEBOOK_APP_ID!,
        clientSecret: FACEBOOK_APP_SECRET!,
        callbackURL: 'auth/facebook/callback',
      },
      (accessToken, refreshToken, profile, cb) => {
        console.log(accessToken, refreshToken)
        console.log({profile})
        return cb(null, {accessToken, profile})
      },
    ),
  )
}

export const githubAuth = () => {
  passport.use(
    new GHStrategy(
      {
        clientID: GITHUB_CLIENT_ID!,
        clientSecret: GITHUB_CLIENT_SECRET!,
        callbackURL: 'auth/github/callback',
      },
      (accessToken: any, refreshToken: any, profile: any, cb: any) => {
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
