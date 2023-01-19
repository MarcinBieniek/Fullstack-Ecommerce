import { Send } from '@material-ui/icons'
import styles from './Newsletter.module.scss'

const Newsletter = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Newsletter</h1>
      <div className={styles.description}>Sign up for newsletter and get 10% discount!</div>
      <div className={styles.container_input}>
        <input 
          className={styles.input}
          placeholder="Your email"
        ></input>
        <button className={styles.button}>
            <Send />
        </button>
      </div>
    </div>
  )
}

export default Newsletter
