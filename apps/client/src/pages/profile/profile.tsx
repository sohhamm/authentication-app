import * as React from 'react'
import * as styles from './style.css'
import Header from '../../components/ui/header/Header'

export default function Profile() {
  const [editMode, setEditMode] = React.useState(false)
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.heading}>
        <h1>Personal Info</h1>
        <p>Basic info, like your name and photo</p>
      </div>
      <div className={styles.info}>
        <div className={styles.info1}>
          <div>
            <h3>Profile</h3>
            <p>Some info may be visible to other people</p>
          </div>

          <button className={styles.editBtn} onClick={() => setEditMode(true)}>
            Edit
          </button>
        </div>

        <div className={styles.infoN}>
          <div>NAME</div>
          <div></div>
        </div>
      </div>
      <div className={styles.attribution}>
        <p>
          created by{' '}
          <a
            href="https://linkedin.com/in/sohhamm"
            style={{fontWeight: 'bold', color: '#828282'}}
          >
            Soham Sarkar
          </a>
        </p>
        <p>devChallenges.io</p>
      </div>
    </div>
  )
}
