import React from 'react';
import Router from '../../routes/Router';
import SideBar from '../SideBar/SideBar'; 
import TopNav from '../TopNav/TopNav';

  import { getAuthUser } from '../../helper/Storage';
const auth = getAuthUser () ;

const Layout = () => {
  return (
    <div className="Layout">
      {auth && (<SideBar/>)}
      
      <div className="main_layout">
      {auth && (<TopNav/>)}
        
        <div className="content">
          <Router/>
        </div>
      </div>
    </div>

  )
}

export default Layout;