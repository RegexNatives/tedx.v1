import React from 'react'
import tedXGeu from "../assets/tedxgeu.svg";
import Heading from './Heading';
import {motion} from 'framer-motion'

const Second = () => {
    return (

        <div className="home-page-wrapper">
            <div className="home-page-second">
                <motion.div 
                  initial={{ opacity:0, x: -250 }}
                  animate={{opacity:1, x: 0 }}
                  transition={{ duration: 0.6,delay:1}}
                className="sec-di">
                    <Heading
                        heading={'What is TED?'}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius velautem aperiam sapiente amet aliquam iste modi dolor fugaducimusculpa perspiciatis doloremque enim nihil, quo quos quasi atqueeligendi maiores iusto molestiae animi alias ratione. Rerumrepudiandae aspernatur numquam.'}
                    />
                    <Heading
                        heading={'About Graphic Era'}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius velautem aperiam sapiente amet aliquam iste modi dolor fugaducimusculpa perspiciatis doloremque enim nihil, quo quos quasi atqueeligendi maiores iusto molestiae animi alias ratione. Rerumrepudiandae aspernatur numquam.'}
                    />
                </motion.div>
                <div className="home-second-img">
                    <img src={tedXGeu} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Second