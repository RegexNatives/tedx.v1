import React from "react";
import {team} from '../../constants/team'
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Speaker from "../../assets/speaker.svg";

const Team = () =>{
    return(
        <>
            <div className="cont">
                <Navbar />
                <div className="team-heading">
                    <Heading
                        heading={'Team Members '}
                        content={'<p>Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.</p>'}
                    />
                    <div className="speaker-card-container">
                        <div className="speaker-card">
                            {team.map((member) => (
                                <div className="speaker-card-content">
                                    <img src={Speaker} alt="Speaker Image" />
                                    <h3>{member.name}</h3>
                                    <p>{member.designation}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Team;