import React, { useRef} from 'react';
import { useState } from 'react';
import '../style/OperateProduct.css';



const AddProduct = () =>{


    const [image, setImage]= useState("");
    const [title, setTitle]= useState("");
    const [desc, setDesc]= useState("");
    const [quantity, setQuantity]= useState("");
    
    const submit =(event)=>{
        event.preventDefault();
        console.log("image :",image);
        console.log("title :" ,title);
        console.log("description :",desc);
        console.log("quantity :",quantity);
        
    };

    return(

        <div className='add-product'>
            <div className='add-form'>
            <h1 style={{marginBottom:"60px", color:"rgb(9, 3, 56)"}}>Add new Product</h1>

            <form onSubmit={(e)=>submit(e)}>
                <div>
                <input className='input' type='file' placeholder='image' id='image' value={image}  required onChange={(event)=>setImage(event.target.value) }  />
                </div>

                
                <div>
                <input className='input' placeholder='title' type='text' id='title' required value={title} onChange={(event)=>setTitle(event.target.value)}/>
                </div>
                
            
                <div>
                <textarea id='desc' placeholder='description' required value={desc} onChange={(event)=>setDesc(event.target.value)} />
                </div>
                
                
                <div>
                    
                    <input className='input-quantity' placeholder='quantity' type='number' id='quantity' min={"0"} required value={quantity} onChange={(event)=>setQuantity(event.target.value)}/>
                </div>

                <button type='submit' >Add Product</button>
                <input className='reset' type="reset" value={"Reset"}/>
                
            </form>
            </div>
        </div>
    
    );
};

export default AddProduct;