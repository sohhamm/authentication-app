import {createGlobalTheme} from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  space: {
    small: '4px',
    medium: '8px',
    large: '16px',
  },
  fonts: {
    primary: 'Noto Sans',
  },
  colors: {
    primary: '#2F80ED',
    secondary: '#DB2777',
    darkBg: '#333333',
    link: '#2D9CDB',
    border: '#BDBDBD',
    text: {
      normal: '#1F2937',
      dimmed: '#6B7280',
    },
  },
})
