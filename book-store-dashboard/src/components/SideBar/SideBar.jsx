import React from 'react'
import { NavLink } from "react-router-dom";
import navLinks from '../../assets/book.data/navlinks';
import "./SideBar.css";
import { removeAuthUser, } from "../../helper/Storage";
import { useNavigate ,getAuthUser} from "react-router-dom";
const Sidebar = () => { 
  const navigate = useNavigate();

  const logout = () => {
    removeAuthUser();
    navigate("/NewWarehouse");
  };
return (
  <div className="sidebar">
    <div className="sidebar_top">
      <h2>
        <span>
        <i class="ri-dashboard-2-fill"></i>
          </span>
          Dashborad
      </h2>
    </div>
    <div className="sidebar_content">
      <div className="menu">
        <ul className='nav_list'>
          {
            navLinks.map((item,index)=>(
              <li className='nav_item' key={index}>
                 <NavLink 
                 to={item.path}
                className={(navClass) =>
                   navClass.isActive ? 'nav_active nav_link':'nav_link'}>
                  <i className={item.icon}></i>
                  {item.display}
              </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="sidebar_bottom">
        <span>
        <i class="ri-logout-circle-r-line"></i>
              <button  onClick={logout} className='logout' type='logout' > logout </button>
        </span>
      </div>
    </div>
  </div>

);
};
export default Sidebar;