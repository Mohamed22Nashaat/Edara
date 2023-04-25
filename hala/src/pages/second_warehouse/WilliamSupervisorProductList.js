import React from "react";
import './style/WilliamSupervisorProductList.css'
import { Dataa } from "../admin-two/william_shakespeare_data/WilliamShakespeareBook";
import WilliamSupervisorHistory from "./WilliamSupervisorHistory";
import WilliamSupervisorProductCard from "./william_supervisor_components/WilliamSupervisorProductCard";
import WilliamSupervisorHistoryButton from "./WilliamSupervisorHistoryButton";

const WilliamSupervisorProductList = () =>{
    const items = Dataa;


    const displayBooks =()=>{
        if(items.length === 0){
            return <p>there are no items to display </p>
        }else{
            return items.map((item) => {
                return(
                 <WilliamSupervisorProductCard
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
    <WilliamSupervisorHistoryButton/>
    <div className="william-supervisor-product-list">{displayBooks()}</div>
    <WilliamSupervisorHistory/>
    </>
)


}

export default WilliamSupervisorProductList