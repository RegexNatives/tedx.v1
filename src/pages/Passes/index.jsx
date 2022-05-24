import React,{useState} from "react";
import { useFormik } from "formik";
import {contactFormValidators} from '../../utils/validators';
import Heading from "../../components/Heading";
import logo from "../../assets/Tedx-logo.svg";
import logo2 from "../../assets/logo2.svg";
import Navbar from "../../components/Navbar"; 

const GetPasses = () => {

  const [sent, setSent] = useState(false);

    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          transactionId: "",
        },
        validationSchema : contactFormValidators,
        
        onSubmit: (values) => {
          makeQuery(values)
                    .then(res => {
                      console.log(res)
                      if(res.success){
                          setSent(true);
                      }
                      else{
                        setSent(false);
                      }
                      resetForm();
                      console.log(sent)
                    })
                    .catch(err => {
                      setSent(false);
                    })
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
              <label className="input-labels">TransactionId</label>
              <div className="message-input">
                {/* <img src={MessImg} alt="" /> */}
                <input type="email" placeholder="johndoe@gmail.com"
                    name="transactionId"
                    id="transactionId"
                   onChange={formik.handleChange}
                   defaultValue={formik.values.transactionId}
                   onBlur={formik.handleBlur}
                />
                {formik.touched.transactionId && formik.errors.transactionId ? (
                  <div className="alert-message">{formik.errors.transactionId}</div>
                ) : null}
              </div>
              <div className="first-section-btn">
                  <button type="submit" disabled={sent}>{sent?'Sent ✅':'Submit'}</button>
              </div>
            </form>
          </div>
          <div className="contact-form-text-part">
            <img src={logo}  className="tedx-geu" />
          <div className="text-details-part">
          </div>
        </div>
      </div>
      </div>
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
     </div>
     </>
    )
}

export default GetPasses;