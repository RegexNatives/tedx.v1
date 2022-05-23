import React, { useEffect, useRef } from "react";
import Navbar from "../../components/navbar";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { speakers } from '../../constants/speaker'
import Footer from "../../components/footer";

gsap.registerPlugin(ScrollTrigger);

function Home() {
    return(
        <>
            <Navbar />
            <Footer />
        </>
    )
}

export default Home