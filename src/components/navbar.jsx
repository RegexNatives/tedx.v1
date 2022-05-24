import React from 'react';
import logo from "../assets/logo.svg";

function Navbar() {
    return (

            <div className="navabr">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav-links">
                    <ul className='nav-links-list'>
                        <a href="#about-section" className="nav-a-tag"><li>About</li> </a>
                        <a href="#speaker-section" className="nav-a-tag"><li>Speakers</li> </a>
                        <a href="#" className="nav-a-tag"><li>Team</li> </a>
                        <a href="#contact-section" className="nav-a-tag"><li>Contact</li> </a>
                    </ul>
                </div>
            </div>
    )
}

export default Navbar