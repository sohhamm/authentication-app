import * as React from 'react'
import {ACCESS_TOKEN} from '../constants'

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [token, setToken] = React.useState<null | string>(null)

  React.useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN)
    if (!token) setIsLoggedIn(false)
    setToken(token)
  }, [])

  return {token, isLoggedIn}
}
