import styles from './WidgetSmall.module.scss';
import VisibilityIcon from '@mui/icons-material/Visibility';

const WidgetSmall = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>New Join Members</span>

      <ul className={styles.list}>
        <li className={styles.list_item}>
          <img src="https://i.ibb.co/p03NDHK/elon-muskav.png" alt="" className={styles.image} /> 
          <div className={styles.user}>
            <span className={styles.username}>Martin Eden</span>
            <span className={styles.user_title}>Software Engineer</span>
          </div>
          <button className={styles.button}>
            <VisibilityIcon className={styles.button_icon}/>
            Display
          </button>
        </li>
      </ul>

      <ul className={styles.list}>
        <li className={styles.list_item}>
          <img src="https://i.ibb.co/p03NDHK/elon-muskav.png" alt="" className={styles.image} /> 
          <div className={styles.user}>
            <span className={styles.username}>Martin Eden</span>
            <span className={styles.user_title}>Software Engineer</span>
          </div>
          <button className={styles.button}>
            <VisibilityIcon className={styles.button_icon}/>
            Display
          </button>
        </li>
      </ul>

      <ul className={styles.list}>
        <li className={styles.list_item}>
          <img src="https://i.ibb.co/p03NDHK/elon-muskav.png" alt="" className={styles.image} /> 
          <div className={styles.user}>
            <span className={styles.username}>Martin Eden</span>
            <span className={styles.user_title}>Software Engineer</span>
          </div>
          <button className={styles.button}>
            <VisibilityIcon className={styles.button_icon}/>
            Display
          </button>
        </li>
      </ul>

      <ul className={styles.list}>
        <li className={styles.list_item}>
          <img src="https://i.ibb.co/p03NDHK/elon-muskav.png" alt="" className={styles.image} /> 
          <div className={styles.user}>
            <span className={styles.username}>Martin Eden</span>
            <span className={styles.user_title}>Software Engineer</span>
          </div>
          <button className={styles.button}>
            <VisibilityIcon className={styles.button_icon}/>
            Display
          </button>
        </li>
      </ul>

      <ul className={styles.list}>
        <li className={styles.list_item}>
          <img src="https://i.ibb.co/p03NDHK/elon-muskav.png" alt="" className={styles.image} /> 
          <div className={styles.user}>
            <span className={styles.username}>Martin Eden</span>
            <span className={styles.user_title}>Software Engineer</span>
          </div>
          <button className={styles.button}>
            <VisibilityIcon className={styles.button_icon}/>
            Display
          </button>
        </li>
      </ul>

    </div>
  )
}

export default WidgetSmall
