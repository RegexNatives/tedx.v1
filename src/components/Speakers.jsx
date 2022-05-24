import React from "react";
import { speakers } from '../constants/speaker';
import Speaker from "../assets/speaker.svg";
import Heading from './Heading'

const Speakers = () => {
    return(
        <div id="speaker-section">
            <Heading
                heading={'Speakers'}
                content={'<p>TEDxGraphic Era will be witnessing speakers from a wide range of domains to inculcate life experiences and ideas with the audience with different goals of their lives.</p>'}
            />
            <div className="speaker-card-container">
                <div className="speaker-card">
                    {/* {speakers.map((speaker) => (
                        <div className="speaker-card-content">
                            <img src={Speaker} alt="Speaker Image" />
                            <h3>{speaker.name}</h3>
                            <p>{speaker.designation}</p>
                        </div>
                    ))} */}
                    <div className="coming-soon ">
                        <h3>{'Revealing Soon...'}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Speakers;