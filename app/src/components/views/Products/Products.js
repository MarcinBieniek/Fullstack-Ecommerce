import styles from './Products.module.scss';
import { popularProducts } from '../../../state/data';
import Product from '../../features/Product/Product';

const Products = () => {
  return (
    <div className={styles.container}>
      {popularProducts.map(item => (
        <Product 
          key={item.id} 
          item={item} />
      ))}
    </div>
  )
}

export default Products
