import { Add, Remove } from '@material-ui/icons';
import Annoucment from '../../views/Annoucment/Annoucment';
import Footer from '../../views/Footer/Footer';
import Navbar from '../../views/Navbar/Navbar';
import styles from './Cart.module.scss';

const Cart = () => {
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

            <div className={styles.product}>  
              <div className={styles.product_details}>
                <img className={styles.image} src="https://8a.pl/media/catalog/product/cache/1433055b8f8c4027064fc3d2af12358a/M/a/Marmot_Guides_Down_Hoody___cairo_shetland_766_6dfa.webp" />
                <div className={styles.details}>
                  <span className={styles.product_name}>
                    <b>Product:</b>EXTRA WARM JACKET  
                  </span> 
                  <span className={styles.product_id}>
                    <b>ID:</b>1234  
                  </span>  
                  <span className={styles.product_color}>
                  </span> 
                  <span className={styles.product_size}>
                    <b>Size:</b>XL   
                  </span>    
                </div>
              </div>
              <div className={styles.price_details}>
                <div className={styles.product_amount_container}>
                  <Add />
                  <div className={styles.product_amount}>2</div>
                  <Remove />    
                </div>
                <div className={styles.product_price}>$ 30</div>
              </div>  
            </div>

            <hr className={styles.line}></hr>

            <div className={styles.product}>  
              <div className={styles.product_details}>
                <img className={styles.image} src="https://8a.pl/media/catalog/product/cache/1433055b8f8c4027064fc3d2af12358a/M/a/Marmot_Guides_Down_Hoody___cairo_shetland_766_6dfa.webp" />
                <div className={styles.details}>
                  <span className={styles.product_name}>
                    <b>Product:</b>EXTRA WARM JACKET  
                  </span> 
                  <span className={styles.product_id}>
                    <b>ID:</b>1234  
                  </span>  
                  <span className={styles.product_color}>
                  </span> 
                  <span className={styles.product_size}>
                    <b>Size:</b>XL   
                  </span>    
                </div>
              </div>
              <div className={styles.price_details}>
                <div className={styles.product_amount_container}>
                  <Add />
                  <div className={styles.product_amount}>2</div>
                  <Remove />    
                </div>
                <div className={styles.product_price}>$ 30</div>
              </div>  
            </div>

          </div> 

          <div className={styles.summary}>
            <h1 className={styles.summary_title}>ORDER SUMMARY</h1>
            <div className={styles.summary_item}>
              <span className={styles.summary_item_text}>Subtotal</span>
              <span className={styles.summary_item_price}>$ 20</span>
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
              <span className={styles.summary_item_price_total}>$ 20</span>
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
