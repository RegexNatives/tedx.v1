import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../../components/Navbar";
import Speakers from "../../components/Speakers";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import Second from "../../components/Second";
import About from "../../components/About";
import Heading from "../../components/Heading";
import { motion } from "framer-motion";
import XX from "../../assets/xx.svg";
import BlackSvg from "../../assets/black.svg";
import MotionDiv from "../../components/Motion-div";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Home() {
	const ref4 = useRef(null);
	const navigate = useNavigate();

	if (window.innerWidth <= 768) {
		useEffect(() => {
			const element = ref4.current;
			let secttion = gsap.timeline({
				scrollTrigger: {
					trigger: ".home-page-wrapper",
					start: "center 82%",
					end: "+=" + window.innerHeight * 1,
					scrub: true,
					pin: true,
				},
			});
			secttion
				.from(".home-second-img", { opacity: 0.1, scale: 0.1 })
				.to(".home-second-img", {
					opacity: 1,
					scale: 1,
					duration: 2.5,
					ease: "power3.inOut",
				});
		}, []);
	} else {
		useEffect(() => {
			const element = ref4.current;
			let secttion = gsap.timeline({
				scrollTrigger: {
					trigger: ".home-page-wrapper",
					start: "center center",
					end: "+=" + window.innerHeight * 1,
					scrub: true,
					pin: true,
				},
			});
			secttion
				.from(".home-second-img", { opacity: 0, scale: 0.1 })
				.to(".home-second-img", {
					opacity: 1,
					scale: 1,
					duration: 4.5,
					ease: "power3.inOut",
				});
		}, []);
	}

	// useEffect(() => {
	//   const element = ref4.current;
	//   let secttion = gsap.timeline({
	//     scrollTrigger: {
	//       trigger: ".home-page-wrapper",
	//       start: "center center",
	//       end: "+=" + window.innerHeight * 1,
	//       scrub: true,
	//       pin: true,
	//     },
	//   });
	//   {
	//     window.innerWidth < 750
	//       ? secttion
	//         .from(".home-second-img", { opacity: 0, scale: 0.1 })
	//         .to(".home-second-img", {
	//           opacity: 1,
	//           scale: 1,
	//           duration: 2.5,
	//           ease: "power3.inOut",
	//         })
	//       :
	//       secttion
	//         .from(".home-second-img", { opacity: 0, scale: 0.1 })
	//         .to(".home-second-img", {
	//           opacity: 1,
	//           scale: 1,
	//           duration: 4.5,
	//           ease: "power3.inOut",
	//         });
	//   }
	// }, []);

	const ref = useRef(null);
	useEffect(() => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".dot",
				start: "center center",
				end: "+=" + window.innerHeight * 2,
				scrub: true,
				pin: true,
			},
		});
		tl.to(".dot", { scale: 20.5, duration: 16, ease: "power3.inOut" })
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
	}, []);

	const ref5 = useRef(null);
	useEffect(() => {
		const element = ref5.current;
		let secttion2 = gsap.timeline({
			scrollTrigger: {
				trigger: ".video-section",
				start: "center center",
				end: "+=" + window.innerHeight * 1,
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
					<motion.div
						initial={{ opacity: 0, x: -200 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
						className="first-secction-text">
						<h1>
							TED <span>X</span>
						</h1>
						<h2>GraphicEraUniversity</h2>
						<p>

							"Hours, weeks, and months pass by;<br />
							He starts to think it strange.<br />
							So many steps passed under foot<br />
							Yet the horizon never changed."<br /><br/>
							Graphic Era University is over the moon as we pull together a punchy, wholesome event for you all. With TED, we aim to spark conversation, community, and connection in as many lives as possible.
						</p>
						<div
							className="first-section-btn" id="mobile-flex-row"
							style={{ display: "flex", flexDirection: "row" }}>
						
						</div>
					</motion.div>
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
							transition={{ duration: 1, delay: 0.7 }}>
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
					<div className="ater-phone-link"></div>

					<div className="first-section-img"></div>
				</div>
				<Second />
				<div className="video-animation">
					<div className="block">
						<div className="video-wrap">
							<div className="dot">
								<video
									src={'https://d33nm4ccjcx4s8.cloudfront.net/main.mp4'}
									autoPlay
									loop
									muted
									playsInline
								/>
							</div>
							<div className="horixon-text">
								<h1 className="horizon-text-h1">
									H&nbsp;&nbsp;&nbsp; RIZON
								</h1>
							</div>
						</div>
					</div>
				</div>
				<div className="video-base"></div>
				<div className="home-about-section" id="about-section">
					<Heading
						heading={"About this event"}
						content={
							"<p>Watch any TED (Technology, Entertainment and Design) event and be absolutely assured of having an intellectual adrenaline rush, like the feeling that rips through you after a crucial accomplishment. Except for this time, the exhilaration is triggered by the imagination and not the act. </p><br><p>The philosophy of TED is all about simplified, authentic storytelling, which seems to fit well with its mission of, “ideas worth spreading”. Combine both with a remarkable TEDx speaker and organizer, and you get the deadly 18-minute presentation equivalent of a blockbuster movie.</p><br><p class=venue>Venue : KP Nautiyal Auditorium, Graphic Era Hill University, Dehradun Uttarakhand</p><br /><p class=venue>Date &nbsp; : &nbsp; 11th June 2022</p>"
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
