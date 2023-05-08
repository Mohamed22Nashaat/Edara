import React, {useEffect, useState, alert} from "react";
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from "react-router-dom";
import { getAuthUser } from "../helper/Storage";
import axios from 'axios';

//show warehouse
function ManageWarehouse() {
    const navigate = useNavigate();
    const user = getAuthUser();

    if(!user || user.role !== 'admin'){
        navigate('/');
      }
      
    const [data, setData]= useState([])
    useEffect(()=>{
        axios.get(
            '/warehouse',{
            headers: {
                "token": user.token
            }
        })
        .then(res => setData(res.data))
        .catch(err => console.log(err));

},[])
   const handleDelete = (id) => {
        axios.delete('/warehouse/'+id,{
            headers: {
                "token": user.token
            }
        }).then(res =>{ 
            // console.log(res);
            window.location.reload();
        }).catch(err => console.log(err));

   }
      return (
              <div className="style-home">
       <div className="header">
        <div className="w-70 bg-white rounded p-3">
            <h2> Manage Warehouse </h2>
            <Link to={'/NewWarehouse'} className="btn btn-sm btn-danger"> Add New Warehouse + </Link>
            </div>
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr >
                        <th> id</th>
                        <th> name</th>
                        <th> location</th>
                        <th> status</th>
                        <th> supervisor ID</th>
                        <th> actions</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((warehouse, index) =>{
                        return<tr key={index}>
                            <td> {warehouse.id}</td>
                            <td> {warehouse.name}</td>
                            <td> {warehouse.location}</td>
                            <td> {warehouse.status}</td>
                            <td> {warehouse.supervisorID}</td>
                            <td>
                                <button onClick={()=>handleDelete(warehouse.id)} className="btn btn-sm btn-danger"> Delete </button>
                                <Link to={`/UpdateWarehouse/${warehouse.id}`} className="btn btn-sm btn-danger"> update </Link>
                                <Link to={`/AdminProductList/${warehouse.id}`} className="btn btn-sm btn-danger"> view </Link>
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
        </div>
        

   
    );
  }
  
  export default ManageWarehouse;
