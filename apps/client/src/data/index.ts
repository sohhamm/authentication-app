import {fetcher} from '../utils'
import {URL} from '../utils'

export const getProfileDetails = async () => {
  const data = await fetcher('user')
  return data
}

export const updateProfileDetails = async (payload: any) => {
  const data = await fetcher('user', 'PATCH', payload)
  return data
}

export const emailLogin = async (payload: {
  email: string
  password: string
}) => {
  return await fetcher('auth/login', 'POST', payload)
}

export const emailRegister = async (payload: {
  email: string
  password: string
}) => {
  return await fetcher('auth/register', 'POST', payload)
}

export const googleLogin = async () => {
  window.open(URL + 'auth/google/login', '_self')
}

export const facebookLogin = async () => {
  window.open(URL + 'auth/facebook/login', '_self')
}

export const twitterLogin = async () => {
  window.open(URL + 'auth/twitter/login', '_self')
}

export const githubLogin = async () => {
  window.open(URL + 'auth/github/login', '_self')
}

export const logout = async () => {
  window.open(URL + 'auth/logout', '_self')
}
