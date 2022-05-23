import React, { useEffect, useRef } from "react";
import Navbar from "../../components/navbar";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Speakers from "../../components/Speakers";
import Footer from "../../components/footer";
import Second from "../../components/Second";

gsap.registerPlugin(ScrollTrigger);

function Home() {
    return (
        <>
            <div className="cont">
                <Navbar />
                <div className="first-section">
                    <div className="first-secction-text">
                        <h1>TED <span>X</span></h1>
                        <h2>GRAPHIC ERA UNIVERSITY</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis parturient purus pulvinar scelerisque. Fringilla sagittis, nibh euismod rhoncus. Gravida mattis sollicitudin molestie quam tristique orci. Sit sed quam mauris malesuada et vitae.</p>
                        <div className="first-section-btn">
                            <button>Get Pass Today</button>
                            <button>Speakers</button>
                        </div>
                    </div>
                    <div className="first-section-img">
                    
                    </div>
                </div>
                <Speakers />
            </div>
            <Footer />
        </>
    )
}

export default Home