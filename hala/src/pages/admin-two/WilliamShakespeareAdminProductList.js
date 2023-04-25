import React from "react";
import './style/WilliamShakespeareAdminProductList.css';
// import { Dataa } from "../second_warehouse/second_data/SecondBook";
import WilliamShakespeareAdminProductCard from "./william_shakespeare_components/WilliamShakespeareAdminProductCard";
import WilliamShakespeareAddButton from "./WilliamShakespeareAddButton";
import WilliamShakespeareHistory  from "./WilliamShakespeareHistory";
import { Dataa } from "./william_shakespeare_data/WilliamShakespeareBook";
import WilliamHistoryButton from "./WilliamHistoryButton";

const WilliamShakespeareAdminProductList = () =>{


    const items = Dataa;


    function displayBooks() {
        if (items.length === 0) {
            return <p>there are no items to display </p>;
        } else {
            return items.map((item) => {
                return (
                    <WilliamShakespeareAdminProductCard
                        key={item.id}
                        name={item.name}
                        desc={item.description}
                        img={item.image}
                        quantity={item.quantity} />
                );
            });
        }
    }

return(
    <>
    <WilliamHistoryButton/>
    <WilliamShakespeareAddButton/>
    <div className="william-skakespeare-admin-product-list">{displayBooks()}</div>
   < WilliamShakespeareHistory/>
   </>
)
}

export default WilliamShakespeareAdminProductList