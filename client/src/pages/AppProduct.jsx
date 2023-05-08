import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../style/NewWarehouse.css';
import { getAuthUser } from '../helper/Storage';

const AppProduct  = () =>{

  const user = getAuthUser();
  const navigate = useNavigate();

  
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

  // add warehouse
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

    console.log(formDataWithImage.image);
    axios.post('/products',
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
            <h1 style={{marginBottom:"60px"}}>Add  New Product</h1>

            <form onSubmit={(e)=>submit(e)}>
              <div>
                <input className='input'  type='text' placeholder='Enter Name'  name='name' required value={formData.name}  onChange={handleInputChange } />
              </div>

              <div>
                <input className='input' type='text'  placeholder='Enter Stock' name='stock' required value={formData.stock} onChange={handleInputChange }/>
              </div>

              <div>
                <input className='input' type='file' placeholder='image' name='photo' accept="image/*" required value={formData.photo} onChange={handleImageChange  }  />
              </div>

              <div>
                <input className='input' type='text'  placeholder='Enter description' name='description' required value={formData.description} onChange={handleInputChange }/>
              </div>
              <div>
                <input className='input' type='text'  placeholder='Enter warehouse ID' name='warehouseID' required value={formData.warehouseID} onChange={handleInputChange }/>
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
