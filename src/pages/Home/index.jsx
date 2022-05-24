import React, { useEffect, useRef } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../../components/Navbar";
import Speakers from "../../components/Speakers";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import Second from "../../components/Second";
import About from "../../components/About";
import Heading from "../../components/Heading";
import Video from "../../assets/main.mp4";
import { motion } from "framer-motion";
import XX from "../../assets/xx.svg";
import BlackSvg from "../../assets/black.svg";
import MotionDiv from "../../components/Motion-div";

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
        end: "+=" + window.innerHeight * 1,
        // end: "+=" + window.innerHeight * 1,
        scrub: true,
        pin: true,
      },
    });
    {
      window.innerWidth < 750
        ? secttion
            .from(".home-second-img", { opacity: 0, scale: 0.1 })
            .to(".home-second-img", {
              opacity: 1,
              scale: 1,
              duration: 2.5,
              ease: "power3.inOut",
            })
        : // .from(".sec-di ", {
          //   scale: 1.6,
          //   opacity: 0.0,
          //   duration: 0.2,
          // })
          // .to(".sec-di ", { scale: 1, opacity: 1 })
          // .from(".sec-di ", { x: '90vw' })
          // .to(".sec-di ", { x: 0 })

          secttion
            // .from(".sec-di ", {
            //   scale: 1.7,
            //   opacity: 0.05,
            //   duration: 1,
            // })
            // .to(".sec-di ", { scale: 1, opacity: 1 })
            // .to(".home-page-wrapper", {y:-0,duration:2},`-=1`)
            // .to(".sec-di ", { scale: 1, opacity: 1 })
            // .from(".sec-di ", { x: 300 })
            // .to(".sec-di ", { x: 0 })

            .from(".home-second-img", { opacity: 0, scale: 0.1 })
            .to(".home-second-img", {
              opacity: 1,
              scale: 1,
              duration: 4.5,
              ease: "power3.inOut",
            });
    }
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
      .to(".dot", { scale: 1, duration: 4 });
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
        <div
          // initial={{ x: -250 }}
          // animate={{ x: 0 }}
          // transition={{ delay: 0.2}}
          className="first-section"
        >
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="first-secction-text"
          >
            <h1>
              TED <span>X</span>
            </h1>
            <h2>GRAPHIC ERA UNIVERSITY</h2>
            <p>
              It is always said that dreams can never be achieved in a
              comfortable way of living. To achieve your horizons, one needs to
              have difficulties as a cup of tea. On that note, Graphic Era
              Deemed To Be University presents TedxGraphicEra. Upholding the
              roots of Tedx, we aim to provide a direction to the youth to excel
              in their domains.
            </p>
            <div className="first-section-btn">
              <a href="#about-section">Learn More</a>
              <button>Passes Coming Soon!</button>
            </div>
          </motion.div>
          {/* <div className="left-border"></div> */}
          <div className="right-border"></div>
          <MotionDiv />
          <div className="red-container">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              src={BlackSvg}
              alt=""
            />
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              2022
            </motion.h2>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              src={XX}
              alt=""
            />
          </div>
          <div className="ater-phone-link">
          </div>

          <div className="first-section-img"></div>
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
        <div className="video-base"></div>
        <div className="home-about-section" id="about-section">
          <Heading
            heading={"About this event"}
            content={
              "<p>TEDxGraphic Era will be witnessing speakers from a wide plethora. The goal is to bring experts from different domains under one roof to collaborate and inculcate their knowledge and experiences for the development of the society.  </p><br><p>HORIZON is the distance between a living human being and the line where the sky and the earth meet is very wide. It can only be measured with our eyes, mind and soul. Our vision is to bring these ends a little closure with the help of our speaker’s talk, his/ her journey, experience, and useful insights.</p><br><p>Venue : KP Nauityal Hall</p><br><p>Date : 30th May 2022</p>"
            }
          />
          <About />
        </div>
        <Speakers />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Home;
