import React from 'react';
import {Routes, Route ,Navigate} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import NewWarehouse from '../pages/NewWarehouse';
import NewSuper from'../pages/NewSuper';
import Login from'../pages/Login';
import Home_sup from '../pages/Home_sup';



const Router = () => {
  return(
  <Routes>
    <Route path='/' element={<Navigate to='/dashboard' element={<Dashboard/>}/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/NewWarehouse' element={<NewWarehouse/>}/>
    {/* <Route path='/NewWarehouse' element={<NewWarehouse/>}></Route> */}
    <Route path='/NewSuper' element={<NewSuper/>}/>
    {/* <Route path='/NewSuper' element={<NewSuper/>}></Route> */}
    <Route path='/homess' element={<Home_sup/>}/>
    {/* <Route path='/homess' element={<Home_sup/>}></Route> */}
    <Route path='/Login' element={<Login/>}/>


  </Routes>
  )
}

export default Router;

