import React from "react";
import { speakers } from '../constants/speaker';
import Speaker from "../assets/speaker.svg";
import Heading from './Heading'

const Speakers = () => {
    return(
        <div id="speaker-section">
            <Heading
                heading={'Speakers'}
                content={'<p>TED is shaped by the world’s most inspired thinkers coming together to spread and seed ideas that matter – those whose role is to nurture, plant seeds, remove a few weeds, and marvel at life and creativity. The TED garden is still young. And the strengths of curiosity, knowledge sharing, and global connectedness are still the unbridled, powerful forces in the new TEDx world.</p>'}
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