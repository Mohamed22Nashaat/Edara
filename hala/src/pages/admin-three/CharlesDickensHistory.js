import React from 'react';
import './style/CharlesDickensHistory.css';


const CharlesDickensHistory = () =>{
    return(
        <div className='charles-history'>
           <h2 id='charles-history'>History</h2>
           <div className='charles-history-table'>
            <table>
                <thead>
                    <tr >
                        
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

export default CharlesDickensHistory;