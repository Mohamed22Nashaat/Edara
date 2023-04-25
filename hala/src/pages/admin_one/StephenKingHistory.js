import React from 'react';
import './style/StephenKingHistory.css';


const StephenKingHistory = () =>{
    return(
        <div className='stephen-king-history'>
           <h2 id='stephen-history'>History</h2>
           <div className='stephen-king-history-table'>
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

export default StephenKingHistory;