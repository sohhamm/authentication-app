import {TFetcher} from '../types'
export const URL = 'http://localhost:9000/api/'

export const fetcher: TFetcher = async (
  url,
  token,
  method = 'GET',
  payload,
) => {
  return await (
    await fetch(URL + url, {
      method,
      // credentials: 'include',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      redirect: 'follow',
    })
  ).json()
}
