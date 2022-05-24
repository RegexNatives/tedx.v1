import React from 'react';
import logo from "../assets/logo.svg";
import {motion} from 'framer-motion'
function Navbar() {
    return (

            <div className="navabr">
                <motion.div 
                 
                 initial={{ opacity:0,y:-30 }}
                 animate={{opacity:1, y: 0 }}
                 transition={{ duration: 1}} 
                className="logo">
                    <img src={logo} alt="logo" />
                </motion.div>
                <div className="nav-links">
                    <motion.ul 
                    initial={{ opacity:0,y:-30 }}
                    animate={{opacity:1, y: 0 }}
                    transition={{ duration: 1}} 
                    className='nav-links-list'>
                        <li>About</li>
                        <li>Speakers</li>
                        <li>Team</li>
                        <li>Contact</li>
                    </motion.ul>
                </div>
            </div>
    )
}

export default Navbar