import React from 'react';
import {Routes,createBrowserRouter, Route ,Navigate} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import NewWarehouse from '../pages/NewWarehouse';
import NewSuper from'../pages/NewSuper';
import Login from'../pages/Login';
import Home_sup from '../pages/Home_sup';
import History from '../pages/History';
import AddProduct from '../pages/admin-warhouse/AddProduct';
import EditProduct from '../pages/admin-warhouse/EditProduct';
import AdminProductList from '../pages/admin-warhouse/AdminProductList';
import UserProductList from '../pages/user-warehouse/UserProductList';
import UserProductCard from '../pages/user-warehouse/UserProductCard';
import UpdateSupervisore from '../pages/UpdateSupervisore';
import ManageWarehouse from '../pages/ManageWarehouse';
import UpdateWarehouse from '../pages/UpdateWarehouse';
import ManageProduct from '../pages/ManageProduct';
import AppProduct from '../pages/AppProduct';
import UpdateProduct from '../pages/UpdateProduct';
const Router = () => {
  return(
  <Routes>
    <Route path='/' element={<Navigate to='/dashboard' element={<Dashboard/>}/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/NewWarehouse' element={<NewWarehouse/>}/>
    {/* <Route path='/NewWarehouse' element={<NewWarehouse/>}></Route> */}
    {/* <Route path='/NewSuper' element={<NewSuper/>}></Route> */}
    <Route path='/homess' element={<Home_sup/>}/>
    {/* <Route path='/homess' element={<Home_sup/>}></Route> */}
    <Route path='/Login' element={<Login/>}/>
    <Route path='/history' element={<History/>}/>
    <Route path='/add' element={<AddProduct/>}/>
    <Route path='/edit' element={<EditProduct/>}/>
    <Route path='/adminProductList' element={<AdminProductList/>}/>
    <Route path='/userProductList' element={<UserProductList/>}/>
    <Route path='/UserProductCard' element={<UserProductCard/>}/>
    <Route path='/UpdateSupervisore/:id' element={<UpdateSupervisore/>}/>
    <Route path='/NewSuper' element={<NewSuper/>}/>
    <Route path='/ManageWarehouse' element={<ManageWarehouse/>}/>
    <Route path='/UpdateWarehouse/:id' element={<UpdateWarehouse/>}/>
    <Route path='/ManageProduct' element={<ManageProduct/>}/>
    <Route path='/AppProduct' element={<AppProduct/>}/>
    <Route path='/UpdateProduct/:id' element={<UpdateProduct/>}/>
  </Routes>
  )
}
  
export default Router;