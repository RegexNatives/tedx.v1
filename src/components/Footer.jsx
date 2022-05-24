import React from "react";
import Insta from '../assets/insta.svg'
import Linkedin from '../assets/LinkedIn.svg';
import Twitter from '../assets/Twitter.svg';
import logo from '../assets/tedx-white.svg';

const Footer = () => {
    return(
      <div className="footer">
        <div className="footer-container">

        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="" />
            <div className="footer-links">
              <ul>
                <a href="#about-section" className="nav-a-tag"><li>About</li> </a>
                <a href="#speaker-section" className="nav-a-tag"><li>Speakers</li> </a>
                {/* <a href="#" className="nav-a-tag"><li>Team</li> </a> */}
                <a href="#contact-section" className="nav-a-tag"><li>Contact</li> </a>
              </ul>
            </div>
          </div>
          {/* <div className="copyright">
           <h1> Developed and designed by &lt;Dhairya Marwah/&gt;</h1>
          </div> */}
          <div className="footer-get">
            <h1>Get in touch</h1>
            <a href="mailto:tedxgraphicera@gmail.com" className="nav-a-tag">  tedxgrahicera@gmail.com</a>
            <h1>Get Updated</h1>
            <div className="social-links">
              <a href="https://instagram.com/tedxgraphicerauniversity?igshid=YmMyMTA2M2Y=">
                <img src={Insta} alt="" />
              </a>
              <a href="https://twitter.com/TEDxGraphicEra">
                <img src={Twitter} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/tedxgraphicerauniversityofficial">
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
