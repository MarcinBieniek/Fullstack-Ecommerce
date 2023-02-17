import styles from './WidgetSmall.module.scss';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useState } from 'react';
import { userRequest } from '../../../middleware/requestMethods';

const WidgetSmall = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true")
        setUsers(res.data)
      } catch(err) {
        console.log('users fetch error is ', err)
      }
    };
    getUsers()
  }, [])

  return (
    <div className={styles.container}>
      <span className={styles.title}>New Join Members</span>

      <ul className={styles.list}>
        {users.map((user) => (
          <li className={styles.list_item} key={user._id}>
            <img 
            src={user.img || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} 
            alt="" className={styles.image} /> 
            <div className={styles.user}>
              <span className={styles.username}>{user.username}</span>
            </div>
            <button className={styles.button}>
              <VisibilityIcon className={styles.button_icon}/>
              Display
            </button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default WidgetSmall
