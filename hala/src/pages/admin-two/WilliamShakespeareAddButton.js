import { Link } from 'react-router-dom';
import React from 'react';
import './style/WilliamShakespeareAdminProductList.css'

const WilliamShakespeareAddButton = () =>{
    return(
            <div className="william-shakespeare-add-button">
                <Link to={'/add'} className='william-shakespeare-add-buttonn'>Add New Product</Link>
            </div>
        
    );
};

export default WilliamShakespeareAddButton;