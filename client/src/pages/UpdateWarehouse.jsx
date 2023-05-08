import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { getAuthUser } from "../helper/Storage";


// update warehouse
const UpdateWarehouse  = () =>{

  const user = getAuthUser();
  const navigate = useNavigate();

  const {id} = useParams(); 
  const [values, setValues]= useState({
    name :"",
    location : "",
    status : "",
    supervisorID:""
  });



const handleInputChange = (event) => {
  const { name, value } = event.target;
  const v = {}
  setValues ({ ...values, [name]: value });
  };

const submit =(event)=>{
  event.preventDefault();
  
  axios.put(
    '/warehouse/'+id,
    values ,
    {headers: {
        'token': user.token
      }
      
      
    })
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
                  <input className='input'  type='text' placeholder='Enter Name'  name='name' value={values.name}  onChange={handleInputChange } />
                </div>

                <div>
                  <input className='input' type='text'  placeholder='Enter Location' name='location' value={values.location} onChange={handleInputChange }/>
                </div>

                <div>
                  <input className='input' type='text'  placeholder='Enter Status' name='status' value={values.status} onChange={handleInputChange }/>
                </div>
                
                <div>
                  <input className='input' type='text'  placeholder='Enter supervisorID' name='supervisorID' value={values.supervisorID} onChange={handleInputChange }/>
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