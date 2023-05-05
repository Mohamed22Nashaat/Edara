import { Data } from "../admin-warhouse/Data";
import UserProductCard from "./UserProductCard";
import UserHistoryButton from "./UserHistoryButton";
import UserHistory from "./UserHistory";
import './style/UserProductList.css';


const UserProductList = () =>{

    const items = Data;


    const displayBooks =()=>{
        if(items.length === 0){
            return <p>there are no items to display </p>
        }else{
            return items.map((item) => {
                return(
                 

                 <UserProductCard
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
    
    <UserHistoryButton/>
    <div className="stephen-supervisor-product-list">{displayBooks()}</div>
    <UserHistory/>
    </>
)

}

export default UserProductList