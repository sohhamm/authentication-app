import {useAuth} from '../hooks/use-auth'
const URL = 'http://localhost:9000/api/'

export const fetcher = async (url: string, method = 'GET', payload: any) => {
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
