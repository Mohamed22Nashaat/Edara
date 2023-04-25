import React from 'react';
import '../style/Header.css';
import { Link } from 'react-router-dom';

const SupervisorHeader = () =>{
    return (
        <header className='main-header'>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
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

export default SupervisorHeader;