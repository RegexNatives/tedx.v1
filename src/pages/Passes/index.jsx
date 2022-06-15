import React, { useState } from "react";
import { useFormik } from "formik";
import Heading from "../../components/Heading";
import logo from "../../assets/Tedx-logo.svg";
import Navbar from "../../components/Navbar";
import * as yup from "yup";
import TicketDemo from "../../components/TicketDemo";

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
  const [open, setOpen] = useState(false)
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
  return (
    <>
      <div className="cont">
        <Navbar />
        <div style={{ marginTop: "5rem", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div className="left">
            <Heading
              heading={'Get Passes Now!'}
              content={'<p>We will be honoured to help you in the best possible way. Feel free to reach out to us.</p>'}
            />
            <div className="section">
              <div className="head">
                For Graphic Era Students
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, accusamus repellat nulla velit ex libero quibusdam culpa ullam expedita vitae!</p>
              <a href="https://paytm.me/pl6-J3l" target="_blank" rel="noopener noreferrer">
                <button>
                  For Graphic Students
                </button>
              </a>
            </div>
            <div className="section">
              <div className="head">
                For Graphic Era Students
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, accusamus repellat nulla velit ex libero quibusdam culpa ullam expedita vitae!</p>
              <a href="https://paytm.me/pl6-J3l" target="_blank" rel="noopener noreferrer">
                <button>
                  For Graphic Students
                </button>
              </a>
            </div>
          </div>
          <div className="right">
            <TicketDemo />
          </div>
        </div>

      </div>
    </>
  )
}

export default Passes;