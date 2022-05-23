import React from "react";
import { speakers } from '../constants/speaker';
import Speaker from "../assets/speaker.svg";
import Heading from './Heading'

const Speakers = () => {
    return(
        <div >
            <Heading
                heading={'Speakers'}
                content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius velautem aperiam sapiente amet aliquam iste modi dolor fugaducimusculpa perspiciatis doloremque enim nihil, quo quos quasi atqueeligendi maiores iusto molestiae animi alias ratione. Rerumrepudiandae aspernatur numquam.'}
            />
            <div className="speaker-card">
                {speakers.map((speaker) => (
                    <img src={Speaker} alt="" />
                ))}
            </div>
        </div>
    )
}

export default Speakers;