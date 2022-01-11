import {style} from '@vanilla-extract/css'

export const box = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const profileImage = style({
  height: '37px',
  width: '35px',
  borderRadius: '15px',
})

export const profileBox = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: '11px',
})

export const menu = style({
  border: '1px solid #E0E0E0',
})
