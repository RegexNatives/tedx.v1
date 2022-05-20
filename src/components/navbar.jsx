import React from 'react';
import logo from "../assets/logo.svg";

function Navbar(){
    return(
        <div className="navabr">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav-links">
            <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar