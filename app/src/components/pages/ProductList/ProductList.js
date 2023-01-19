import Annoucment from '../../views/Annoucment/Annoucment'
import Footer from '../../views/Footer/Footer'
import Navbar from '../../views/Navbar/Navbar'
import Newsletter from '../../views/Newsletter/Newsletter'
import Products from '../../views/Products/Products'
import styles from './ProductList.module.scss'
 
const ProductList = () => {
  return (
    <div className={styles.container}>
      <Annoucment />
      <Navbar />
      <h1 className={styles.title}>Dresses</h1>
      <div className={styles.filter_container}>
        <div className={styles.filter}>
          <span className={styles.filter_text}>Filter products</span>
          <select className={styles.select}>
            <option className={styles.option} disabled selected>Color</option>
            <option className={styles.option}>White</option>
            <option className={styles.option}>Black</option>
            <option className={styles.option}>Red</option>
            <option className={styles.option}>Blue</option>
            <option className={styles.option}>Yellow</option>
            <option className={styles.option}>Green</option>  
          </select> 
          <select className={styles.select}>
            <option className={styles.option} disabled selected>Size</option>
            <option className={styles.option}>XS</option>
            <option className={styles.option}>S</option>
            <option className={styles.option}>M</option>
            <option className={styles.option}>L</option>
            <option className={styles.option}>XL</option>  
          </select>   
        </div>
        <div className={styles.filter}>
          <span className={styles.filter_text}>Sort products:</span>
          <select className={styles.select}>
            <option className={styles.option} selected>Newest</option>
            <option className={styles.option}>Price (asc)</option>
            <option className={styles.option}>Price (desc)</option> 
          </select> 
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
   )
 }
 
 export default ProductList
 