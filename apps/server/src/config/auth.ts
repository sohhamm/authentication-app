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
        callbackURL: 'api/auth/google/callback',
        sessionKey: SESSION_SECRET,
      },
      async (accessToken, _refreshToken, profile, cb) => {
        const {
          _json: {name, sub, picture, email},
        } = profile
        const entityManager = getManager()
        const user = await entityManager.findOne(User, {
          email,
        })

        if (!user) {
          //create a user
          const newUser = new User()
          newUser.name = name
          newUser.googleID = sub
          newUser.photoUrl = picture
          if (email) newUser.email = email
          await newUser.save()
        } else {
          //update gID
          user.googleID = sub
          await user.save()
        }
        return cb(null, accessToken)
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
        callbackURL: 'api/auth/twitter/callback',
        sessionKey: SESSION_SECRET,
      },
      (accessToken, _refreshToken, profile, cb) => {
        console.log({profile})
        return cb(null, accessToken)
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
        callbackURL: 'api/auth/facebook/callback',
      },
      (accessToken, _refreshToken, profile, cb) => {
        console.log({profile})
        return cb(null, accessToken)
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
        callbackURL: 'api/auth/github/callback',
      },
      (accessToken: any, _refreshToken: any, profile: any, cb: any) => {
        console.log({profile})
        return cb(null, accessToken)
      },
    ),
  )
}

export const passportSession = () => {
  passport.serializeUser((user, cb) => {
    cb(null, user)
  })

  passport.deserializeUser((user: any, cb) => {
    cb(null, user)
  })
}
