import React from 'react'
import tedXGeu from "../assets/tedxgeu.svg";


const Second = () => {
    return (
        <div>
            <div className="cont">
                <div className="home-page-wrapper">
                    <div className="home-page-second">
                        <div className="home-second-text">
                            <div className="red-b"></div>
                            <h1>
                                What is TED?
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vel
                                autem aperiam sapiente amet aliquam iste modi dolor fuga ducimus
                                culpa perspiciatis doloremque enim nihil, quo quos quasi atque
                                eligendi maiores iusto molestiae animi alias ratione. Rerum
                                repudiandae aspernatur numquam.
                            </p>
                            <button>Book</button>
                        </div>
                        <div className="home-second-img">
                            <img src={tedXGeu} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Second