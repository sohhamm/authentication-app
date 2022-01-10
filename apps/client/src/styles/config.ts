import {createTheme} from '@vanilla-extract/css'

export const [themedClass, vars] = createTheme({
  color: {
    brand: 'blue',
  },
  font: {
    body: 'arial',
  },
})
