import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import '../style/NewWarehouse.css';
import { getAuthUser } from '../helper/Storage';

const UpdateProduct  = () =>{
  const {id} = useParams(); 
  const user = getAuthUser();
  const navigate = useNavigate();

  if(user && user.role == 'admin'){
    navigate('/');
  }
  
  const [formData, setFormData]= useState({
    name :"",
    stock : "",
    description : "",
    warehouseID : "",
    image: null
});

  const handleInputChange = (event) => {
    setFormData ({
      ...formData, 
      [event.target.name]: event.target.value
  });
    };

  const handleImageChange = (event) => {
    setFormData({
      ...formData,
      image: event.target.files[0],
    });
  };

  const submit =(event)=>{
    event.preventDefault();
    const headers = {
      "Content-Type": "multipart/form-data",
      token: user.token,
    };
    const formDataWithImage = new FormData();
    formDataWithImage.append("image", formData.image);
    formDataWithImage.append("name", formData.name);
    formDataWithImage.append("stock", formData.stock);
    formDataWithImage.append("description", formData.description);
    formDataWithImage.append("warehouseID", formData.warehouseID);

    axios.put('/products/'+id,
        formDataWithImage,
        {headers}
      )
      .then(res => {
          console.log(res);
          navigate('/ManageProduct');
      }).catch(err => console.log(err))
  }

  return (
    <div className="NewProduct">
      <div className="new-wrapper">
        <div className='add-product'>
          <div className='add-form'>
            <h1 style={{marginBottom:"60px"}}>Update  New Product</h1>

            <form onSubmit={(e)=>submit(e)}>
              <div>
                <input className='input'  type='text' placeholder='Enter Name'  name='name' value={formData.name}  onChange={handleInputChange } />
              </div>

              <div>
                <input className='input' type='text'  placeholder='Enter Stock' name='stock' value={formData.stock} onChange={handleInputChange }/>
              </div>

              <div>
                <input className='input' type='file' placeholder='image' name='photo' accept="image/*"  value={formData.photo} onChange={handleImageChange  }  />
              </div>

              <div>
                <input className='input' type='text'  placeholder='Enter description' name='description' value={formData.description} onChange={handleInputChange }/>
              </div>

              <div>
                <input className='input' type='text'  placeholder='Enter WarehouseID' name='warehouseID' value={formData.warehouseID} onChange={handleInputChange }/>
              </div>

              <button type='submit'>Save</button>
              <input className='reset' type="reset" value={"Reset"}/>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateProduct;
