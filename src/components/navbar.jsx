import React from 'react';
import logo from "../assets/logo.svg";

function Navbar() {
    return (
        <div className="cont">
            <div className="navabr">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav-links">
                    <ul className='nav-links-list'>
                        <li>About</li>
                        <li>Speakers</li>
                        <li>Team</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar