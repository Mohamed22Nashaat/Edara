import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



function Home_sup() {
    const [data, setData]= useState([]);
    useEffect(()=>{
        axios.get('http://localhost:4000/homess')
        .then(res => setData(res.data))
        .catch(err => console.log(err))

},[])

  const handleDelete = async (id)=> {
     await axios.delete('http://localhost:4000/delete/'+id)
     .then(res => {
       window.location.reload();
    })
         .catch(err => console.log(err))


 }




    return (
      <div className="d-flex vh-100 bg-warning justify-content-center align-items-center">
        <div className="w-70 bg-white rounded p-3">
       
            <h2> Manage Supervisore</h2>

            <Table striped bordered hover size="sm" >
                <thead>
                    <tr >
                        <th>id</th>
                        <th> Email</th>
                        <th> Passward</th>
                        <th> Phone</th>
                        <th> Status</th>
                        <th> type</th>
                        <th> Name</th>
                        <th> actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(( user, index) =>{
                        return<tr key={index}>
                            <td> {user.id}</td>
                            <td> {user.email}</td>
                            <td> {user.password}</td>
                            <td> {user.phone}</td>
                            <td> {user.status}</td>
                            <td> {user.type}</td>
                            <td> {user.name}</td>
                            <td> {user.actions}</td>
                            <td>
                                <Link to={`/read/${user.id}`}> <Button variant="dark" className="m-1">Show</Button></Link>
                                <Link to={`/update/${user.id}`} ><Button variant="dark" className="m-1">update</Button> </Link>
                                 <Button  onClick={ ()=> handleDelete(user.id)} variant="dark">Delete</Button>  
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