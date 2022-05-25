import React, { useState } from "react";
import { useFormik } from "formik";
import { passFormValidation } from "../../utils/validators";
import Heading from "../../components/Heading";
import logo from "../../assets/Tedx-logo.svg";
import Navbar from "../../components/Navbar";
import Box from "@mui/material/Box";
import qrcode from "../../assets/qr-code.png";
import Modal from "@mui/material/Modal";
import QR from "../../assets/qr.jpg";
import TextField from "@mui/material/TextField";
import logo2 from "../../assets/logo2.svg";
// import { Formik, Form, Field } from 'formik';
import * as yup from "yup";
import Ticket from "../../components/Ticket.jsx";
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
						<div className="form-link-btn">
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
							{/* <p>Limited seats available, hurry up. Book your seat now!</p> */}
						</div>
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
