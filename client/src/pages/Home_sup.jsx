import React, {useEffect, useState, alert} from "react";
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from "react-router-dom";
import '../style/homess.css';
import {getAuthUser} from '../helper/Storage';
import axios from 'axios';

function Home_sup() {
    const userLocal = getAuthUser();
    const navigate = useNavigate();
  
    

    const [data, setData]= useState([])
    useEffect(()=>{
        axios.get('/users',{
            headers:{
                'token': userLocal.token
            } 
        })
        .then(res => setData(res.data))
        .catch(err => console.log(err));

},[])
   const handleDelete = (id) => {
    axios.delete('/users/'+id,
    {headers:{
        'token': userLocal.token
    }})
    .then(res =>{
        console.log(res);
        window.location.reload();
    })
    .catch(err => console.log(err));

   }
      return (
              <div className="style-home">
       <div className="header">
        <div className="w-70 bg-white rounded p-3">
            <h2> Manage Supervisore </h2>
            <Link to={'/NewSuper'} className="btn btn-sm btn-danger"> Add New Supervisore + </Link>
            </div>
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr >
                        <th>id</th>
                        <th> name</th>
                        <th> email</th>
                        <th> Phone</th>
                        <th> warehouseID</th>
                        <th> status</th>
                        <th> actions</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((users, index) =>{
                        return<tr key={index}>
                            <td> {users.id}</td>
                            <td> {users.name}</td>
                            <td> {users.email}</td>
                            <td> {users.phone}</td>
                            <td> {users.warehouseID}</td>
                            <td> {users.status}</td>
                            <td>
                                <button onClick={()=>handleDelete(users.id)} className="btn btn-sm btn-danger"> Delete </button>
                <Link to={`/UpdateSupervisore/${users.id}`} className="btn btn-sm btn-danger"> update </Link>
                </td>
                </tr>
                    })}
                </tbody>
            </Table>
        </div>
        </div>
        

   
    );
  }
  
  export default Home_sup;