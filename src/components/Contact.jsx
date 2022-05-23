import React from 'react'
import Heading from './Heading';
import { useFormik } from "formik";
import {contactFormValidators} from '../utils/validators'
import EmailImg from "../assets/email-img.svg"
import GlobImg from "../assets/global-img.svg"
import MessImg from "../assets/message-img.svg"
import PhoneImg from "../assets/phone-img.svg"
import ProfileImg from "../assets/profile-circle.svg"
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
      <div className="contact-form">

          <Heading
              heading={'Contact Me'}
              content={'<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius velautem aperiam sapiente amet aliquam iste modi dolor fugaducimusculpa perspiciatis doloremque enim nihil, quo quos quasi atqueeligendi maiores iusto molestiae animi alias ratione. Rerumrepudiandae aspernatur numquam.</p>'}
          />
          <div className="contact-form-container">
        {/* <div className="contact-form-text-part">
          <h1>
            Let’s Take Your <br /> Meet to new level
          </h1>
          <p>
            Subscribe to our service and be our <br />
            first consumer
          </p>
          <div className="text-details-part">
            <p> <img src={EmailImg} alt="" /> dhairyamarwah01@gmail.com</p>
            <p> <img src={PhoneImg} alt="" /> 123456789</p>
            <p> <img src={GlobImg} alt="" /> Dehradun ,India</p>
          </div>
        </div> */}
        <div className="contact-form-input">
          <form onSubmit={formik.handleSubmit}>
              <div className="name-input">
                <img src={ProfileImg} alt="" />
                <input type="text" placeholder="name"
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
              <div className="email-input">
                <img src={EmailImg} style={{opacity:"0.8"}} alt="" />
                <input type="email" placeholder="email"
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
              <div className="message-input">
                <img src={MessImg} alt="" />
                <textarea placeholder="Message" 
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
                  <button>Contact</button>
              </div>
            </form>
          </div>
          <div className="contact-form-text-part">
          <div className="text-details-part">
            <p> <img src={EmailImg} alt="" /> dhairyamarwah01@gmail.com</p>
            <p> <img src={PhoneImg} alt="" /> 123456789</p>
            <p> <img src={GlobImg} alt="" /> Dehradun ,India</p>
          </div>
        </div>
      </div>
      </div>
     </>
  )
}

export default Contact