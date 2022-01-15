import {Link} from 'react-router-dom'
import AuthForm from '../../components/ui/auth-form/AuthForm'
import * as styles from './style.css'

const cta = (
  <>
    Don't have an account yet?{` `}
    <Link to="/register" style={{textDecoration: 'none'}}>
      Register
    </Link>
  </>
)

export default function Login() {
  return (
    <div className={styles.center}>
      <AuthForm title="Login" ctaText={cta} buttonText="Login" />
    </div>
  )
}
