import React from "react";
import Stock from "./Stock";
import './style/UserProductCard.css';




 const UserProductCard = (props) =>{
    
    return(
        <div className="stephen-supurvisor-product-card">
            <div className="stephen-supurvisor-product-card-image">
                <img src={props.img}></img>
            </div>

            <div className="stephen-supurvisor-product-card-info">
                <div className="stephen-supurvisor-product-card-main-info">
                <h2 className="stephen-supurvisor-product-card-title">{props.name}</h2>
                <p className="stephen-supurvisor-product-card-desc"> {props.desc} </p>
                </div>
                

                    <div className="stock">
                    <Stock/>
                    <h3>Quantity = {props.quantity}</h3>

                    </div>

            </div>
        </div>
    )
}

export default UserProductCard