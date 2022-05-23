import React, { useEffect, useRef } from "react";
import Navbar from "../../components/navbar";
import Insta from "../../assets/insta.svg";
import XImg from "../../assets/X.svg";
import tedXGeu from "../../assets/tedxgeu.svg";
import Video from "../../assets/main.mp4";
import Speaker from "../../assets/speaker.svg";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { speakers } from '../../constants/speaker'
import Footer from '../../components/footer'
import About from '../../components/about'
import '../../App.css'


gsap.registerPlugin(ScrollTrigger);

function Home() {
  const ref4 = useRef(null);
  useEffect(() => {
    const element = ref4.current;
    let secttion = gsap.timeline({
      scrollTrigger: {
        trigger: ".home-page-wrapper",
        start: "center center",
        end: "center",
        scrub: true,
        pin: true,
      },
    });
    secttion
      .from(".home-second-text", {
        scale: 3.8,
        opacity: 0.05,
        duration: 1.5,
        ease: "power3.inOut",
      })
      .to(".home-second-text", { scale: 1, opacity: 1 })
      .from(".home-second-text", { x: 500 })
      .to(".home-second-text", { x: 0 })
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
        end: "+=" + (window.innerHeight * 2),
        scrub: true,
        pin: true,
        // duration:99000
      },
    });
    tl.to(".dot", { scale: 20.5, duration: 12, ease: "power3.inOut" })
      // .from(".horizon-text-h1", { opacity: 1,duration:1 })
      .to(".horizon-text-h1", {
        opacity: 0, duration: 1,
        scrollTrigger: {
          trigger: ".horizon-text-h1",
          start: "center center",
          end: "+=" + (window.innerHeight * 2),
          scrub: true,
          pin: true,
        },
      })
      .to(".dot", { scale: 1, duration: 4, })
      .to(".text", { x: -5500, duration: 4, }, "-=6");
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
    <ParallaxProvider>
      <div className="cont">
        <div className="home-page-wrapper">
          <div className="home-page-second">
            <div className="home-second-text">
              <h1>
                TED <span>X</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vel
                autem aperiam sapiente amet aliquam iste modi dolor fuga ducimus
                culpa perspiciatis doloremque enim nihil, quo quos quasi atque
                eligendi maiores iusto molestiae animi alias ratione. Rerum
                repudiandae aspernatur numquam.
              </p>
              <button>Book</button>
            </div>


            <div className="home-second-img">
              <img src={tedXGeu} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="home-about-section">
        <div className="about-section-text">
          <h1>About this event</h1>
          <p>
            In the spirit of ideas worth spreading, TEDx is a program for local,
            self-organized events that bring people together to share a TED-like
            experience. At a TEDx event, TEDTalks video and live speakers
            combine to spark deep discussion and connection. These local,
            self-organized events are branded with TEDx, where x = an
            independently organized TED event. The TED Conference provides
            general guidance for the TEDx program, but individual TEDx events
            are self-organized.
          </p>
        </div>

        <About />
      </div>

      <div className="video-animation">
        <div class="block">
          <div class="dot">
            <video src={Video} autoPlay loop muted playsInline />
          </div>
          <div className="horixon-text">
            <h1 className="horizon-text-h1">H&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RIZON</h1>
          </div>
          <div class="text-container">
            <p class="text">TED <span>X</span>&nbsp;&nbsp; GRAPHIC ERA</p>
          </div>
        </div>
      </div>
      <div className="video-base"></div>
      <div className="speakers">
        <h1>Speakers</h1>
        <div className="speaker-card">
          {speakers.map((speaker) => (
            <img src={Speaker} alt="" />
          ))}
        </div>
      </div>

      <Footer />

    </ParallaxProvider>
  );
}

export default Home;