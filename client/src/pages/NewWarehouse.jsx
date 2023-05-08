import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../style/NewWarehouse.css';
import { getAuthUser } from "../helper/Storage";

//new warehouse
const NewWarehouse  = () =>{

  const navigate = useNavigate();

  const [user , setuser] = useState(getAuthUser())

  const [values, setValues]= useState({
    
    name :"",
    location : ""
    
})

const handleInputChange = (event) => {
  const { name, value } = event.target;
  const v = {}
  setValues ({ ...values, [name]: value });
  };



const submit =(event)=>{
  event.preventDefault();
  
  axios.post(
      '/warehouse',
      values ,
      {
        headers: {
          token: user.token
        }
      }
      ).then(res => {
            console.log(res);
            console.log(user)
            setValues({name:"" ,location: "" })
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
            <h1 style={{marginBottom:"60px"}}>Add  New Warehouse</h1>

            <form onSubmit={(e)=>submit(e)}>
                <div>
<input className='input'  type='text' placeholder='Enter Name'  name='name' required value={values.name}  onChange={handleInputChange } />
</div>

<div>
<input className='input' type='text'  placeholder='Enter Location' name='location' required value={values.location} onChange={handleInputChange }/>
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

export default NewWarehouse;