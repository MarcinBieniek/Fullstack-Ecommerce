import styles from './AddProduct.module.scss';
import { useState } from 'react';
import { 
  getStorage, 
  ref, 
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";
import app from '../../../firebase';
import { addProduct } from "../../../redux/apiCalls";
import { useDispatch } from "react-redux";

const AddProduct = () => {

  const [inputs, setInputs]  = useState({});
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs(prev=>{
      return {...prev, [e.target.name]:e.target.value} 
    });
  };

  console.log(file)

  const handleCategories = (e) => {
    setCategories(e.target.value.split(","))
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: categories };
          addProduct(product, dispatch);
        });
      }
    );

  }

  return (
    <div className={styles.container}>
      
      <h1 classname={styles.addProduct}>New Product</h1>
      <form className={styles.addProduct_form}>
        <div className={styles.addProduct_item}>
          <label>Image</label>
          <input type="file" id="file" onChange={e=>setFile(e.target.files[0])}/>
        </div> 
        <div className={styles.addProduct_item}>
          <label>Title</label>
          <input name="title" type="text" placeholder="Winter softshell" onChange={handleChange}/>
        </div>
        <div className={styles.addProduct_item}>
          <label>Description</label>
          <input name="desc" type="text" placeholder="description" onChange={handleChange}/>
        </div>
        <div className={styles.addProduct_item}>
          <label>Price</label>
          <input name="price" type="number" placeholder="price" onChange={handleChange}/> 
        </div>
        <div className={styles.addProduct_item}>
          <label>Categories</label>
          <input type="text" placeholder="add category" onChange={handleCategories}/> 
        </div>
        <div className={styles.addProduct_item}>
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>      

        <button className={styles.addProduct_button} onClick={handleSubmit}>Create</button>



      </form>

    </div>
  )
}

export default AddProduct
