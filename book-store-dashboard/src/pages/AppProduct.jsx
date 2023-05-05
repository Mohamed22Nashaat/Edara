import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import '../style/NewWarehouse.css';
const AppProduct  = () =>{


  const [values, setValues]= useState({
    
    name :"",
    location : ""
    
})

const [user , setuser] = useState(JSON.parse(localStorage.getItem("user")))
console.log(user) 
const handleInputChange = (event) => {
  const { name, value } = event.target;
  const v = {}
  setValues ({ ...values, [name]: value });
  };


const navigate = useNavigate();

// add warehouse
const submit =(event)=>{
  event.preventDefault();
  
  axios.post('http://localhost:4000/warehouse/',values ,{
    headers: {
      'Authorization': 'Bearer ' + user.token
    }})
        .then(res => {
            console.log(res);
            console.log(user)
            setValues({name:"" ,location: "" })

        })
        .catch(err => console.log(err))
        
}

console.log(values);
  return (
    <div className="NewProduct">
       <div className="new-wrapper">
        <div className='add-product'>
            <div className='add-form'>
            <h1 style={{marginBottom:"60px"}}>Add  New Product</h1>

            <form onSubmit={(e)=>submit(e)}>
                <div>
<input className='input'  type='text' placeholder='Enter Name'  name='name' required value={values.name}  onChange={handleInputChange } />
</div>

<div>
<input className='input' type='text'  placeholder='Enter Location' name='stock' required value={values.stock} onChange={handleInputChange }/>
</div>

<div>
 <input className='input' type='file' placeholder='image' name='stock' required value={values.photo} onChange={handleInputChange  }  />
                </div>
                <div>
<input className='input' type='text'  placeholder='Enter description' name='stock' required value={values.description} onChange={handleInputChange }/>
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

export default AppProduct;
