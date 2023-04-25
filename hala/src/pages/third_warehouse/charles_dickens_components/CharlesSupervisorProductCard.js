import React from "react";
import '../style/CharlesSupervisorProductCard.css'
import Stock from "../../Stock";

 const CharlesSupervisorProductCard = (props) =>{
    
    return(
        <div className="charles-supervisor-product-card">
            <div className="charles-supervisor-product-card-image">
                <img src={props.img}></img>
            </div>

            <div className="charles-supervisor-product-card-info">
                <div className="charles-supervisor-product-card-main-info">
                <h2 className="charles-supervisor-product-card-title">{props.name}</h2>
                <p className="charles-supervisor-product-card-desc"> {props.desc} </p>
                </div>

            
                <div className="stock">
                    <Stock/>
                    <h3>Quantity = {props.quantity}</h3>

                    </div>

            </div>
        </div>
    )
}

export default CharlesSupervisorProductCard