import React from 'react';
import './style/CharlesSupervisorHistory.css';


const CharlesSupervisorHistory = () =>{
    return(
        <div className='charles-dickens-supervisor-history'>
           <h2 id='charles-supervisor-history'>History</h2>
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

export default CharlesSupervisorHistory;