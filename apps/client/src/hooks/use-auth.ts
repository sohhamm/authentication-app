import {ACCESS_TOKEN} from '../constants'

export const useAuth = () => {
  const token = localStorage.getItem(ACCESS_TOKEN)

  return {token}
}
