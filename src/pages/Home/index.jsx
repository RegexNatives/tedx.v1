import React, { useEffect, useRef } from "react";
import Navbar from "../../components/navbar";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Speakers from "../../components/Speakers";
import Footer from "../../components/footer";
import Contact from "../../components/Contact";
import Second from "../../components/Second";
import About from "../../components/About";
import Heading from "../../components/Heading";
import Video from "../../assets/main.mp4";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const ref4 = useRef(null);
  useEffect(() => {
    const element = ref4.current;
    let secttion = gsap.timeline({
      scrollTrigger: {
        trigger: ".home-page-wrapper",
        start: "center center",
        // end: "center",
        end: "+=" + window.innerHeight * 1.0,
        scrub: true,
        pin: true,
      },
    });
    secttion
      .from(".sec-di ", {
        scale: 1.6,
        opacity: 0.05,
        duration: 0.2,
      })
      .to(".sec-di ", { scale: 1, opacity: 1 })
      .from(".sec-di ", { x: 300 })
      .to(".sec-di ", { x: 0 })
      .from(".home-second-img", { opacity: 0, scale: 0.1 })
      .to(".home-second-img", {
        opacity: 1,
        scale: 1,
        duration: 4.5,
        ease: "power3.inOut",
      });
  }, []);

  const ref = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".dot",
        start: "center center",
        // end: "center",
        end: "+=" + window.innerHeight * 2,
        scrub: true,
        pin: true,
        // duration:99000
      },
    });
    tl.to(".dot", { scale: 20.5, duration: 16, ease: "power3.inOut" })
      // .from(".horizon-text-h1", { opacity: 1,duration:1 })
      .to(".horizon-text-h1", {
        opacity: 0,
        duration: 0.4,
        scrollTrigger: {
          trigger: ".horizon-text",
          start: "center center",
          end: "+=" + window.innerHeight * 1,
          scrub: true,
          pin: true,
        },
      })
      .to(".dot", { scale: 1, duration: 4 })
      // .to(".text", { x: -5500, duration: 4 }, "-=6");
  }, []);

  const ref5 = useRef(null);
  useEffect(() => {
    const element = ref5.current;
    let secttion2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".video-section",
        start: "center center",
        end: "center",
        scrub: true,
        pin: true,
        duration: 8000,
      },
    });
  }, []);
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
                    <div className="red-container"></div>
                    <div className="first-section-img">
                    
                    </div>
                    {/* <div className="first-section-img">
                    </div> */}
                </div>
                <Second />
                <div className="video-animation">
            <div className="block">
              <div className="video-wrap">

             
              <div className="dot">
              <video src={Video} autoPlay loop muted playsInline />
              </div>
              <div className="horixon-text">
                <h1 className="horizon-text-h1">H&nbsp;&nbsp;&nbsp; RIZON</h1>
              </div>
              </div>
            </div>
          </div>
                <div className="home-about-section">
                    <Heading
                        heading={'About this event'}
                        content={'<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius velautem aperiam sapiente amet aliquam iste modi dolor fugaducimusculpa perspiciatis doloremque enim nihil, quo quos quasi atqueeligendi maiores iusto molestiae animi alias ratione. Rerumrepudiandae aspernatur numquam.</p><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius velautem aperiam sapiente amet aliquam iste modi dolor fugaducimusculpa perspiciatis doloremque enim nihil, quo quos quasi atqueeligendi maiores iusto molestiae animi alias ratione. Rerumrepudiandae aspernatur numquam.</p><br><p>Venue : KP Nauityal</p><br><p>Date : 30th May 2022</p>'}
                    />
                    <About />
                </div>
                <Speakers />
                <Contact />
            </div>
            <Footer />
        </>
    )
}

export default Home