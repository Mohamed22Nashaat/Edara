import React, { useRef} from 'react';
import './style/Stock.css'
import { useState } from 'react';


const Stock = () =>{

    const [quantity, setQuantity]= useState("");
    
    const submit =(event)=>{
        event.preventDefault();
        console.log("quantity :",quantity);
        
    };

    return(


            <div className='stock-form'>
            <form onSubmit={(e)=>submit(e)}>
              
                    <input className='input-quantity'  type='number' id='quantity' required value={quantity} onChange={(event)=>setQuantity(event.target.value)}/>

                <button type='submit'>request</button>

            </form>
            </div>
    );
};

export default Stock;