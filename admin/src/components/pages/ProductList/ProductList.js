import styles from './ProductList.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts } from '../../../redux/apiCalls';

const ProductList = () => {
  
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products)
  
  useEffect(() => {
    getProducts(dispatch)
  }, [dispatch])

  const handleDelete = (id) => {
    deleteProduct(id, dispatch)
  }

  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    { 
      field: 'product', 
      headerName: 'Product', 
      width: 200, 
      renderCell: (params) => {
        return (  
          <div className="productList_product">
            <img className="productList_img" src={params.row.img} alt="" />
            {params.row.title}  
          </div> 
        )
    }},
    { field: 'inStock', headerName: 'Stock', width: 200 },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) =>{
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productList_edit">Edit</button>
            </Link>
            <DeleteOutlineIcon className="productList_delete" onClick={() => handleDelete(params.row._id)}/>
          </> 
        )
      }
    }
  ];
 
  return (
    <div className="container">
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns} 
        getRowId={(row) => row._id}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        
      />
    </div>
  )
}

export default ProductList


