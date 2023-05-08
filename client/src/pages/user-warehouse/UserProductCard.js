import React from "react";
import Stock from "./Stock";
import './style/UserProductCard.css';
import './style/Stock.css'

import { useState } from 'react';
import axios from 'axios';
import { getAuthUser } from '../../helper/Storage';
import { useNavigate } from 'react-router-dom';



const UserProductCard = (props) =>{
    
    const navigate = useNavigate();

    const [quantity, setQuantity]= useState("");
    const [user , setuser] = useState(getAuthUser());


    const [values, setValues]= useState({
    
        productID: props.productID,
        quantity:'' ,
        userID: user.id ,
        warehouseID: user.warehouseID 
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const v = {}
        setValues ({ ...values, quantity: value });
      };

    const submit =(event)=>{
        event.preventDefault();
        axios.post('/request',
            values,
            {
                headers: {
                    token: user.token
                  }
            }
        ).then(res=>{
            setValues({name:"" ,location: "" })
            navigate("/HistoryUser/warehouse/"+user.warehouseID);
        })
        .catch(err => console.log(err))
        
    };

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
                    
                    <h3>Quantity= {props.quantity}</h3>

                    <div className='stock-form'>
                    <form onSubmit={(e)=>submit(e)}>
              
                    <input className='input-quantity'  type='number' id='quantity' required value ={values.quantity} onChange={handleInputChange}/>

                <button type='submit'>request</button>

            </form>
                    </div>
                    </div>

            </div>
        </div>
    )
}

export default UserProductCard