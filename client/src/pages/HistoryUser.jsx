import axios from 'axios';
import { getAuthUser } from '../helper/Storage';
import'../style/HistoryUser.css'
import React, { useEffect, useState } from 'react';

function  HistoryUser() {
    const user = getAuthUser();

    const [data, setData]= useState([])
    useEffect(()=>{
        axios.get('/request',{
            headers:{
                'token': user.token
            } 
        })
        .then(res => setData(res.data))
        .catch(err => console.log(err));

        },[])
    return(
        <div className='all-history'>
           <h1>History</h1>
           <div className='all-history-table'>
            <table>
                <thead>
                    <tr >
                        <td>Warehouse ID</td>
                        <td>Supervisor ID</td>
                        <td>Type</td>
                        {/* <td>Date</td> */}
                        <td>Product ID</td>
                        <td>Quantity</td>
                    </tr>
                </thead>

                <tbody>
                {data.map((request, index) =>{
                        return(
                            <tr key={index}>
                                <td> {request.warehouseID}</td>
                                <td> {request.userID}</td>
                                <td> {request.status}</td>
                                {/* <td> {request.Phone}</td> */}
                                <td> {request.productID}</td>
                                <td> {request.quantity}</td>
                            </tr>
                        )
                })}
                </tbody>
            </table>

           </div>
        </div>
    );
};

export default HistoryUser;