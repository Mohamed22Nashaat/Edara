
import'../style/History.css'
import React from 'react';

const History = () =>{
    return(
        <div className='all-history'>
           <h1>History</h1>
           <div className='all-history-table'>
            <table>
                <thead>
                    <tr >
                        <td>Warehouse Name</td>
                        <td>Supervisor Name</td>
                        <td>Type</td>
                        <td>Date</td>
                        <td>Book Title</td>
                        <td>Quantity</td>
                    </tr>
                </thead>

                <tbody>
                
                </tbody>
            </table>

           </div>
        </div>
    );
};

export default History;