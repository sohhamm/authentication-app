import {Link} from 'react-router-dom'
import AuthForm from '../../components/ui/auth-form/AuthForm'
import * as styles from './style.css'

const title = 'Join thousands of learners from around the world'
const subTitle =
  'Master web development by making real-life projects. There are multiple paths for you to choose'

const cta = (
  <>
    Already a member?{` `}
    <Link to="/login" style={{textDecoration: 'none'}}>
      Login
    </Link>
  </>
)
export default function Register() {
  return (
    <div className={styles.center}>
      <AuthForm title={title} subTitle={subTitle} ctaText={cta} />
    </div>
  )
}
