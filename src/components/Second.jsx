import React from 'react'
import tedXGeu from "../assets/tedxgeu.svg";
import Heading from './Heading';

const Second = () => {
    return (

        <div className="home-page-wrapper">
            <div className="home-page-second">
                <div className="sec-di">
                    <Heading
                        heading={'What is TED?'}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius velautem aperiam sapiente amet aliquam iste modi dolor fugaducimusculpa perspiciatis doloremque enim nihil, quo quos quasi atqueeligendi maiores iusto molestiae animi alias ratione. Rerumrepudiandae aspernatur numquam.'}
                    />
                    <Heading
                        heading={'About Graphic Era'}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius velautem aperiam sapiente amet aliquam iste modi dolor fugaducimusculpa perspiciatis doloremque enim nihil, quo quos quasi atqueeligendi maiores iusto molestiae animi alias ratione. Rerumrepudiandae aspernatur numquam.'}
                    />
                </div>
                <div className="home-second-img">
                    <img src={tedXGeu} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Second