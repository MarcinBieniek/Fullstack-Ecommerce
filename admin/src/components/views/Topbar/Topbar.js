import styles from './Topbar.module.scss';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbar_wrapper}>
        <div className={styles.top_left}>
          <span className={styles.logo}>
            runnerAdmin
          </span>
        </div>
        <div className={styles.top_right}>
          <div className={styles.icon}>
            <NotificationsNoneIcon />
            <span className={styles.icon_text}>2</span>
          </div>
          <div className={styles.icon}>
            <LanguageIcon />
            <span className={styles.icon_text}>EN</span>
          </div>
          <div className={styles.icon}>
            <SettingsIcon />
            <span className={styles.icon_text}>2</span>
          </div>
          <img src="https://i.ibb.co/p03NDHK/elon-muskav.png" alt="" className={styles.avatar} />
        </div>
      </div>
      
    </div>
  )
}

export default Topbar
