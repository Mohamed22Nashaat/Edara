
import axios from 'axios';
import { getAuthUser } from '../helper/Storage';
import'../style/History.css'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function  History() {
    const user = getAuthUser();
    const navigate = useNavigate();
  
    if(!user || user.role !== 'admin'){
      navigate('/');
    }
    
    const [data, setData]= useState([])
    useEffect(()=>{
        axios.get('/request',{
            headers:{
                token: user.token
            } 
        })
        .then(res => setData(res.data))
        .catch(err => console.log(err));

        },[]);

        const handleAccept = (id) => {
        const body={status: 'accepted'}

        axios.put(
            '/request/'+id,
            body,
        {
            headers:{
                token: user.token
            }
        })
        .then(res => {
            console.log(res)
            window.location.reload();
        })
        .catch(err => console.log(err));
    }

    const handleDecline = (id) => {
        const body={status: 'declined'}
        axios.put(
            '/request/'+id,
            body,
        {
            headers:{
                'token': user.token
            }
        })
        .then(res => {
            console.log(res)
            window.location.reload();
        })
        .catch(err => console.log(err));
    }

    return(
        <div className='all-historyy'>
           <h1>Request</h1>
           <div className='all-history-tablee'>
            <table>
                <thead>
                    <tr >
                        <td>ID</td>
                        <td>Warehouse ID</td>
                        <td>Supervisor ID</td>
                        <td>Type</td>
                        <td>Product ID</td>
                        <td>Quantity</td>
                        <td>options</td>
                    </tr>
                </thead>

                <tbody>
                {data.map((request, index) =>{
                        return(
                            <tr key={index}>
                                <td> {request.id}</td>
                                <td> {request.warehouseID}</td>
                                <td> {request.userID}</td>
                                <td> {request.status}</td>
                                <td> {request.productID}</td>
                                <td> {request.quantity}</td>
                                {request.status === "pending" && (
                                    <td>
                                    <button onClick={()=>handleAccept(request.id)} className="btn btn-sm btn-danger"> Accept </button>
                                    <button onClick={()=>handleDecline(request.id)} className="btn btn-sm btn-danger"> Decline </button>
                                </td>
                                )}
                                
                            </tr>
                        )
                })}
                </tbody>
            </table>

           </div>
        </div>
    );
};

export default History;