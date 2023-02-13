import styles from './Products.module.scss';
import Product from '../../features/Product/Product';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Products = ({ cat, filters, sort }) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log('filtereproducts are', filteredProducts)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get( 
          cat 
            ? `http://localhost:8083/api/products?category=${cat}` 
            : "http://localhost:8083/api/products"
        );
        setProducts(res.data)

        console.log('cat is', cat)
        console.log('resdata is', res.data)

      } catch(err) {
        console.log('error is', err)
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter((item) => 
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )  
      )
    )    
  }, [products, cat, filters]);

  useEffect(() => {
    if((sort === "newest")){
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if ((sort === "asc")){
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort])
 
  return (
    <div className={styles.container}>
      { cat 
          ? filteredProducts.map((item) => <Product key={item.id} item={item} />)
          : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)
      }      
    </div>
  )
}

export default Products
