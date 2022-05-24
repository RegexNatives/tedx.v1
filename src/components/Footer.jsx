import React from "react";
import logo from '../assets/logo.svg'
import Insta from '../assets/insta.svg'
import Linkedin from '../assets/Linkedin.svg';
import Twitter from '../assets/Twitter.svg';
import Facebook from '../assets/facebook.svg';

const Footer = () => {
    return(
      <div className="footer">
        <div className="footer-container">

        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="" />
            <h1>HORIZON</h1>
            <div className="footer-links">
              <ul>
                <a href="#about-section" className="nav-a-tag"><li>About</li> </a>
                <a href="#speaker-section" className="nav-a-tag"><li>Speakers</li> </a>
                <a href="#" className="nav-a-tag"><li>Team</li> </a>
                <a href="#contact-section" className="nav-a-tag"><li>Contact</li> </a>
              </ul>
            </div>
          </div>
          {/* <div className="copyright">
           <h1> Developed and designed by &lt;Dhairya Marwah/&gt;</h1>
          </div> */}
          <div className="footer-get">
            <h1>Get in touch</h1>
            <p>tedxgraphicera@gmail.com</p>
            <h1>Get Updated</h1>
            <div className="social-links">
              <a href="#">
                <img src={Insta} alt="" />
              </a>
              <a href="#">
                <img src={Twitter} alt="" />
              </a>
              <a href="#">
                <img src={Linkedin} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom-text">
          <p>
            This independent TEDx event is operated under license from TED.
            Copyright Stichting TEDxGraphicEra, 2022. All Rights Reserved under REGEX NATIVES.{" "}
          </p>
          </div>
        </div>
      </div>
    )
}

export default Footer;
