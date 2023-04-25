
import '../style/NewSuper.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const NewSuper = () =>{


  const [values, setValues]= useState({
    
    name :"",
    email : "",
    password : "",
    phone : ""
    
    
})

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setValues ({ ...values, [name]: value });
  };


const navigate = useNavigate();

const submit =(event)=>{
  event.preventDefault();
  axios.post('http://localhost:4000/user/',values )
        .then(res => {
            console.log(res);
            navigate('/Home_sup')

        })
        .catch(err => console.log(err))
}


return(

<div className="NewWarehouse">
       <div className="new-wrapper">
        <div className='add-product'>
            <div className='add-form'>
<h1 style={{marginBottom:"60px", color:"rgb(9, 3, 56)"}}>Add New Supervisor</h1>

<form onSubmit={submit}>

<div>
<input className='input'  type='text' placeholder='Enter Name'  name='name' required value={values.name}  onChange={handleInputChange } />
</div>

<div>
<input className='input' type='text'  placeholder='Enter Email' name='email' required value={values.email} onChange={handleInputChange }/>
</div>

<div>
<input className='input' type='text'  placeholder='Enter Phone' name='phone' required value={values.phone} onChange={handleInputChange }
 />
</div>

<div>
<input className='input' type='text'  placeholder='Enter Password' name='password' required value={values.password} onChange={handleInputChange }/>
</div>









<button type='submit' >Add </button>
<input className='reset' type="reset" value={"Reset"}/>

</form>
</div>
</div>

</div>
</div>

);
};

export default NewSuper;
                
