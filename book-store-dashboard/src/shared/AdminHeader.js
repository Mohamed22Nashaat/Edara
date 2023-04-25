import React from 'react';
import '../style/Header.css';
import { Link } from 'react-router-dom';

const AdminHeader = () =>{
    return (
        <header className='main-header'>
            <div>
                <nav>
                    <ul>
                        {/* <li>
                            <Link to={'/'}>Products</Link>
                        </li> */}

                        <li>
                            <Link to={'/home'}>Home</Link>
                        </li>

                        <li>
                             <Link to={'/register'}>Register</Link>
                        </li>
                        <li>
                            <Link to={'/login'}>Login</Link>
                        </li>
                        <li>
                             <Link to={'/logout'}>logout</Link>
                        </li>
                        
                        

                    </ul>
                </nav>

            </div>
        </header>
            
    )
};

export default AdminHeader;