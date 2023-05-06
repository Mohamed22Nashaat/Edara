import React from "react";
import '../style/AdminProductList.css';
import { Data } from "./Data";
import AdminProductCard from "./AdminProductCard";
import AdminHistory from "./AdminHistory";
import AdminAddButton from "./AdminAddButton";
import AdminHistoryButton from "./AdminHistoryButton";

const AdminProductList = () =>{


    const items = Data;


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
                quantity={item.quantity}
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