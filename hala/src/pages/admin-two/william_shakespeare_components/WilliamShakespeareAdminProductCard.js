import React from "react";
import '../style/WilliamShakespeareAdminProductCard.css';
import { Link } from 'react-router-dom';

 const WilliamShakespeareAdminProductCard = (props) =>{
    
    return(
        <div className="william-shakespeare-admin-product-card">
            <div className="william-shakespeare-admin-product-card-image">
                <img src={props.img}></img>
            </div>

            <div className="william-shakespeare-admin-product-card-info">
                <div className="william-shakespeare-admin-product-card-main-info">
                <h2 className="william-shakespeare-admin-product-card-title">{props.name}</h2>
                <p className="william-shakespeare-admin-product-card-desc"> {props.desc} </p>
                </div>
                <div className="william-shakespeare-admin-product-card-operation">

                    <h3 style={{margin:"5px"}} >Quantity = {props.quantity}</h3>
                   <button className="william-shakespeare-admin-product-card-delete" >Delete </button>
        
                   <Link to={'/edit'} className='william-shakespeare-admin-product-card-edit'>Edit</Link>
                   {/* <Link to={'/william-show'} className="william-admin-product-card-show">View</Link> */}

                </div>

            </div>
        </div>
    )
}
export default WilliamShakespeareAdminProductCard