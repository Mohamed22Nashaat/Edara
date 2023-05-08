import React, { useEffect, useState } from 'react';
import '../style/AdminHistory.css'
import { useNavigate, useParams } from 'react-router-dom';
import { getAuthUser } from '../../helper/Storage';
import axios from 'axios';


const AdminHistory = () =>{

    const [data, setData]= useState([]);
    const {warehouseID} = useParams();
    const user = getAuthUser();
    const navigate = useNavigate();
  
    
    
    useEffect(()=>{
        axios.get('/request/warehouseRequests/'+warehouseID,{
            headers:{
                'token': user.token
            } 
        })
        .then(res => setData(res.data))
        .catch(err => console.log(err));

        },[])
    return(
        <div className='stephen-king-history'>
           <h2 id='stephen-history'>History</h2>
           <div className='stephen-king-history-table'>
            <table>
                <thead>
                    <tr>
                        <td>Product ID</td>
                        <td>quantity</td>
                        <td>Warehouse ID</td>
                        <td>User ID</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                {data.map((request, index) =>{
                    return<tr key={index}>
                        <td> {request.productID}</td>
                        <td> {request.quantity}</td>
                        <td> {request.warehouseID}</td>
                        <td> {request.userID}</td>
                        <td> {request.status}</td>
                    </tr>
                    })}
                </tbody>
            </table>

           </div>
        </div>
    );
};

export default AdminHistory;