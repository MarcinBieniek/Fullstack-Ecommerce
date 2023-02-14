import Annoucment from '../../views/Annoucment/Annoucment'
import Footer from '../../views/Footer/Footer'
import Navbar from '../../views/Navbar/Navbar'
import Newsletter from '../../views/Newsletter/Newsletter'
import Products from '../../views/Products/Products'
import styles from './ProductList.module.scss'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
 
const ProductList = () => {

  const location = useLocation(); 
  const cat = location.pathname.split("/")[2];

  const [filter, setFilters] = useState({});
  const [sort, setSort] = useState("newest")

  const handleFilters = (e) => {
    const value = e.target.value;

    setFilters({
      ...filter,
      [e.target.name]: value,
    })
  }

  return (
    <div className={styles.container}>
      <Annoucment />
      <Navbar />
      <h1 className={styles.title}>{ cat }</h1>
      <div className={styles.filter_container}>
        <div className={styles.filter}>
          <span className={styles.filter_text}>Filter products</span>
          <select className={styles.select} name="color" onChange={handleFilters}>
            <option className={styles.option} disabled>Color</option>
            <option className={styles.option}>white</option>
            <option className={styles.option}>black</option>
            <option className={styles.option}>red</option>
            <option className={styles.option}>gray</option>
            <option className={styles.option}>brown</option>
            <option className={styles.option}>green</option>  
          </select> 
          <select className={styles.select} name="size" onChange={handleFilters}>
            <option className={styles.option} disabled>Size</option>
            <option className={styles.option}>XS</option>
            <option className={styles.option}>S</option>
            <option className={styles.option}>M</option>
            <option className={styles.option}>L</option>
            <option className={styles.option}>XL</option>  
          </select>   
        </div>
        <div className={styles.filter}>
          <span className={styles.filter_text}>Sort products:</span>
          <select className={styles.select} onChange={e => setSort(e.target.value)}>
            <option className={styles.option} value="newest">Newest</option>
            <option className={styles.option} value="asc">Price (asc)</option>
            <option className={styles.option} value="desc">Price (desc)</option> 
          </select> 
        </div>
      </div>
      <Products cat={cat} filters={filter} sort={sort}/>
      <Newsletter />
      <Footer />
    </div>
   )
 }
 
 export default ProductList
 