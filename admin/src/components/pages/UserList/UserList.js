import './UserList.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../../data/tablesData'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserList = () => {

    const[data, setData] = useState(userRows);

    const handleDelete = (id) => {
      setData(data.filter(item=>item.id !== id));    
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 20 },
        { field: 'user', headerName: 'User', width: 130, renderCell: (params) => {
            return (
              <div className="userList_user">
                <img className="userList_img" src={params.row.avatar} alt="" />
                {params.row.user}  
              </div>
            )
        }},
        { field: 'email', headerName: 'Email', width: 130 },
        {
          field: 'status',
          headerName: 'Status',
          width: 90,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          width: 160,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) =>{
            return (
              <>
                <Link to={"/user" + params.row.id}>
                  <button className="userList_edit">Edit</button>
                </Link>
                <DeleteOutlineIcon className="userList_delete" onClick={() => handleDelete(params.row.id)}/>
              </> 
            )
          }
        }
      ];
    
  return (
    <div className="userList_container">
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

export default UserList
