import { Add, Remove } from '@material-ui/icons'
import Annoucment from '../../views/Annoucment/Annoucment'
import Footer from '../../views/Footer/Footer'
import Navbar from '../../views/Navbar/Navbar'
import Newsletter from '../../views/Newsletter/Newsletter'
import styles from './ProductPage.module.scss'

const ProductPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Annoucment />
      <div className={styles.wrapper}>
        
        <div className={styles.image_container}>
          <img 
            className={styles.image} 
            src="https://8a.pl/media/catalog/product/cache/1433055b8f8c4027064fc3d2af12358a/A/r/Arcteryx_Vertex_U_black_942_475a.webp" 
          />
        </div>

        <div className={styles.info_container}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Very good product with a lot of heandfull features. great color and shape. Best price in town.</p>
          <span className={styles.price}>50$</span>
          
          <div className={styles.filter_container}>
            <div className={styles.filter}>
              <span className={styles.filter_title}>Color</span>
              <div className={styles.filter_color} ></div>
              <div className={styles.filter_color} color="darkblue"></div>
              <div className={styles.filter_color} color="gray"></div>
            </div>
            <div className={styles.filter}>
              <span className={styles.filter_title}>Size</span>
              <select className={styles.filter_size}>
                <option className={styles.filter_size_option}>XS</option>
                <option className={styles.filter_size_option}>S</option>
                <option className={styles.filter_size_option}>M</option>
                <option className={styles.filter_size_option}>L</option>
                <option className={styles.filter_size_option}>X</option>
                <option className={styles.filter_size_option}>XS</option>
              </select>
            </div>
          </div>

          <div className={styles.add_container}>
            <div className={styles.amount_container}>
              <Remove />
              <span className={styles.amount}>1</span>
              <Add />
            </div>
            <button className={styles.add_button}>ADD TO CART</button>
          </div>

        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default ProductPage
