import React from "react";
import '../style/CharlesDickensAdminProductCard.css';
import { Link } from 'react-router-dom';

 const CharlesDickensAdminProductCard = (props) =>{
    
    return(
        <div className="charles-dickens-admin-product-card">
            <div className="charles-dickens-admin-product-card-image">
                <img src={props.img}></img>
            </div>

            <div className="charles-dickens-admin-product-card-info">
                <div className="charles-dickens-admin-product-card-main-info">
                <h2 className="charles-dickens-admin-product-card-title">{props.name}</h2>
                <p className="charles-dickens-admin-product-card-desc"> {props.desc} </p>
                </div>
                <div className="charles-dickens-admin-product-card-operation">

                    <h3 style={{margin:"5px"}} >Quantity = {props.quantity}</h3>
                   <button className="charles-dickens-admin-product-card-delete" >Delete </button>
        
                   <Link to={'/edit'} className='charles-dickens-admin-product-card-edit'>Edit</Link>

                   {/* <Link to={'/charles-show'} className="charles-dickens-admin-product-card-show">View</Link> */}

                </div>

            </div>
        </div>
    )
}
export default CharlesDickensAdminProductCard