import React from 'react';

const RecommendBookCard = (props) => {
    const {language,imgUrl,percentage} = props.item
  return (
    <div className="recommend_book-card">
    <div className="recommend_book-top">
        <h5>
            <span>
                <i class="ri-store-line"></i>
            </span>
           Warehouse {percentage} </h5>
           <div className="select-option">
            <select>
             <option value="None">None</option>
              <option value="EDIT">Edit</option>
              <option value="Show">Show</option>
              <option value="DELETE">Delete</option>
            </select>
           </div>
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