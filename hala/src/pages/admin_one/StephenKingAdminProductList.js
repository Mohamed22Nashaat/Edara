import React from "react";
import './style/StephenKingAdminProductList.css'
import { Data } from "./stephen_king_data/StephenKingBook";
import StephenKingAdminHistory from "./StephenKingHistory";
import StephenKingAddButton from "./StephenKingAddButton";
import StephenKingAdminProductCard from "./stephen_king_components/StephenKingAdminProductCard";
import StephenHistoryButton from "./StephenHistoryButton";

const StephenKingAdminProductList = () =>{


    const items = Data;


    const displayBooks =()=>{
        if(items.length === 0){
            return <p>there are no items to display </p>
        }else{
            return items.map((item) => {
                return(
                 <StephenKingAdminProductCard
                key={item.id}
                name={item.name}
                desc={item.description}
                img={item.image}
                quantity={item.quantity}
                />
                )
    })
    }
}

return(
    <>
    <StephenHistoryButton/>
    <StephenKingAddButton/>
    <div className="stephen-king-admin-product-list">{displayBooks()}</div>
    <StephenKingAdminHistory/>
   </>
)
}

export default StephenKingAdminProductList