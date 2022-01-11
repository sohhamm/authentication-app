import * as React from 'react'
import Brand from '../brand/Brand'
import * as styles from './style.css'
import {TiArrowSortedDown, TiArrowSortedUp} from 'react-icons/ti'
const profilePic = 'https://picsum.photos/50'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  return (
    <div className={styles.box}>
      <Brand />
      <div className={styles.profileBox}>
        <img
          src={profilePic}
          alt="profile picture"
          className={styles.profileImage}
        />
        <p>User Name</p>
        {isMenuOpen ? (
          <TiArrowSortedUp
            size={20}
            onClick={() => setIsMenuOpen(state => !state)}
          />
        ) : (
          <TiArrowSortedDown
            size={20}
            onClick={() => setIsMenuOpen(state => !state)}
          />
        )}
      </div>
    </div>
  )
}
