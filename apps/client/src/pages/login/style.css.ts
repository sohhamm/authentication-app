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
