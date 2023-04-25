import React from "react";
import  StephenSupervisorProductCard  from "./stephen_king_supervisor_components/StephenSupervisorProductCard";
import './style/StephenSupervisorProductList.css'
import { Data } from "../admin_one/stephen_king_data/StephenKingBook";
import StephenSupervisorHistory from "./StephenSupervisorHistory"
import StephenSupervisorHistoryButton from "./StephenSupervisorHistoryButton";


const StephenSupervisorProductList = () =>{
    const items = Data;


    const displayBooks =()=>{
        if(items.length === 0){
            return <p>there are no items to display </p>
        }else{
            return items.map((item) => {
                return(
                 <StephenSupervisorProductCard
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

return (
    <>
    <StephenSupervisorHistoryButton/>
    <div className="stephen-supervisor-product-list">{displayBooks()}</div>
    <StephenSupervisorHistory/>
    </>
)


}

export default StephenSupervisorProductList