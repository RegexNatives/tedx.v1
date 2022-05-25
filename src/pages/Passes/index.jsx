import React,{useState} from "react";
import { useFormik } from "formik";
import {passFormValidation} from '../../utils/validators';
import Heading from "../../components/Heading";
import logo from "../../assets/Tedx-logo.svg";
import Navbar from "../../components/Navbar";
import Box from '@mui/material/Box';
import qrcode from '../../assets/qr-code.png';
import Modal from '@mui/material/Modal';
import QR from '../../assets/qr.jpg'
import TextField from '@mui/material/TextField';
import logo2 from "../../assets/logo2.svg";
// import { Formik, Form, Field } from 'formik';
import * as yup from "yup";
import Ticket from "../../components/Ticket.jsx";
import TicketDemo from "../../components/TicketDemo";
//  import { useFormik } from "formik";

 const validationSchema = yup.object({ 
  name: yup.string("Enter name").required(),
  phone: yup.string("Enter phoneNo.").required(),
  email: yup.string().email("Invalid Format").required(),
   
});
const Passes = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        console.log(values);
    },
  });
  const [sent, setSent] = useState(false);
  const [open,setOpen] = useState(false)
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '25%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
    return(
      <>
        <div className="cont">
        <Navbar />
      <div className="contact-form pass-form" id="contact-section">

          <Heading
              heading={'Get Passes Now!'}
              content={'<p>We will be honoured to help you in the best possible way. Feel free to reach out to us.</p>'}
          />
          <div className="contact-form-container">
          {/* <div className="entry-card">
        <div className="entry-card-content">
                  <h1>Your Name</h1>
                  <p>@username</p>
                  <img src={logo} alt="" />
                  <p className="Date">May,30 | KP Nautiyal</p>
                  <p>#CEE244</p>
                  <img src={logo2} alt="" />
                  </div>

      </div> */}
      {/* <Ticket/> */}
      <div className="form-link-btn">
      <div className="first-section-btn">
              <a href="https://paytm.me/pl6-J3l"target="_blank" rel="noopener noreferrer">For Graphic Students</a>
              
              <a href="https://paytm.me/nj-EwY9" target="_blank" rel="noopener noreferrer">For Outsiders</a>
            </div>
      </div>
      <TicketDemo/> 
         
         
      </div>
      {/* <Ticket/> */}
      {/* <TicketDemo/> */}
      </div>
      
     </div>
     </>
    )
}

export default Passes;