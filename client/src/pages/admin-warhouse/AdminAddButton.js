import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import '../style/AdminProductList.css';
import { getAuthUser } from "../../helper/Storage"

const auth = getAuthUser();

const AdminAddButton = () =>{
  const user = getAuthUser();
  const navigate = useNavigate();
  
  
    return(
            <div className="stephen-king-add-button">
              { auth && auth.role ==="admin" &&(<Link to={'/add'} className='stephen-king-add-buttonn'>Add New Product</Link>)}
            </div>
        
    );
};

export default AdminAddButton;