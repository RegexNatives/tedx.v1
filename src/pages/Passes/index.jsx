import React,{useState} from "react";
import { useFormik } from "formik";
import {contactFormValidators} from '../../utils/validators';
import Heading from "../../components/Heading";
import logo from "../../assets/Tedx-logo.svg";
import Navbar from "../../components/Navbar";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import QR from '../../assets/qr.jpg'

import logo2 from "../../assets/logo2.svg";

const Passes = () => {

  const [sent, setSent] = useState(false);
  const [open,setOpen] = useState(false)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          contact: "",
          transactionId:"",
        },
        // validationSchema : contactFormValidators,
        
        onSubmit: (values) => {
          // alert(JSON.stringify(values, null, 2));
        },
      });
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
          <div className="entry-card">
        <div className="entry-card-content">
                  <h1>Dhairya Marwah</h1>
                  <p>2922210</p>
                  <img src={logo} alt="" />
                  <p className="Date">May,30 | KP Nautiyal</p>
                  <p>#CEE244</p>
                  <img src={logo2} alt="" />
                  </div>

      </div>
        <div className="contact-form-input">
          <form onSubmit={formik.handleSubmit}>
              <label className="input-labels">Name</label>
              <div className="name-input">
                {/* <img src={ProfileImg} alt="" /> */}
                <input type="text" placeholder="John Doe"
                  name="name"
                  id="name"
                  onChange={formik.handleChange}
                  defaultValue={formik.values.name}
                  onBlur={formik.handleBlur}
                />
                 {formik.touched.name && formik.errors.name ? (
                  <div className="alert-message">{formik.errors.name}</div>
                ) : null}
              </div>
              <label className="input-labels">Email</label>
              <div className="email-input">
                {/* <img src={EmailImg} style={{opacity:"0.8"}} alt="" /> */}
                <input type="email" placeholder="johndoe@gmail.com"
                    name="email"
                    id="email"
                   onChange={formik.handleChange}
                   defaultValue={formik.values.email}
                   onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="alert-message">{formik.errors.email}</div>
                ) : null}
              </div>
              <label className="input-labels">Contact</label>
              <div className="message-input">
                {/* <img src={MessImg} alt="" /> */}
                <input type="email" placeholder="+91-1234567890"
                    name="contact"
                    id="contact"
                   onChange={formik.handleChange}
                   defaultValue={formik.values.contact}
                   onBlur={formik.handleBlur}
                />
                {formik.touched.contact && formik.errors.contact ? (
                  <div className="alert-message">{formik.errors.contact}</div>
                ) : null}
              </div>
              <div className="first-section-btn">
                  <button type="button" onClick={()=>setOpen(true)} disabled={sent}>{sent?'Sent ✅':'Proceed'}</button>
              </div>
              <Modal
                  open={open}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="payment-container">
                      <div className="red-marker"></div>
                      <h1>{'Payment'}</h1>
                    </div>
                    <p>Scan the QR to pay!</p>
                    <div className="qr-code-container">
                      <img src={QR} className="qr-code" />  
                    </div>
                    <Button variant="outlined" color="error">
                      Error
                    </Button>
                  </Box>
              </Modal>
            </form>
          </div>
         
      </div>
      </div>
      
     </div>
     </>
    )
}

export default Passes;