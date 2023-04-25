import React from "react";
import './style/CharlesDickensAdminProductList.css'
import { Dataaa } from "./charles-dickens-data/CharlesDickensBook";
import CharlesDickensAddButton from "./CharlesDickensAddButton";
import CharlesDickensHistory from "./CharlesDickensHistory";
import CharlesDickensAdminProductCard from "./charles_dickens_components/CharlesDeckinsAdminProductCard";
import CharlesHistoryButton from "./CharlesHistoryButton";


const CharlesDickensAdminProductList = () =>{


    const items = Dataaa;


    const displayBooks =()=>{
        if(items.length === 0){
            return <p>there are no items to display </p>
        }else{
            return items.map((item) => {
                return(
                 <CharlesDickensAdminProductCard
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
    <CharlesHistoryButton/>
    <CharlesDickensAddButton/>
    <div className="charles-dickens-admin-product-list">{displayBooks()}</div>
    <CharlesDickensHistory/>
   </>
)
}

export default CharlesDickensAdminProductList