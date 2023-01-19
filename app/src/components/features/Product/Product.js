import styles from './Product.module.scss'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'

const Product = ({ item }) => {

  return (
    <div className={styles.container}>
      <img className={styles.image} src={item.img} /> 
      <div className={styles.info}>
        <div className={styles.icons}>
          <ShoppingCartOutlined />
        </div>
        <div className={styles.icons}>
          <SearchOutlined />
        </div>
        <div className={styles.icons}>
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  )
}

export default Product
