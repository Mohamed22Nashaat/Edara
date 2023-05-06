import React from "react";
import '../style/AdminProductCard.css';
import { Link } from 'react-router-dom';

 const AdminProductCard = (props) =>{
    
    return(
        <div className="stephen-king-admin-product-card">
            <div className="stephen-king-admin-product-card-image">
                <img src={props.img}></img>
            </div>

            <div className="stephen-king-admin-product-card-info">
                <div className="stephen-king-admin-product-card-main-info">
                <h2 className="stephen-king-admin-product-card-title">{props.name}</h2>
                <p className="stephen-king-admin-product-card-desc"> {props.desc} </p>
                </div>
                <div className="stephen-king-admin-product-card-operation">

                    <h3 style={{margin:"5px"}} >Quantity = {props.quantity}</h3>
                   <button className="stephen-king-admin-product-card-delete" >Delete </button>
        
                   <Link to={'/edit'} className='stephen-king-admin-product-card-edit'>Edit</Link>


                </div>

            </div>
        </div>
    )
}
export default AdminProductCard