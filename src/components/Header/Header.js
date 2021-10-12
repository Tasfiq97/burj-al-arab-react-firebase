import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/header.png';
import logo from '../../images/icons/logo.png';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {user,logOutGoogle}=useAuth();
    
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                   { 
                   user.email ?
                   <li> <span style={{color:"yellow"}}> {user.displayName} </span>
                           <button onClick={logOutGoogle}>Logout</button>

                    </li>
                    :
                    <li>
                        
                        <Link to="/login">Login</Link>
                    </li>}
                    <li>
                        <Link className="btn-book" to="/book">Book</Link>
                    </li>
                   
                </ul>
            </nav>
            <div className="title-container">
                <h1>Burj Al Arab</h1>
                <h2>A global icon of Arabian luxury</h2>
            </div>
        </div>
    );
};

export default Header;