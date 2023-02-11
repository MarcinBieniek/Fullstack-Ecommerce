import styles from './ProductList.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../../data/tablesData'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductList = () => {
  
  const [data, setData] = useState(productRows);
  
  const handleDelete = (id) => {
    setData(data.filter(item=>item.id !== id));    
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 20 },
    { 
      field: 'product', 
      headerName: 'Product', 
      width: 200, 
      renderCell: (params) => {
        return (  
          <div className="productList_product">
            <img className="productList_img" src={params.row.img} alt="" />
            {params.row.name}  
          </div> 
        )
    }},
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'Price',
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
            <Link to={"/product/" + params.row.id}>
              <button className="productList_edit">Edit</button>
            </Link>
            <DeleteOutlineIcon className="productList_delete" onClick={() => handleDelete(params.row.id)}/>
          </> 
        )
      }
    }
  ];
 
  return (
    <div className="container">
      <DataGrid
        rows={data}
        columns={columns} 
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default ProductList


