import React,{useEffect, useState} from "react";
import Heading from "../../components/Heading";
import logo from "../../assets/Tedx-logo.svg";
import tick from "../../assets/ticket.svg";
import Navbar from "../../components/Navbar";
import logo2 from "../../assets/logo2.svg";
import {useParams,useNavigate} from 'react-router-dom';
import {getSingleTransaction,downloadPass} from '../../services/Passes';

const GetPasses = () => {

    const navigate = useNavigate();
  const [sent, setSent] = useState(false);
  const [invalid,setInvalid] = useState(false);
  const [passDetails,setPassDetails] = useState({
    name:"Your Name",
    email:"Your Email",
    contact:"Your Contact",
    ticketId:"Your Ticket Id",
  })
  const params = useParams();

  useEffect(()=>{
    //   console.log(passDetails);
        setInvalid(false);
      getSingleTransaction(params._id)
        .then(res=>{
            console.log(res);
            if(res.data){
                let data = res.data;
                setPassDetails(data)
            }
            else{
                setInvalid(true);
            }
        });
  },[params._id])


  

    return(
      <>
        <div className="cont">
        <Navbar />
        <div className="final-text-getpass">
      <div className="contact-form pass-form" >

          <Heading
              heading={invalid?'Not Booked Yet?':'Your Pass Details'}
              content={'<p></p>'}
          />
          <div className="ticket final-ticket">
            <div className="ticket-text">
                <img src={tick} alt="" />
                <h1>{passDetails?.name}</h1>
                <p>@{passDetails?.email?.split('@')[0]}</p>
                <h2>#{passDetails?.transactionId}</h2>
                <div className="venue-ticket">
                    <p>May 20, 2022 </p>
                    <p><span>KP Nautiyal Auditorium </span> <br /> Graphic Era Hill University <br /> Dehradun, Uttarakhand</p>
                </div>
                <div className="logo-ticket">
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
          {/* <div className="contact-form-container pass-wrapper">
              {invalid?(
                  <div className="entry-card" id="entry-pass-card">
                    <div className="entry-card-content">
                        <h1>Get Your Pass Now!</h1>
                        <p className="here-text" onClick={()=>navigate('/book-passes')}>Here</p>
                        <img src={logo} alt="" />
                        <p className="Date">May,30 | KP Nautiyal</p>
                        <img src={logo2} alt="" />
                    </div>
    
                </div>
              ):(
                <div className="entry-card" id="entry-pass-card">
                    <div className="entry-card-content">
                        <h1>{passDetails?.name}</h1>
                        <p>@{passDetails?.email?.split('@')[0]}</p>
                        <img src={logo} alt="" />
                        <p className="Date">May,30 | KP Nautiyal</p>
                        <p>#{passDetails?.transactionId}</p>
                        <img src={logo2} alt="" />
                    </div>

                </div>
              )}
            <br />
            <div className="first-section-btn">
                <button type="button" onClick={()=>downloadPass(passDetails?.name)} disabled={sent}>{sent?'Done ✅':'Download'}</button>
            </div>
         
        </div> */}
      </div>
      </div>
      
     </div>
     </>

    

    )
}

export default GetPasses;