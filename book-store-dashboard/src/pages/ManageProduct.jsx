import React, {useEffect, useState, alert} from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import axios from 'axios';

function ManageProduct() {
    const [data, setData]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/products/products')
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
            <h2> Manage Product </h2>
            <Link to={'/AppProduct'} className="btn btn-sm btn-danger"> Add New Product + </Link>
            </div>
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr >
                        <th>id</th>
                        <th> name</th>
                        <th> stock</th>
                        <th> photo</th>
                        <th> description</th>
                        <th> actions</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((users, index) =>{
                        return<tr key={index}>
                            <td> {users.id}</td>
                            <td> {users.name}</td>
                            <td> {users.stock}</td>
                            <td> {users.photo}</td>
                            <td> {users.description}</td>
                            <td>
                                <button onClick={()=>handleDelete(users.id)} className="btn btn-sm btn-danger"> Delete </button>
                <Link to={`/UpdateProduct/${users.id}`} className="btn btn-sm btn-danger"> update </Link>
                </td>
                </tr>
                    })}
                </tbody>
            </Table>
        </div>
        </div>
        

   
    );
  }
  
  export default ManageProduct;
