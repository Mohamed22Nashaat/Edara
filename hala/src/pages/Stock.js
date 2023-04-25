
import React, { useRef} from 'react';
import "../style/Stock.css";


const Stock = () =>{
    
    const stockForm = useRef([])
    
    const submit =(event)=>{
        event.preventDefault();
        console.log(stockForm.current);
        
    }

    return(


            <div className='stock-form'>
            <form onSubmit={(e)=>submit(e)}>
              
                    <input className='input-quantity'  type='number' id='quantity' min={"0"} required ref={(ref)=>stockForm.current["quanity"]=ref}/>

                <button type='submit'>request</button>

            </form>
            </div>
    );
};

export default Stock;