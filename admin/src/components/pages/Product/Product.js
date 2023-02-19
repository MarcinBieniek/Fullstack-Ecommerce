import styles from './Product.module.scss';
import { Link, useLocation } from 'react-router-dom';
import Chart from '../../features/Chart/Chart';
import { productData } from "../../../data/chartsData";
import Publish from '@mui/icons-material/Publish';
import { useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { userRequest } from '../../../middleware/requestMethods';

const Product = () => {
  const location = useLocation()
  const productId= location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([])

  const product = useSelector((state) => 
    state.product.products.find(product => product._id === productId)
  );

  const months = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list =res.data.sort((a,b)=>{
          return a._id -b._id
        })
        list.map((item) => 
          setPStats((prev) => [
            ...prev,
            { name: months[item._id - 1], Sales: item.total} 
          ])
        );
      } catch(err) {
        console.log('Product getStats error is ', err)
      }
    };
    getStats();
  }, [months]);

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
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />      
        </div>

        <div className={styles.product_topRight}>
          <div className={styles.product_infoTop}>
            <img src={product.img} alt="Product image" />
            <span className={styles.product_name}>{product.title}</span>
          </div>
          <div className={styles.product_infoBottom}>
            <div className={styles.product_info_item}>
              <span className={styles.product_info_key}>id: </span>
              <span className={styles.product_info_value}> {product._id}</span>
            </div>
            <div className={styles.product_info_item}>
              <span className={styles.product_info_key}>sales:</span>
              <span className={styles.product_info_value}>123</span>
            </div>
            <div className={styles.product_info_item}>
              <span className={styles.product_info_key}>in stock:</span>
              <span className={styles.product_info_value}>{product.inStock}</span>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.product_bottom}>
        <form className={styles.product_form}>
          <div className={styles.product_formLeft}>
            
            <label>Product Name</label>
            <input type="text" placeholder={product.title} />
            <label>Product desctiprion</label>
            <input type="text" placeholder={product.desc} />
            <label>Product price</label>
            <input type="text" placeholder={product.price} />
            
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="true">Yes</option>    
              <option value="false">No</option>
            </select>

          </div>


          <div className={styles.product_formRight}>
            <div className={styles.product_upload}>
              <img src={product.img} alt="" />  
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
