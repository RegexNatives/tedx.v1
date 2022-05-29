import React, { useState } from "react";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import TicketDemo from "../../components/TicketDemo";
//  import { useFormik } from "formik";
import Footer from "../../components/Footer";

const Passes = () => {
	
	const [sent, setSent] = useState(false);
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);
	const style = {
		position: "absolute",
		top: "50%",
		left: "25%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};
	return (
		<>
			<div className="cont">
				<Navbar />
				<div
					className="contact-form pass-form"
					style={{ padding: "0rem" }}>
					<Heading
						heading={"Get Passes Now!"}
						content={
							"<p>Limited seats available, hurry up. Book your seat now.</p><p>Feel free to reach out to us for any queries or difficulties</p>"
						}
					/>
					<div
						className="contact-form-container pass-container"
						style={{
							// display: "block",
							// marginLeft: "4%",
						}}>
						{/* <Ticket/> */}
						<div className="booking-info-container">

							<div className="for-graphians">
								<div className="speaker-heading" >
									<h1  className="for-reference-heading ">{'For Graphians '}</h1>
								</div>
								<p className="color-grey t-align">
									Welcome to the show!!
									<br/>
									Hope you're wearing your best clothes.
								</p>
								<br />
								<button
									className="red-button"
										onClick={()=>window.open("https://paytm.me/pl6-J3l","_blank")}
										rel="noopener noreferrer">
										Book Now
									</button>
							</div>
							<div className="for-graphians">
								<div className="speaker-heading ">
									<h1  className="for-reference-heading">{'For Others'}</h1>
								</div>
								<p className="color-grey t-align">
									Welcome to our firepit!!
									<br />
									The more, the merrier :')
								</p>
								<br />
								<button
									className="red-button"
										onClick={()=>window.open("https://paytm.me/nj-EwY9","_blank")}
										rel="noopener noreferrer">
										Book Now
									</button>
							</div>
						</div>
						{/* <div className="form-link-btn">
							<div
								className="first-section-btn pass-btn"
								style={{
									marginBottom: "8rem",
									justifyContent: "flex-start",
								}}>
								<a
									href="https://paytm.me/pl6-J3l"
									target="_blank"
									rel="noopener noreferrer">
									For Graphic Era Students
								</a>

								<a
									href="https://paytm.me/nj-EwY9"
									target="_blank"
									rel="noopener noreferrer">
									For Outsiders
								</a>
							</div>
						</div> */}
						<div
							className="ticket-container"
							// style={{ marginLeft: "4rem" }}
						>
							<TicketDemo />
						</div>
					</div>
					{/* <Ticket/> */}
					{/* <TicketDemo/> */}
				</div>
			</div>
			<div className="pass-footer">
				<Footer />
			</div>
		</>
	);
};

export default Passes;
