import styles from './AddUser.module.scss'

const Adduser = () => {
  return (
    <div className={styles.container}>
      <h1 classname={styles.newUser}>New User</h1>
      <form className={styles.newUser_form}>
        <div className={styles.newUser_item}>
          <label>Username</label>
          <input type="text" placeholder="John" />
        </div>
        <div className={styles.newUser_item}>
          <label>Full name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className={styles.newUser_item}>
          <label>Username</label>
          <input type="email" placeholder="john@wp.pl" />
        </div>
        <div className={styles.newUser_item}>
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className={styles.newUser_item}>
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className={styles.newUser_item}>
          <label>Address</label>
          <input type="text" placeholder="New york | USA" />
        </div>
        <div className={styles.newUser_item}>
          <label>Gender</label>
            <div className={styles.newUser_gender}>  
              <input type="radio" name="gender" id="male" value="male" />
              <label for="male">Male</label>
              <input type="radio" name="gender" id="female" value="female" />
              <label for="female">Female</label>
              <input type="radio" name="gender" id="other" value="other" />
              <label for="other">Other</label>
            </div>
        </div>

        <div className={styles.newUser_item}>
          <label>Active</label>
          <select className={styles.newUser_select} name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option> 
          </select>
        </div>        

        <button className={styles.newUser_button}>Create</button>



      </form>
    </div>
  )
}

export default Adduser
