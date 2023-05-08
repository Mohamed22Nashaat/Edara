
import { useNavigate } from 'react-router-dom';
import { getAuthUser } from '../../helper/Storage';
import '../style/AdminProductList.css';
import React from 'react';


const AdminHistoryButton = () =>{
    const user = getAuthUser();
    const navigate = useNavigate();
  
 
    return(
            
             <div className="stephen-history-button">
                <br/>
                <a href='#stephen-history' className='stephen-history-buttonn'>History</a>
             </div>
             
        
    );
};

export default AdminHistoryButton;