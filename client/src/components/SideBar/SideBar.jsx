import React from 'react'
import { NavLink } from "react-router-dom";
import navLinks from '../../assets/book.data/navlinks';
import "./SideBar.css";
import { removeAuthUser, getAuthUser } from "../../helper/Storage";
import { useNavigate, } from "react-router-dom";
import HistoryUser from './../../pages/HistoryUser';
const Sidebar = () => {
  const navigate = useNavigate();
  const auth = getAuthUser();
  const logout = () => {
    removeAuthUser();
    navigate("/Login");
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
            {!auth && (
              <li className='nav_item' >
                <NavLink
                  to={"/Login"}>
                  <i className="ri-settings-2-line"></i>
                  "Login"
                </NavLink>
              </li>
            )
            }
             {auth && auth.role === "admin" && (
              <li className='nav_item' >
                <NavLink
                  to={"/dashboard"}>
                  <i className="ri-settings-2-line"></i>
                  "Dashboard"
                </NavLink>
              </li>
            )}

            {/* {auth && auth.role === "admin" && (
              <li className='nav_item' >
                <NavLink
                  to={"/NewWarehouse"}>
                  <i className="ri-shopping-bag-line"></i>
                  "New Warehouse"
                </NavLink>
              </li>
            )} */}
              {/* {auth && auth.role === "admin" && (
              <li className='nav_item' >
                <NavLink
                  to={"/UpdateWarehouse"}>
                  <i className="ri-shopping-bag-line"></i>
                  "Update Warehouse"
                </NavLink>
              </li>
            )} */}

            
{auth && auth.role === "user" && (
              <li className='nav_item' >
                <NavLink
                  to={"/UserProductList"}>
                  <i className="ri-settings-2-line"></i>
                  "Home"
                </NavLink>
              </li> 
            )}

            
 {auth && auth.role === "user" && (
              <li className='nav_item' >
                <NavLink
                  to={"/HistoryUser"}>
                  <i className="ri-settings-2-line"></i>
                  "HistoryUser"
                </NavLink>
              </li> 
            )}


{auth && auth.role === "user" && (
              <li className='nav_item' >
                <NavLink
                  to={"/HistoryUser"}>
                  <i className="ri-settings-2-line"></i>
                  "HistoryUser"
                </NavLink>
              </li>
            )}



            {auth && auth.role === "admin" && (
              <li className='nav_item' >
                <NavLink
                  to={"/ManageWarehouse"}>
                  <i className="ri-settings-2-line"></i>
                  "ManageWarehouse"
                </NavLink>
              </li>
            )}

            {auth && auth.role === "admin" && (
              <li className='nav_item' >
                <NavLink
                  to={"/ManageProduct"}>
                  <i className="ri-settings-2-line"></i>
                  "Manage Product"
                </NavLink>
              </li>
            )}

            {/* {auth && auth.role === "admin" && (
              <li className='nav_item' >
                <NavLink
                  to={"/NewSuper"}>
                  <i className="ri-shopping-bag-line"></i>
                  "New Supervisor"
                </NavLink>
              </li>
            )} */}

            {auth && auth.role === "admin" && (
              <li className='nav_item' >
                <NavLink
                  to={"/homess"}>
                  <i className="ri-settings-2-line"></i>
                  "ManageSupervisor"
                </NavLink>
              </li>
            )}




            {auth && auth.role === "admin" && (
              <li className='nav_item' >
                <NavLink
                  to={"/history"}>
                  <i className="ri-settings-2-line"></i>
                  "Requests"
                </NavLink>
              </li>
            )}

            {/* {auth && auth.role === "user" && (
              <li className='nav_item' >
                <NavLink
                  to={"/UserProductList"}>
                  <i className="ri-apps-2-line"></i>
                  "warehouses"
                </NavLink>
              </li>
            )} */}
          </ul>
        </div>
        {auth && (<div className="sidebar_bottom">
          <span>
            <i class="ri-logout-circle-r-line"></i>
            <button onClick={logout} className='logout' type='logout' > logout </button>
          </span>
        </div>)}
      </div>
    </div >

  );
};
export default Sidebar;