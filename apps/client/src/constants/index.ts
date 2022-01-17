import {
  AiOutlineGoogle,
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineGithub,
} from 'react-icons/ai'
import {facebookLogin, githubLogin, googleLogin, twitterLogin} from '../data'

export const socialAuth = [
  {
    icon: AiOutlineGoogle,
    link: '/google/login',
    callback: googleLogin,
  },
  {
    icon: AiFillFacebook,
    link: '/facebook/login',
    callback: facebookLogin,
  },
  {
    icon: AiOutlineTwitter,
    link: '/twitter/login',
    callback: twitterLogin,
  },
  {
    icon: AiOutlineGithub,
    link: '/github/login',
    callback: githubLogin,
  },
]

export const ACCESS_TOKEN = '__aa__.accessToken'
