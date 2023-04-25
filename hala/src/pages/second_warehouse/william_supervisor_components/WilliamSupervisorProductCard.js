import React from "react";
import '../style/WilliamSupervisorProductCard.css'
import Stock from "../../Stock";


 const WilliamSupervisorProductCard = (props) =>{
    
    return(
        <div className="william-supervisor-product-card">
            <div className="william-supervisor-product-card-image">
                <img src={props.img}></img>
            </div>

            <div className="william-supervisor-product-card-info">
                <div className="william-supervisor-product-card-main-info">
                <h2 className="william-supervisor-product-card-title">{props.name}</h2>
                <p className="william-supervisor-product-card-desc"> {props.desc} </p>
                </div>

                
                <div className="stock">
                    <Stock/>
                    <h3>Quantity = {props.quantity}</h3>

                    </div>

                 </div>
        </div>
    )
}

export default WilliamSupervisorProductCard