
import '../style/UpdateSupervisore.css';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import { getAuthUser } from '../helper/Storage';

function UpdateSupervisore  () {
  const {id} = useParams();
  const user = getAuthUser();
  const navigate = useNavigate();

  
  
  // useEffect(()=>{
  //   axios.get(
  //     '/users/'+id ,
  //     {
  //       headers: {
  //         'token': user.token
  //     }
  //   }).then(res => {
  //     console.log(res)
  //   setValues({...values, 
  //     name: res.data[0].name, 
  //     warehouseID: res.data[0].warehouseID, 
  //     phone: res.data[0].phone ,
  //     status: res.data[0].status
  //     })
  //   })
  //   .catch(err => console.log(err))
  // },[])
          
  const [values, setValues]= useState({
    
    name: '',
    warehouseID: '',
    phone: '',
    status: ''
    })
    

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      const v = {}
      setValues ({ ...values, [name]: value });
      };

  const submit =(event)=>{
    event.preventDefault();
    axios.put('/users/'+id,
          values,
          {
            headers:{
              'token': user.token
            }
          })
          .then(res => {
              console.log(res);
              navigate('/homess')
      })
      .catch(err => console.log(err))
        
  }

  

  return(

    <div className="NewWarehouse">
      <div className="new-wrapper">
        <div className='add-product'>
          <div className='add-form'>
            <h1 style={{marginBottom:"60px", color:"rgb(9, 3, 56)"}}>update New Supervisor</h1>

            <form onSubmit={submit}>

              <div>
                <input className='input'  type='text' placeholder='Enter Name'  name='name' value={values.name}  
                  onChange={handleInputChange}/>
              </div>

              <div>
              <input className='input' type='text'  placeholder='Enter Phone' name='phone' value={values.phone} 
              onChange={handleInputChange}/>
              </div>

              <div>
                <input className='input' type='text'  placeholder='Enter warehouse ID' name='warehouseID' value={values.warehouseID} 
                  onChange={handleInputChange}/>
              </div>

              <div>
                <input className='input' type='text'  placeholder='Enter status' name='status' value={values.status}
                onChange={handleInputChange}/>
              </div>

              <button type='submit' >Save </button>
              <input className='reset' type="reset" value={"Reset"}/>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSupervisore;
                