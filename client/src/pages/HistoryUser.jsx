import axios from 'axios';
import { getAuthUser } from '../helper/Storage';
import'../style/HistoryUser.css'
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



function  HistoryUser() {
    const navigate = useNavigate();
    const user = getAuthUser();

    

    const {where, id} = useParams();
    const [data, setData]= useState([])

    useEffect(()=>{
        
        axios.get('/request/'+where+'Requests/'+id,{
            headers:{
                token: user.token
            } 
        })
        .then(res => {
            setData(res.data);
            
        })
        .catch(err => console.log(err));

        },[]);
        
    return(
        <div className='all-history'>
           <h1>History</h1>
           <div className='all-history-table'>
            <table>
                <thead>
                    
                    <tr>
                        <td>ID</td>
                    {where === 'warehouse' && (
                        <td>Supervisor ID</td>
                    )}
                    {where === 'user' && (
                        <td>Warehouse ID</td>
                        )}

                        <td>Product ID</td>
                        <td>Quantity</td>
                        <td>Status</td>
                    </tr>
                </thead>

                <tbody>
                {where == 'warehouse' && (
                <>
                    {data.map((request, index) =>{
                        return(
                        <tr key={index}>
                            <td> {request.id}</td>
                            <td> {request.userID}</td>
                            <td> {request.productID}</td>
                            <td> {request.quantity}</td>
                            <td> {request.status}</td>
                        </tr>
                        )
                    })}
                </>
                )}  
                
                {where == 'user' && (
                <>
                    {data.map((request, index) =>{
                        return(
                        <tr key={index}>
                            <td> {request.id}</td>
                            <td> {request.warehouseID}</td>
                            <td> {request.productID}</td>
                            <td> {request.quantity}</td>
                            <td> {request.status}</td>
                        </tr>
                        )
                    })}
                </>
                )}  
                </tbody>
            </table>

           </div>
        </div>
    );
};

export default HistoryUser;