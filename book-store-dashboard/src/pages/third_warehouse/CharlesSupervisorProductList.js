import React from "react";
import  CharlesSupervisorProductCard  from "./charles_dickens_components/CharlesSupervisorProductCard";
import './style/CharlesSupervisorProductList.css'
import CharlesSupervisorHistory from "./CharlesSupervisorHistory";
import { Dataaa } from "../admin-three/charles-dickens-data/CharlesDickensBook";
import CharlesSupervisorHistoryButton from "./CharlesSupervisorHistoryButton";


const CharlesSupervisorProductList = () =>{
    const items = Dataaa;


    const displayBooks =()=>{
        if(items.length === 0){
            return <p>there are no items to display </p>
        }else{
            return items.map((item) => {
                return(
                 <CharlesSupervisorProductCard
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
    <CharlesSupervisorHistoryButton/>
    <div className="charles-supervisor-product-list">{displayBooks()}</div>
    <CharlesSupervisorHistory/>
    </>
)


}

export default CharlesSupervisorProductList