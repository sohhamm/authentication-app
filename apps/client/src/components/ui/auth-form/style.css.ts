import {style} from '@vanilla-extract/css'
import {vars} from '../../../styles/theme.css'

export const container = style({
  border: `1px solid ${vars.colors.border}`,
  maxWidth: '475px',
  width: '100%',
  borderRadius: '24px',
  display: 'flex',
  flexDirection: 'column',
  padding: '48px 58px 43px 58px',
  height: 'auto',
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

export const button = style({
  backgroundColor: vars.colors.primary,
  borderRadius: '8px',
  width: '365px',
  color: 'white',
  marginTop: '7.5px',
  border: 'none',
  marginBottom: '32px',
  height: '38px',
  cursor: 'pointer',
})

export const title = style({
  marginBottom: '14.5px',
  fontSize: '18px',
  fontWeight: 'semibold',
  marginTop: '33px',
})
export const subTitle = style({
  marginBottom: '35px',
  fontSize: '16px',
})

export const actionText = style({
  textAlign: 'center',
  marginBottom: '22px',
  fontWeight: 400,
  color: '#828282',
  fontSize: '14px',
})

export const socialBox = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: '20px',
  marginBottom: '33px',
})

export const socialProvider = style({
  border: '1px solid #828282',
  borderRadius: '100%',
  padding: '10px',
  cursor: 'pointer',
})
