import React from 'react'
import profileimg from"../../assets/images/profile.png"
import { Link } from 'react-router-dom'
import'./TopNav.css'

const TopNav = () => {
  return (
    <div className="top_nav">
      <div className="top_nav_wrapper">
        <div className="search_box">
          <input type="text" placeholder="search ot type" />
          <span><i class="ri-search-line"></i></span>
        </div>
        <div className="top_nav-right">
          <span className='notification'>
            <i class="ri-notification-3-line"></i>
            <span className='badge'>1</span>
            </span>
            <div className="profile">
              <Link to='/settings'>
                <img src={profileimg} alt="" />
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav