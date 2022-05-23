import React, { useEffect, useRef } from "react";
import Navbar from "../../components/navbar";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Speakers from "../../components/Speakers";
import Footer from "../../components/footer";

gsap.registerPlugin(ScrollTrigger);

function Home() {
    return(
        <>
            <div className="cont">
                <Navbar />
                <Speakers />
            </div>
            <Footer />
        </>
    )
}

export default Home