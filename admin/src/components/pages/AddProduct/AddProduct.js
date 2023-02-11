import styles from './AddProduct.module.scss';

const AddProduct = () => {
  return (
    <div className={styles.container}>
      
      <h1 classname={styles.addProduct}>New Product</h1>
      <form className={styles.addProduct_form}>
        <div className={styles.addProduct_item}>
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className={styles.addProduct_item}>
          <label>Name</label>
          <input type="text" placeholder="Winter softshell" />
        </div>
        <div className={styles.addProduct_item}>
          <label>Stock</label>
          <input type="email" placeholder="123" />
        </div>

        <div className={styles.addProduct_item}>
          <label>Active</label>
          <select className={styles.addProduct_select} name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option> 
          </select>
        </div>        

        <button className={styles.addProduct_button}>Create</button>



      </form>

    </div>
  )
}

export default AddProduct
