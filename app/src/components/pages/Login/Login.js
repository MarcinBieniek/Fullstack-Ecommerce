import styles from './Login.module.scss'

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>SIGN IN</h1>
        <form className={styles.form}>
          <input 
            className={styles.form_input}
            placeholder="username"
          ></input>
          <input 
            className={styles.form_input}
            placeholder="password"
          ></input>
          <button className={styles.login_button}>LOGIN</button>
          <a href="" className={styles.link}>DON'T REMEMBER PASSWORD?</a>
          <a href="" className={styles.link}>CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  )
}

export default Login
