import React from "react";
import { speakers } from '../constants/speaker';
import Speaker from "../assets/speaker.svg";
import Heading from './Heading'

const Speakers = () => {
    return(
        <div id="speaker-section">
            <Heading
                heading={'Speakers'}
                content={'<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius velautem aperiam sapiente amet aliquam iste modi dolor fugaducimusculpa perspiciatis doloremque enim nihil, quo quos quasi atqueeligendi maiores iusto molestiae animi alias ratione. Rerumrepudiandae aspernatur numquam.</p>'}
            />
            <div className="speaker-card-container">
                <div className="speaker-card">
                    {speakers.map((speaker) => (
                        <div className="speaker-card-content">
                            <img src={Speaker} alt="Speaker Image" />
                            <h3>{speaker.name}</h3>
                            <p>{speaker.designation}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Speakers;