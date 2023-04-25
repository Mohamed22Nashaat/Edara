import React, { useRef} from 'react';
// import "./style/StephenOperateProduct.css" ;
import "../style/OperateProduct.css";
import { useState } from 'react';



const EditProduct = () =>{


    const [image, setImage]= useState("");
    const [title, setTitle]= useState("");
    const [desc, setDesc]= useState("");
    const [quantity, setQuantity]= useState("");
    
    const submit =(event)=>{
        event.preventDefault();
        console.log(image,title,desc,quantity);
        
    };

    return(

        <div className='stephen-edit-product'>
            <div className='stephen-edit-form'>
            <h1 style={{marginBottom:"60px"}}>Edit Product</h1>

            <form onSubmit={(e)=>submit(e)}>
                <div>
                <input className='stephen-input' placeholder='image' type='file' id='image' value={image}  required onChange={(event)=>setImage(event.target.value) }  />
                </div>

                
                <div>
                
                <input className='stephen-input' placeholder='title' type='text' id='title' required value={title} onChange={(event)=>setTitle(event.target.value)}/>
                </div>
                
                
                <div>
                
                <textarea id='desc' placeholder='description' required value={desc} onChange={(event)=>setDesc(event.target.value)} />
                </div>
                
                
                <div>
                    
                    <input className='stephen-input-quantity' placeholder='quantity' type='number' id='quantity' min={"0"} required value={quantity} onChange={(event)=>setQuantity(event.target.value)}/>
                </div>

                <button type='submit' >Edit</button>
                
            </form>
            </div>
        </div>
    
    );
};

export default EditProduct;