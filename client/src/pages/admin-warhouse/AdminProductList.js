import React from "react";
import '../style/AdminProductList.css';
import { Data } from "./Data";
import AdminProductCard from "./AdminProductCard";
import AdminHistory from "./AdminHistory";
import AdminAddButton from "./AdminAddButton";
import AdminHistoryButton from "./AdminHistoryButton";

import { useParams } from "react-router-dom";
import { getAuthUser } from "../../helper/Storage";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminProductList = () =>{

    const {warehouseID} = useParams();
    const user = getAuthUser();

    const [data, setData]= useState([])
    useEffect(()=>{
        axios.get('/products/warehouseProducts/'+warehouseID,{
            headers:{
                'token': user.token
            } 
        })
        .then(res => setData(res.data))
        .catch(err => console.log(err));

},[])


    const items = data;

    const displayBooks =()=>{
        if(items.length === 0){
            return <p>there are no items to display </p>
        }else{
            return items.map((item) => {
                return(
                
                 <AdminProductCard
                key={item.id}
                name={item.name}
                desc={item.description}
                img={item.image}
                quantity={item.stock}
                id={item.id}
                />
                
                )
    })
    }
}

return(
    <>
    <AdminHistoryButton/>
    <AdminAddButton/>
    <div className="stephen-king-admin-product-list">{displayBooks()}</div>
    <AdminHistory/>
   </>
)
}

export default AdminProductList