import React from 'react'
import Heading from './Heading';
import { useFormik } from "formik";
import {contactFormValidators} from '../utils/validators'
import EmailImg from "../assets/email-img.svg"
import GlobImg from "../assets/global-img.svg"
import MessImg from "../assets/message-img.svg"
import PhoneImg from "../assets/phone-img.svg"
import ProfileImg from "../assets/profile-circle.svg";
import Tedx from '../assets/Tedx.svg'
const Contact = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema : contactFormValidators,
    
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
     <>
      <div className="contact-form" id="contact-section">

          <Heading
              heading={'Contact Us'}
              content={'<p>We will be honoured to help you in the best possible way. Feel free to reach out to us.</p>'}
          />
          <div className="contact-form-container">
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
              <label className="input-labels">Message</label>
              <div className="message-input">
                {/* <img src={MessImg} alt="" /> */}
                <textarea placeholder="Message/Query" 
                  name="message"
                  id="message"
                  onChange={formik.handleChange}
                  defaultValue={formik.values.message}
                  onBlur={formik.handleBlur}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="alert-message">{formik.errors.message}</div>
                ) : null}
              </div>
              <div className="first-section-btn">
                  <button>Submit</button>
              </div>
            </form>
          </div>
          <div className="contact-form-text-part">
            <img src={Tedx}  className="tedx-geu" />
          <div className="text-details-part">
            <a href="mailto:tedxgraphicera@gmail.com" className="nav-a-tag"> <img src={EmailImg} alt="" /> tedxgrahicera@gmail.com</a>
            {/* <p> <img src={PhoneImg} alt="" /> 123456789</p> */}
            <p> <img src={GlobImg} alt="" /> Dehradun ,India</p>
          </div>
        </div>
      </div>
      </div>
     </>
  )
}

export default Contact