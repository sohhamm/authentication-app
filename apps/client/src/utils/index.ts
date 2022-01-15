import {useAuth} from '../hooks/use-auth'
import {TFetcher} from '../types'
const URL = 'http://localhost:9000/api/'

export const fetcher: TFetcher = async (url, method = 'GET', payload) => {
  const token = useAuth()
  return await (
    await fetch(URL + url, {
      method,
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      redirect: 'follow',
    })
  ).json()
}
