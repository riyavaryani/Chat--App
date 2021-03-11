import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

const Header = (props) => {
return (
    <header className="header">
        <div style={{display: 'flex'}}>
            <div className="logo">Chat App</div>
            <ul className="leftMenu">
                <li><NavLink to={'/login'}>Login</NavLink></li>
                <li><NavLink to={'/signup'}>SignUp</NavLink></li>
            </ul>
        </div>
        <div style={{margin: '20px 0', color: '#fff', fontWeight: 'bold'}}>
            Hi Riya
        </div>
        <ul className="menu">
            <li>
                <Link to={'#'} onClick={props.logout}>Logout</Link>
            </li>
        </ul>
    </header>
);
}

export default Header;