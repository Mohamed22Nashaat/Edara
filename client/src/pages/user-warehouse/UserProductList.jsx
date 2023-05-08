import { Data } from "../admin-warhouse/Data";
import UserProductCard from "./UserProductCard";
import UserHistoryButton from "./UserHistoryButton";
import UserHistory from "./UserHistory";
import './style/UserProductList.css';
import { useParams } from "react-router-dom";
import { getAuthUser } from "../../helper/Storage";
import { useEffect, useState } from "react";
import axios from "axios";


const UserProductList = () =>{

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
                 

                 <UserProductCard
                key={item.id}
                productID={item.id}
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
    
    {/* <UserHistoryButton/> */}
    <div className="stephen-supervisor-product-list">{displayBooks()}</div>
    {/* <UserHistory/> */}
    </>
)

}

export default UserProductList