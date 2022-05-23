import React from 'react';
import logo from "../assets/logo.svg";

function Navbar(){
    return(
        <div className="navabr">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav-links">
                <ul className='nav-links-list'>
                    <li>Home</li>
                    <li>Speakers</li>
                    <li>Team</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar