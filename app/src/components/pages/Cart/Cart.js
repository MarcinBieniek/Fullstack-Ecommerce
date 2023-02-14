import { Add, Remove } from '@material-ui/icons';
import Annoucment from '../../views/Annoucment/Annoucment';
import Footer from '../../views/Footer/Footer';
import Navbar from '../../views/Navbar/Navbar';
import styles from './Cart.module.scss';
import { useSelector } from 'react-redux';

const Cart = () => {

  const cart = useSelector(state=>state.cart)

  return (
    <div className={styles.container}>
      <Navbar />
      <Annoucment />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>YOUR BAG</h1>
        <div className={styles.top}>
          <button className={styles.top_button}>CONTINUE SHOPPING</button>
          <div className={styles.top_texts}>
            <span className={styles.top_text}>Shopping Bag(2)</span>
            <span className={styles.top_text}>Your Wishlist</span>
          </div>
          <button className={styles.top_button}>CHECKOUT NOW</button>
        </div>

        <div className={styles.bottom}>
          <div className={styles.info}>
            { cart.products.map((product) => (
              <div className={styles.product}>  
                <div className={styles.product_details}>
                  <img className={styles.image} src={product.img}/>
                  <div className={styles.details}>
                    <span className={styles.product_name}>
                      <b>Product:</b> {product.title}  
                    </span> 
                    <span className={styles.product_id}>
                      <b>ID:</b>{product._id}  
                    </span>  
                    <span className={styles.product_color}>
                      {product.color}
                    </span> 
                    <span className={styles.product_size}>
                      <b>Size:</b> {product.size}  
                    </span>    
                  </div>
                </div>
                <div className={styles.price_details}>
                  <div className={styles.product_amount_container}>
                    <Add />
                    <div className={styles.product_amount}>{product.quantity}</div>
                    <Remove />    
                  </div>
                  <div className={styles.product_price}>$ {product.price * product.quantity}</div>
                </div>  
              </div>
            ))}
            <hr className={styles.line}></hr> 
          </div> 

          <div className={styles.summary}>
            <h1 className={styles.summary_title}>ORDER SUMMARY</h1>
            <div className={styles.summary_item}>
              <span className={styles.summary_item_text}>Subtotal</span>
              <span className={styles.summary_item_price}>$ {cart.total}</span>
            </div>
            <div className={styles.summary_item}> 
              <span className={styles.summary_item_text}>Shipping</span>
              <span className={styles.summary_item_price}>$ 5</span>
            </div>
            <div className={styles.summary_item}>
              <span className={styles.summary_item_text}>Shipping discount</span>
              <span className={styles.summary_item_price}>$ -5</span>
            </div>
            <div className={styles.summary_item}>
              <span className={styles.summary_item_text_total}>Total</span>
              <span className={styles.summary_item_price_total}>$ {cart.total}</span>
            </div>
            <button className={styles.button}>Checkout now</button>
          </div>
        
        
        </div>


      </div>
      <Footer />
    </div>
  )
}

export default Cart
