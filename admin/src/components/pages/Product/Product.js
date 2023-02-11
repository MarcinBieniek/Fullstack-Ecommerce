import styles from './Product.module.scss';
import { Link } from 'react-router-dom';
import Chart from '../../features/Chart/Chart';
import { productData } from "../../../data/chartsData";
import Publish from '@mui/icons-material/Publish';

const Product = () => {
  return (
    <div className={styles.container}>

      <div className={styles.product_container}>
        <h1 className={styles.product_title}>Product</h1>
        <Link to="/new-product">
          <button className={styles.product_addButton}>Create</button>
        </Link>
      </div>

      <div className={styles.product_top}>

        <div className={styles.product_topLeft}>
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />      
        </div>

        <div className={styles.product_topRight}>
          <div className={styles.product_infoTop}>
            <img src="https://i.ibb.co/xY6CYNN/softshell.png" alt="Product image" />
            <span className={styles.product_name}>Winter Softshell</span>
          </div>
          <div className={styles.product_infoBottom}>
            <div className={styles.product_info_item}>
              <span className={styles.product_info_key}>id:</span>
              <span className={styles.product_info_value}>123</span>
            </div>
            <div className={styles.product_info_item}>
              <span className={styles.product_info_key}>sales:</span>
              <span className={styles.product_info_value}>123</span>
            </div>
            <div className={styles.product_info_item}>
              <span className={styles.product_info_key}>active:</span>
              <span className={styles.product_info_value}>yes</span>
            </div>
            <div className={styles.product_info_item}>
              <span className={styles.product_info_key}>in stock:</span>
              <span className={styles.product_info_value}>no</span>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.product_bottom}>
        <form className={styles.product_form}>
          <div className={styles.product_formLeft}>
            
            <label>Product Name</label>
            <input type="text" placeholder="Winter Softshell" />
            
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>    
              <option value="no">No</option>
            </select>
            
            <label>Active</label>
            <select name="active" id="acive">
              <option value="yes">Yes</option>    
              <option value="no">No</option>
            </select>

          </div>


          <div className={styles.product_formRight}>
            <div className={styles.product_upload}>
              <img src="https://i.ibb.co/xY6CYNN/softshell.png" alt="" />  
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" className={styles.product_upload}/>
            </div>
            <button className={styles.product_button}>Update</button>
          </div>
        </form>
      </div>

      
    </div>
  )
} 

export default Product
