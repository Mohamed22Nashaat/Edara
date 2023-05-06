
import '../style/NewSuper.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { getAuthUser } from '../helper/Storage';

//add supervisor
const NewSuper  = () =>{
  const user = getAuthUser();


  const [values, setValues]= useState({
    
    name :"",
    email: "",
    phone: "",
    password: "" 
    
})

const handleInputChange = (event) => {
  const { name, value } = event.target;
  const v = {}
  setValues ({ ...values, [name]: value });
};


const navigate = useNavigate();

const submit =(event)=>{
  event.preventDefault();
  
  axios.post(
    '/users/',
    values ,
    {
      headers: {
        'token': user.token
    }
    }).then(res => {
        console.log(res);
        console.log(user)
        // setValues({name:"" ,email: "",phone: "",password: "" })
        navigate('/homess')

      }).catch(err => console.log(err)) 
}

// function NewSuper (){


//   const [values, setValues]= useState({
    
//     name :"",
//     email : "",
//     phone : "",
//     password : ""
   
    
    
// })

//const handleInputChange = (event) => {
  //const { name, value } = event.target;
  //setValues ({ ...values, [name]: value });
  //};


// const navigate = useNavigate();

// const submit =(event)=>{
//   event.preventDefault();
//   axios.post('/users', values)
//         .then(res => { 
//           console.log(res)
//           navigate('/homess')
//         })
//        .catch(err => console.log(err))
// }


return(

<div className="NewWarehouse">
       <div className="new-wrapper">
        <div className='add-product'>
            <div className='add-form'>
<h1 style={{marginBottom:"60px", color:"rgb(9, 3, 56)"}}>Add New Supervisor</h1>

{/* <form onSubmit={(e)=>submit(e)}> */}
<form onSubmit={submit}>

<div>
<input className='input'  type='text' placeholder='Enter Name'  name='name' required value={values.name}  
onChange={e=> setValues({...values, name : e.target.value})}/>
</div>

<div>
<input className='input' type='text'  placeholder='Enter Email' name='email' required value={values.email} 
onChange={e=> setValues({...values, email : e.target.value})}/>
</div>

<div>
<input className='input' type='text'  placeholder='Enter Phone' name='phone' required value={values.phone}
  onChange={e=> setValues({...values, phone : e.target.value})}
 />
</div>

<div>
<input className='input' type='password'  placeholder='Enter Password' name='password' required value={values.password} 
onChange={e=> setValues({...values, password : e.target.value})}
/>
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
                
