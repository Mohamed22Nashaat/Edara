import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import '../style/NewWarehouse.css';
import { getAuthUser } from '../helper/Storage';

const UpdateProduct  = () =>{
  const {id} = useParams(); 

  const [values, setValues]= useState({
    
    name :"",
    stock : "",
    image : "",
    description : "",
    warehouseID : "",
    
})

const handleInputChange = (event) => {
  const { name, value } = event.target;
  const v = {}
  setValues ({ ...values, [name]: value });
  };


const navigate = useNavigate();

const submit =(event)=>{
  event.preventDefault();
  
  axios.put('/products/'+id,values ,{
    headers: {
      'token':getAuthUser().token
    }})
        .then(res => {
            console.log(res);
            setValues({name:"" ,stock: "",image: "",description: "" ,warehouseID: "" })
            navigate('/ManageProduct')
        })
        .catch(err => console.log(err))
        
}

console.log(values);
  return (
    <div className="NewProduct">
       <div className="new-wrapper">
        <div className='add-product'>
            <div className='add-form'>
            <h1 style={{marginBottom:"60px"}}>Update  New Product</h1>

            <form onSubmit={(e)=>submit(e)}>
                <div>
<input className='input'  type='text' placeholder='Enter Name'  name='name' required value={values.name}  onChange={handleInputChange } />
</div>

<div>
<input className='input' type='text'  placeholder='Enter Stock' name='stock' required value={values.stock} onChange={handleInputChange }/>
</div>

<div>
 <input className='input' type='file' placeholder='image' name='image' required value={values.image} onChange={handleInputChange  }  />
                </div>
                <div>
<input className='input' type='text'  placeholder='Enter description' name='description' required value={values.description} onChange={handleInputChange }/>
</div>
<div>
<input className='input' type='text'  placeholder='Enter WarehouseID' name='warehouseID' required value={values.warehouseID} onChange={handleInputChange }/>
</div>


                <button type='submit'>Add</button>
                <input className='reset' type="reset" value={"Reset"}/>
            </form>
            </div>
        </div>
        </div>
       </div>
  )
}

export default UpdateProduct;
