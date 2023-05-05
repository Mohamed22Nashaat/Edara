import React, {useEffect, useState, alert} from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import '../style/homess.css';
import axios from 'axios';

function Home_sup() {
    const [data, setData]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));

},[])
   const handleDelete = (id) => {
    axios.delete('http://localhost:4000/users'+id)
    .then(res =>
        {
            alert('record has delete');
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
                            <td> {users.Phone}</td>
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