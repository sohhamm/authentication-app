import Brand from '../../components/ui/brand/Brand'
import * as styles from './style.css'

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
        <input type="email" />
        <input type="password" />
        <button>Start coding now </button>
        <p>or continue with these social profile</p>
      </div>
    </div>
  )
}
