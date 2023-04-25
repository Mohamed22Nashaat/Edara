import { Link } from 'react-router-dom';
import React from 'react';
import './style/CharlesDickensAdminProductList.css'

const CharlesDickensAddButton = () =>{
    return(
            <div className="charles-add-button">
                <Link to={'/add'} className='charles-add-buttonn'>Add New Product</Link>
            </div>
        
    );
};

export default CharlesDickensAddButton;