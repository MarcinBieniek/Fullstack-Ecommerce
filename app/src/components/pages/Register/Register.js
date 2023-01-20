import styles from './Register.module.scss'

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>CREATE AN ACCOUNT</h1>
        <form className={styles.form}>
          <input 
            className={styles.form_input}
            placeholder="name"
          ></input>
          <input 
            className={styles.form_input}
            placeholder="last name"
          ></input>
          <input 
            className={styles.form_input}
            placeholder="username"
          ></input>
          <input 
            className={styles.form_input}
            placeholder="email"
          ></input>
          <input 
            className={styles.form_input}
            placeholder="password"
          ></input>
          <input 
            className={styles.form_input}
            placeholder="confirm password"
          ></input>
          <span className={styles.agreement}>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>.</span>
          <button className={styles.create_button}>CREATE</button>
        </form>
      </div>
    </div>
  )
}

export default Register
