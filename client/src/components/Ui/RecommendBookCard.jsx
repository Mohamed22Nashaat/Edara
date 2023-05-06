import React ,{useState}from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthUser } from "../../helper/Storage";
const auth = getAuthUser();
const RecommendBookCard = (props) => {
  const navigate = useNavigate()
    const {language,imgUrl,percentage} = props.item
  return (
    <div className="recommend_book-card">
    <div className="recommend_book-top">
        <h5>
            <span>
                <i class="ri-store-line"></i>
            </span>
           Warehouse {percentage} </h5>
           {auth && auth.role === "admin"&&(<div className="select-option">
            <select>
             <option value="None">None</option>
              <option value="EDIT">Edit</option>
              <option value="DELETE">Delete</option>
            </select>
           </div>)}
           
    </div>
    <div>
    <button className='warebutton' onClick={() =>navigate('/AdminProductList')}>Show</button>
    </div>
    <div className="recommend_book-img">
      <img src={imgUrl} alt="" />
    </div>
    <div className="recommend_book-bottom">
      
      <div className="recommend_book-other">
        <div className="recommend_book-icon">
        <p>
          <i class="ri-user-2-fill"></i>
          {language}
        </p>
      <p><i class="ri-settings-2-line"></i></p>
        <p>
          <i class="ri-timer-flash-line"></i></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RecommendBookCard