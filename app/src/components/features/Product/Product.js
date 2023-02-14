import styles from './Product.module.scss'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const Product = ({ item }) => {

  return (
    <div className={styles.container}>
      <img className={styles.image} src={item.img} /> 
      <div className={styles.info}>
        <div className={styles.icons}>
          <ShoppingCartOutlined />
        </div>
        <div className={styles.icons}>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </div>
        <div className={styles.icons}>
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  )
}

export default Product
