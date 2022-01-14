import Brand from '../../components/ui/brand/Brand'
import * as styles from './style.css'
import {MdEmail, MdLock} from 'react-icons/md'

export default function Login() {
  return (
    <div className={styles.center}>
      <div className={styles.container}>
        <Brand />
        <h1>Join thousands of learners from around the world </h1>
        <p>
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
        <div className={styles.inputContainer}>
          <i className={styles.icon}>
            <MdEmail size={'20px'} />
          </i>
          <input className={styles.input} type="email" placeholder="Email" />
        </div>
        <div className={styles.inputContainer}>
          <i className={styles.icon}>
            <MdLock size={'20px'} />
          </i>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
          />
        </div>
        <button>Start coding now </button>
        <p>or continue with these social profile</p>
      </div>
    </div>
  )
}
