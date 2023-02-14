import { Add, Remove } from '@material-ui/icons';
import Annoucment from '../../views/Annoucment/Annoucment';
import Footer from '../../views/Footer/Footer';
import Navbar from '../../views/Navbar/Navbar';
import Newsletter from '../../views/Newsletter/Newsletter';
import styles from './ProductPage.module.scss';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { publicRequest } from './../../../middleware/requestMethods';
import { addProduct } from '../../../redux/cartRedux';
import { useDispatch } from 'react-redux';

const ProductPage = () => {

  const location = useLocation(); 
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/"+id)
        setProduct(res.data);
      } catch(err) {
        console.log('fetch error is', err)
      }
    };
    getProduct()
  }, [id]);

  const handleQuantity = (type) => {
    if(type === "dec") {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      quantity < 10 && setQuantity(quantity + 1)
    }
  }

  const handleClick = () => {
    dispatch ( 
      addProduct({ ...product, quantity, color, size })
    )
  }

  console.log('color is', color)
  console.log('size is', size)


  return (
    <div className={styles.container}>
      <Navbar />
      <Annoucment />
      <div className={styles.wrapper}>
        
        <div className={styles.image_container}>
          <img 
            className={styles.image} 
            src={product.img} 
          />
        </div>

        <div className={styles.info_container}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.desc}</p>
          <span className={styles.price}>$ {product.price}</span>
          <div className={styles.filter_container}>
            <div className={styles.filter}>
              <span className={styles.filter_title}>Color</span>

                {product.color?.map((c) => (
                  <div 
                    key={c} 
                    className={styles.filter_color}
                    onClick={() => setColor(c)}
                  >{c}</div>
                ))};

            </div>
            <div className={styles.filter}>
              <span className={styles.filter_title}>Size</span>
              <select className={styles.filter_size} onChange={(e) => setSize(e.target.value)}>

                {product.size?.map((s) => (
                  <option key={s} className={styles.filter_size_option}>{s}</option>
                ))};

              </select>
            </div>
          </div>

          <div className={styles.add_container}>
            <div className={styles.amount_container}>
              <Remove onClick={()=>handleQuantity("dec")}/>
              <span className={styles.amount}>{quantity}</span>
              <Add onClick={()=>handleQuantity("inc")}/>
            </div>
            <button 
              className={styles.add_button}
              onClick={handleClick}
            >ADD TO CART</button>
          </div>

        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default ProductPage
