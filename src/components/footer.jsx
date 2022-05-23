import React from "react";

const Footer = () => {
    return(
        <div className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="" />
            <h1>HORIZON</h1>
            <div className="footer-links">
              <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
           <h1> Developed and designed by &lt;Dhairya Marwah/&gt;</h1>
          </div>
          <div className="footer-get">
            <h1>Get in touch</h1>
            <p>tedxgraphicera@gmail.com</p>
            <h1>Get Updated</h1>
            <div className="social-links">
              <a href="">
                <img src={Insta} alt="" />
              </a>
              <a href="">
                <img src={Insta} alt="" />
              </a>
              <a href="">
                <img src={Insta} alt="" />
              </a>
              <a href="">
                <img src={Insta} alt="" />
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
    )
}

export default Footer;