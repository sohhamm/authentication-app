import {style} from '@vanilla-extract/css'
import {vars} from '../../styles/theme.css'

export const container = style({
  border: `1px solid ${vars.colors.border}`,
  maxWidth: '475px',
  width: '100%',
  borderRadius: '24px',
  display: 'flex',
  flexDirection: 'column',
  padding: '48px 58px 43px 58px',
  height: '635px',
})

export const center = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
})

export const inputContainer = style({
  position: 'relative',
})

export const icon = style({
  position: 'absolute',
  left: '15px',
  top: '15px',
  color: vars.colors.icon,
})

export const input = style({
  height: '48px',
  width: '365px',
  borderRadius: '8px',
  border: '1px solid #BDBDBD',
  marginBottom: '14.5px',
  '::placeholder': {
    paddingLeft: '40px',
  },
})
