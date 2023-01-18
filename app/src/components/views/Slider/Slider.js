import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styles from './Slider.module.scss'

const Slider = () => {
  return (
    <div className={styles.container}>

      <div className={styles.arrow_left}>
        <ArrowLeftOutlined />
      </div>

      <div className={styles.wrapper}>
        
        <div className={styles.slide}>
          <div className={styles.container_img}>
            <img className={styles.img} src="https://www.ridestore.com/images/H1192_01_HiMqWLf.jpg" alt="sale"></img>
          </div>
          <div className={styles.container_info}>
            <h1>WINTER SALE</h1>
            <p>40% LOWER PRICES. CHECK OUR SPECIAL OFFER</p>
            <button>SHOW MORE</button>
          </div>
        </div>

        <div className={styles.slide}>
          <div className={styles.container_img}>
            <img className={styles.img} src="https://ridestore.imgix.net/catalog/product/f0809_women_1_ZY9dL95.jpg" alt="hats"></img>
          </div>
          <div className={styles.container_info}>
            <h1>WINTER HATS</h1>
            <p>40% LOWER PRICES. CHECK OUR SPECIAL OFFER</p>
            <button>SHOW MORE</button>
          </div>
        </div>

        <div className={styles.slide}>
          <div className={styles.container_img}>
            <img className={styles.img} src="https://www.ridestore.com/images/H1657_01_D0KDPCe.jpg" alt="equipment"></img>
          </div>
          <div className={styles.container_info}>
            <h1>SKIING EQUIPMENT</h1>
            <p>40% LOWER PRICES. CHECK OUR SPECIAL OFFER</p>
            <button>SHOW MORE</button>
          </div>
        </div>

      </div>

      <div className={styles.arrow_right}>
        <ArrowRightOutlined />
      </div>

    </div>
  )
}

export default Slider 
 