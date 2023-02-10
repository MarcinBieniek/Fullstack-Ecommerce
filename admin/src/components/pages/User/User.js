import styles from './User.module.scss'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';

const User = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.title_container}>
        <h1 className={styles.title}>Edit User</h1>
        <button className={styles.addUser_button}>Create</button>
      </div>
      
      <div className={styles.user_container}>
        
        <div className={styles.user_show}>
          
          <div className={styles.user_show_top}>
            <img
              src="https://i.ibb.co/p03NDHK/elon-muskav.png"
              alt="avatar"
              className={styles.user_show_img}
            />
            <div className={styles.user_show_topTitle}>
              <span className={styles.user_show_userName}>Anna Becker</span>
              <span className={styles.user_show_userTitle}>Software Engeneer</span>
            </div>
          </div>
          
          <div className={styles.user_show_bottom}>
            <span className={styles.user_show_title}>Account Details</span>
            <div className={styles.user_show_info}>
              <PermIdentityIcon className={styles.user_show_icon} />  
              <span className={styles.user_show_infoTitle}>annabeck89</span>
            </div>
            <div className={styles.user_show_info}>
              <CalendarTodayIcon className={styles.user_show_icon} />  
              <span className={styles.user_show_infoTitle}>01.10.1989</span>
            </div>
            <span className={styles.user_show_title}>Contact Details</span>
            <div className={styles.user_show_info}>
              <PhoneAndroidIcon className={styles.user_show_icon} />  
              <span className={styles.user_show_infoTitle}>+1 123 456 78</span>
            </div>
            <div className={styles.user_show_info}>
              <MailOutlineIcon className={styles.user_show_icon} />  
              <span className={styles.user_show_infoTitle}>annabeck@wp.pl</span>
            </div>
            <div className={styles.user_show_info}>
              <LocationSearchingIcon className={styles.user_show_icon} />  
              <span className={styles.user_show_infoTitle}>New York | USA</span>
            </div>
          </div>  

        </div>
        
        <div className={styles.user_update}>
          <span className={styles.user_update_title}>Edit</span>
          <form className={styles.user_update_form}>
            <div className={styles.user_update_left}>
              <div className={styles.user_update_item}>
                <label>Username</label>
                <input 
                  type="text" 
                  placeholder="annabeck99" 
                  className={styles.user_update_input}
                />
              </div>
              <div className={styles.user_update_item}>
                <label>Full name</label>
                <input  
                  type="text" 
                  placeholder="Anna Beck" 
                  className={styles.userUpdateInput}
                />
              </div>
              <div className={styles.user_update_item}>
                <label>Email</label>
                <input 
                  type="text" 
                  placeholder="annabeck@wp.pl" 
                  className={styles.userUpdateInput}
                />
              </div>
              <div className={styles.user_update_item}>
                <label>Phone number</label>
                <input 
                  type="text" 
                  placeholder="+1 234 567 89" 
                  className={styles.userUpdateInput}
                />
              </div>
              <div className={styles.user_update_item}>
                <label>Address</label>
                <input 
                  type="text" 
                  placeholder="New York | USA" 
                  className={styles.userUpdateInput}
                />
              </div>
            </div>
            <div className={styles.user_update_right}>
              <div className={styles.user_update_upload}>
                <img 
                  className={styles.user_update_img}
                  src="https://i.ibb.co/p03NDHK/elon-muskav.png"
                  alt=""
                />
                <label htmlFor="file"><PublishIcon className={styles.user_update_icon}/></label>
                <input type="file" id="file" className={styles.user_update_input}></input>
              </div>    
              <button className={styles.user_update_button}>Update</button>
            </div> 
          </form>
        </div>
      </div>
    </div>
  )
} 

export default User
