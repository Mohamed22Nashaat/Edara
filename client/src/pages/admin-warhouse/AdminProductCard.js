import React from "react";
import '../style/AdminProductCard.css';
import { Link, useNavigate } from 'react-router-dom';
import { getAuthUser } from "../../helper/Storage";
import axios from "axios";

 const AdminProductCard = (props) =>{
    // {'/assets/products/'+props.image} 
    const user = getAuthUser();
    const navigate = useNavigate();
  
    const handleDelete = (id) => {
        axios.delete('/products/'+id,
        {
            headers:{
                'token': getAuthUser().token
            }
        })
        .then(res => {
            console.log(res)
            window.location.reload();
        })
        .catch(err => console.log(err));
   }

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
                   <button onClick={()=>handleDelete(props.productID)} className="stephen-king-admin-product-card-delete"> Delete </button>
                   <Link to={`/UpdateProduct/${props.productID}`} className="stephen-king-admin-product-card-edit"> Edit </Link>


                </div>

            </div>
        </div>
    )
}
export default AdminProductCard