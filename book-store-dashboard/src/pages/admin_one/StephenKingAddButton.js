import { Link } from 'react-router-dom';
import React from 'react';
import './style/StephenKingAdminProductList.css'

const StephenKingAddButton = () =>{
    return(
            <div className="stephen-king-add-button">
                <Link to={'/add'} className='stephen-king-add-buttonn'>Add New Product</Link>
            </div>
        
    );
};

export default StephenKingAddButton;