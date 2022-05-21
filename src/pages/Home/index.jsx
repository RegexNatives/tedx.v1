import React,{useEffect,useRef} from "react";
import Navbar from '../../components/navbar'
import Insta from "../../assets/insta.svg";
import XImg from "../../assets/X.svg";
import logo from "../../assets/logo.svg";
import tedXGeu from "../../assets/tedxgeu.svg";
import About from "../../assets/aboutimg.svg";
import Speaker from "../../assets/speaker.svg";
import { Parallax , ParallaxProvider} from "react-scroll-parallax";
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {speakers} from '../../constants/speaker'


gsap.registerPlugin(ScrollTrigger)

function Home() {
    const ref4 = useRef(null);
    useEffect(() => {
      const element = ref4.current;
      let secttion = gsap.timeline({
        scrollTrigger: {
          trigger: ".home-page-wrapper",
          start: "center center",
          end: "bottom",
          scrub: true,
          pin: true,
          // duration:14000
        },
      });
      secttion
        .from(".home-second-img", { opacity: 0, scale: 0.1  })
        .to(".home-second-img", { opacity: 1, scale: 1.1 })
        // .from(".home-second-img", { x: 0 })
        // .to(".home-second-img", { x: -350, duration: 3, delay: 2 })
        // .from(".right-text-block", { opacity: 0, y: 30, duration: 5 })
        // .to(".right-text-block", { opacity: 1, y: -60, duration: 5 })
        // .to(".right-text-block", { opacity: 0, duration: 3 })
        // .to(".video-anim", { x: +300, delay: 2, duration: 5 })
        // .from(".right-text-block2", { opacity: 0, y: 30, duration: 3 })
        // .to(".right-text-block2", { opacity: 1, y: -60, duration: 3 })
        // .to(".right-text-block2", { opacity: 0, duration: 3 })
        // .to(".video-anim", { x: -40, delay: 1, duration: 3 });
  
       
    }, []);

  return (
    <ParallaxProvider>
    <Navbar/>
    <div className="home-page-first">
        <div className="home-first-img">
          <img src={XImg} alt="" />
        </div>
        <div className="home-first-text">
          <h1>TED <span>X</span><br /> Graphic Era University</h1>
          <button>Book</button>
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
        <div className="home-page-wrapper">
      <div className="home-page-second">

        
        <div className="home-second-text">
          <h1>TED <span>X</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vel autem aperiam sapiente amet aliquam iste modi dolor fuga ducimus culpa perspiciatis doloremque enim nihil, quo quos quasi atque eligendi maiores iusto molestiae animi alias ratione. Rerum repudiandae aspernatur numquam.</p>
          <button>Book</button>
        </div>
        <div className="home-second-img">
          <img src={tedXGeu} alt="" />
        </div>
        </div>
      </div>
      <div className="home-about-section">
        <div className="about-section-text">
          <h1>About this event</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quis nisi mollitia nesciunt consequatur porro fuga alias debitis repudiandae, iste at obcaecati incidunt minima laborum laboriosam cumque, in totam, nemo quidem harum iusto repellendus. Pariatur quibusdam magnam quaerat qui hic. Facere vero rerum earum nesciunt cum voluptatibus perferendis quaerat velit.</p>
        </div>
        <div className="about-section-img">
          <img src={About} alt="" />
        </div>
        

      </div>
      <div className="speakers">
        <h1>Speakers</h1>
        <div className="speaker-card">
          {speakers.map((speaker) => (
            <img src={Speaker} alt="" />
          ))}
        </div>
      </div>
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
          <p>This independent TEDx event is operated under license from TED. Copyright Stichting TEDxGraphicEra, 2021. All Rights Reserved. </p>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default Home;
