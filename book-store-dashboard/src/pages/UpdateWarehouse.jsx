import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// update warehouse
const UpdateWarehouse  = () =>{


  const [values, setValues]= useState({
    
    name :"",
    location : "",
    status : ""
    
})

const [user , setuser] = useState(JSON.parse(localStorage.getItem("user")))
console.log(user) 
const handleInputChange = (event) => {
  const { name, value } = event.target;
  const v = {}
  setValues ({ ...values, [name]: value });
  };


const navigate = useNavigate();

const submit =(event)=>{
  event.preventDefault();
  
  axios.post('http://localhost:4000/warehouse/',values ,{
    headers: {
      'Authorization': 'Bearer ' + user.token
    }})
        .then(res => {
            console.log(res);
            console.log(user)
            setValues({name:"" ,location: "" ,status: ""})
            navigate('/ManageWarehouse')

        })
        .catch(err => console.log(err))
        
}

console.log(values);
  return (
    <div className="NewWarehouse">
       <div className="new-wrapper">
        <div className='add-product'>
            <div className='add-form'>
            <h1 style={{marginBottom:"60px"}}>Update  New Warehouse</h1>

            <form onSubmit={(e)=>submit(e)}>
                <div>
<input className='input'  type='text' placeholder='Enter Name'  name='name' required value={values.name}  onChange={handleInputChange } />
</div>

<div>
<input className='input' type='text'  placeholder='Enter Location' name='location' required value={values.location} onChange={handleInputChange }/>
</div>

                

                <button type='submit'>Update</button>
                <input className='reset' type="reset" value={"Reset"}/>
            </form>
            </div>
        </div>
        </div>
       </div>
  )
}

export default UpdateWarehouse;