import {fetcher} from '../utils'

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
  return await fetcher('auth/google/login')
}

export const facebookLogin = async () => {
  return await fetcher('auth/facebook/login')
}

export const twitterLogin = async () => {
  return await fetcher('auth/twitter/login')
}

export const githubLogin = async () => {
  return await fetcher('auth/github/login')
}

export const logout = async () => {
  return await fetcher('auth/logout')
}
