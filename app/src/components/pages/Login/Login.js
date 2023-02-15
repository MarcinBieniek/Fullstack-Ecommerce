import styles from './Login.module.scss';
import { useState } from 'react';
import { login } from '../../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const user = useSelector((state) => state.user.currentUser);
  console.log('user is ', user)

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password })
    {user && navigate("/")}
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>SIGN IN</h1>
        <form className={styles.form}>
          <input 
            className={styles.form_input}
            placeholder="username"
            onChange={(e)=>setUsername(e.target.value)}
          ></input>
          <input 
            className={styles.form_input}
            placeholder="password"
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
          ></input>
          <button 
            className={styles.login_button} 
            onClick={handleClick}
            disabled={isFetching}
          >LOGIN</button>
          {error && <span div className={styles.wrong_message}>Something went wrong</span>}
          <a href="" className={styles.link}>DON'T REMEMBER PASSWORD?</a>
          <a href="" className={styles.link}>CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  )
}

export default Login
