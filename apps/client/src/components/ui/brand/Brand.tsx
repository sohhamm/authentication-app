import * as styles from './style.css'
import brandLogo from '../../../assets/devchallenges.svg'

export default function Brand() {
  return (
    <div className={styles.box}>
      <img src={brandLogo} alt="brand logo" />
    </div>
  )
}
