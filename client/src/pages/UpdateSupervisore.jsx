
import '../style/UpdateSupervisore.css';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import { getAuthUser } from '../helper/Storage';

function UpdateSupervisore  () {
  const {id} = useParams();
  const user = getAuthUser();

  useEffect(()=>{
    axios.get(
      '/users/'+id ,
      {
        headers: {
          'token': user.token
      }
    }).then(res => {
      console.log(res)
    setValues({...values, 
      name: res.data[0].name, 
      warehouseID: res.data[0].warehouseID, 
      phone: res.data[0].phone ,
      status: res.data[0].status
      })
    })
    .catch(err => console.log(err))
  },[])
          
  const [values, setValues]= useState({
    
    name: '',
    warehouseID: '',
    phone: '',
    status: ''
    })
    


const navigate = useNavigate();

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

  const handleInputChange =(event)=>{
    const { id } = event.target;
    event.preventDefault();
    axios.delete(
          '/users/'+id,
          values,
          ).then(res => {
              console.log(res);
              navigate('/homess')
          //.catch(err => console.log(err))
          }).catch(err => console.log(err))
  }

  return(

    <div className="NewWarehouse">
      <div className="new-wrapper">
        <div className='add-product'>
          <div className='add-form'>
            <h1 style={{marginBottom:"60px", color:"rgb(9, 3, 56)"}}>update New Supervisor</h1>

            <form onSubmit={submit}>

              <div>
                <input className='input'  type='text' placeholder='Enter Name'  name='name' required value={values.name}  
                  onChange={e=> setValues({...values, name : e.target.value})}/> 
              </div>

              <div>
              <input className='input' type='text'  placeholder='Enter Phone' name='phone' required value={values.phone} 
              onChange={e=> setValues({...values, email : e.target.value})}/>
              </div>

              <div>
                <input className='input' type='text'  placeholder='Enter warehouse ID' name='warehouseID' required value={values.warehouseID} 
                  onChange={e=> setValues({...values, phone : e.target.value})}/>
              </div>

              <div>
                <input className='input' type='text'  placeholder='Enter status' name='status' required value={values.status}
                onChange={e=> setValues({...values, status : e.target.value})}/>
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
                