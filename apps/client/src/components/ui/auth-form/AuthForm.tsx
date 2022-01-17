import * as styles from './style.css'
import Brand from '../brand/Brand'
import {MdEmail, MdLock} from 'react-icons/md'
import {IAuthForm} from '../../../types'
import {socialAuth} from '../../../constants'

export default function AuthForm({
  title,
  subTitle,
  ctaText,
  buttonText,
}: IAuthForm) {
  return (
    <div className={styles.container}>
      <Brand />
      <h1
        className={styles.title}
        style={!subTitle ? {marginBottom: '27px'} : {}}
      >
        {title}
      </h1>
      {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
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
      <button className={styles.button}>{buttonText}</button>
      <p className={styles.actionText}>or continue with these social profile</p>
      <div className={styles.socialBox}>
        {socialAuth.map(social => (
          <div
            className={styles.socialProvider}
            key={social.link}
            onClick={() => social.callback()}
          >
            <social.icon fill="#828282" size="20px" />
          </div>
        ))}
      </div>
      <p className={styles.actionText} style={{marginBottom: '0px'}}>
        {ctaText}
      </p>
    </div>
  )
}
