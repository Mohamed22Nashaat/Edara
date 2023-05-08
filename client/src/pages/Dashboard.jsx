import React from 'react'
import'../style/Dashboard.css'
import SingleCard from '../components/Reuseable/SingleCard'
import BookChart from '../charts/BookChart'
import BookStatsChart from '../charts/BookStatsChart'
import RecommendBookCard from '../components/Ui/RecommendBookCard'
import recommedBook from '../assets/book.data/recommend-book'
import { Link } from 'react-router-dom'
import { getAuthUser } from "../helper/Storage"
const auth = getAuthUser();
const bookObj = {
  title:'Total Books',
  totalnumber:"750+",
  icon: "ri-dashboard-line"
}
const ship = {
  title:'Daily shipping',
  totalnumber: "1490+",
  icon: "ri-car-washing-line"
}
const sale = {
  title:'Sales Annualy',
  totalnumber: "125+",
  icon: "ri-bank-line"
}
const warehouse = {
  title:'Warehouses',
  totalnumber: "119+",
  icon: "ri-store-3-line"
}

const Dashboard = () => {
  return (
    
    <div className="dashboard">
      <div className="dashboard_wrapper">
        <div className="dashboard_cards">
          <SingleCard item={bookObj}/>
          <SingleCard item={ship}/>
          <SingleCard item={sale}/>
          <SingleCard item={warehouse}/>
          </div>
          <div className="statics">
            <div className="stats">
              <h3 className='stats_title'>Sales Statics</h3>
              <BookChart/>
            </div>
            <div className="stats">
              <h3 className='stats_title'>Book Statistics</h3>
              <BookStatsChart/>
            </div>
           
            {/* {auth && auth.role === "admin" &&( <div className="boton">
            
               <Link to="/NewWarehouse" className='create'>New Warehouse +</Link>
             
            </div>)} */}
          </div>
          {/* <div className="recommend_books-wrapper">
           {
            recommedBook.map((item)=> (<RecommendBookCard item={item} key={item.id}/>))
           }
          </div> */}
      </div>
    </div>
    
  )
}

export default Dashboard;