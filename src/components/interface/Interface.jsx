import React, { useState } from 'react'
import './Interface.css'
import GradientButton from '../GradientButton/GradientButton'

export default function () {
    const [selected, setselected] = useState("/public/Photo3.png")
    const array = [ 
        "/public/Photo1.png",
        "/public/Photo2.png", 
        "/public/Photo3.png", 
        "/public/Photo4.png", 
        "/public/Photo1.png",
    ]
    return (
        <div className='interface'>
            <div className="container">
                <div className="first grayBlock man">

                    <div className="block__inner">

                        <div className="logo">
                            <svg width="41" height="33" viewBox="0 0 41 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.6885 19.9414C35.7245 17.0666 30.8972 17.1435 27.9288 20.1105L25.7447 22.2936L23.6091 20.1589L27.6673 16.1025C31.1543 12.6171 31.1543 6.94436 27.6673 3.459L26.8258 2.61786C25.1339 0.92899 22.8884 0 20.5 0C18.1116 0 15.8639 0.92899 14.1764 2.61786L13.3349 3.459C9.84791 6.94436 9.84791 12.6171 13.3349 16.1025L17.3931 20.1589L15.2574 22.2936L12.9855 20.0227C11.5024 18.5403 9.55568 17.8001 7.60675 17.8001C5.65782 17.8001 3.71109 18.5403 2.22797 20.0227C0.790997 21.4612 0 23.3697 0 25.4012C0 27.4327 0.790997 29.3411 2.22797 30.7775C3.66275 32.2116 5.57213 33 7.60675 33C9.64137 33 11.5507 32.2116 12.9855 30.7775L15.2574 28.5066L17.5843 30.8368C18.3621 31.6142 19.3948 32.0447 20.4956 32.0447C21.5964 32.0447 22.6313 31.6164 23.4091 30.8389L25.7447 28.5044L27.9288 30.6874C29.3965 32.1545 31.352 32.9627 33.4328 32.9627C35.5136 32.9627 37.2867 32.2138 38.6885 30.8565C40.1782 29.4114 41 27.4722 41 25.399C41 23.3258 40.1782 21.3865 38.6885 19.9414ZM9.87867 27.6698C9.27224 28.276 8.46586 28.6076 7.60675 28.6076C6.74764 28.6076 5.94126 28.2738 5.33483 27.6698C4.7284 27.0659 4.39443 26.2577 4.39443 25.399C4.39443 24.5403 4.7284 23.7343 5.33483 23.1281C5.94126 22.522 6.74764 22.1881 7.60675 22.1881C8.46586 22.1881 9.27224 22.522 9.87867 23.1281L12.1506 25.399L9.87867 27.6698ZM20.4978 27.5381L19.7156 26.7562L18.3621 25.4012L20.4758 23.2862L20.6516 23.4202L22.6313 25.399L20.4934 27.5359L20.4978 27.5381ZM21.9875 15.5688L20.5022 17.0534L16.4439 12.9971C14.6708 11.2247 14.6708 8.33895 16.4439 6.56442L17.2855 5.72328C18.1446 4.86457 19.2871 4.39019 20.5022 4.39019C21.7173 4.39019 22.8598 4.86237 23.7189 5.72328L24.5604 6.56442C26.3336 8.33675 26.3336 11.2225 24.5604 12.9971L21.9875 15.5688ZM35.63 27.705C35.0258 28.2914 34.2348 28.5813 33.4328 28.5813C32.5715 28.5813 31.7014 28.2474 31.0378 27.5842L28.8538 25.4012L31.0378 23.2182C32.3188 21.9378 34.3798 21.8829 35.63 23.0952C36.2606 23.7057 36.6078 24.5249 36.6078 25.4012C36.6078 26.2775 36.2606 27.0966 35.63 27.7072V27.705Z" fill="#313139" />
                            </svg>

                        </div>
                        <div className="line box"></div>
                        <div className="contacts">
                            {
                                array.map(el => (
                                    <div className='person' key={el}>
                                        <div className="left box"></div>
                                        <div className="right">
                                            <div className="top">
                                                <div className="q box animatedInfo"></div>
                                                <div className="w box animatedInfo"></div>
                                            </div>
                                            <div className="bottom">
                                                <div className="e box animatedInfo"></div>
                                                <div className="w box animatedInfo"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="selected">
                            <div className="photo">
                                <img src={selected} alt="" />
                            </div>
                            <div className="info">
                                <div>
                                    <div className="a box"></div>
                                    <div className="s box"></div>
                                </div>

                                <div className="d box"></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="second">
                    <div className="chart charCircle grayBlock">
                        <div className="chart__inner">
                            <div className='person'>
                                <div className="left box"></div>
                                <div className="right">
                                    <div className="top">
                                        <div className="q box animatedInfo"></div>
                                        <div className="w box animatedInfo"></div>
                                    </div>
                                    <div className="bottom">
                                        <div className="e box animatedInfo"></div>
                                        <div className="w box animatedInfo"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="circle">
                                <svg width="111" height="111" viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M55.5001 110.575C25.1279 110.575 0.425781 85.8724 0.425781 55.5001C0.425781 25.1279 25.1279 0.425781 55.5001 0.425781C85.8724 0.425781 110.575 25.1279 110.575 55.5001C110.575 57.7803 108.72 59.6349 106.44 59.6349C104.16 59.6349 102.305 57.7803 102.305 55.5001C102.305 29.7035 81.312 8.7105 55.5153 8.7105C29.7187 8.7105 8.7105 29.7035 8.7105 55.5001C8.7105 81.2968 29.7035 102.29 55.5001 102.29C57.7803 102.29 59.6349 104.144 59.6349 106.425C59.6349 108.705 57.7803 110.559 55.5001 110.559V110.575Z" fill="url(#paint0_linear_408_1387)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_408_1387" x1="0.425781" y1="12.9427" x2="114.629" y2="17.9415" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FF9898" />
                                            <stop offset="1" stop-color="#8054FF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="inner big"></div>
                                <div className="inner small"></div>
                            </div>
                        </div>
                    </div>

                    <div className="chart chartBars grayBlock">

                        <div className="chart__inner">
                            <div className='person'>
                                <div className="left box"></div>
                                <div className="right">
                                    <div className="top">
                                        <div className="q box animatedInfo"></div>
                                        <div className="w box animatedInfo"></div>
                                    </div>
                                    <div className="bottom">
                                        <div className="e box animatedInfo"></div>
                                        <div className="w box animatedInfo"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="divider"></div>

                            <div className="bars">
                                <div className="bar">
                                </div>
                                <div className="bar">
                                    <div className="inner"></div>
                                </div>
                                <div className="bar">
                                    <div className="inner"></div>
                                </div>
                                <div className="bar">
                                    <div className="inner"></div>
                                </div>
                                <div className="bar">
                                    <div className="inner"></div>
                                </div>
                                <div className="bar">
                                    <div className="inner"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="third">
                    <div className="list2 man">
                            <div className='person'>
                                <div className="left box"></div>
                                <div className="right">
                                    <div className="top">
                                        <div className="q box animatedInfo"></div>
                                        <div className="w box animatedInfo"></div>
                                    </div>
                                    <div className="bottom">
                                        <div className="e box animatedInfo"></div>
                                        <div className="w box animatedInfo"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="listholder">
                                {array.map(el => (
                                    <div className="el">
                                        <div className='person' onClick={() => setselected(el)}>
                                            <div className="left ">
                                                <img src={el} alt="" />
                                            </div>
                                            <div className="right">
                                                <div className="top">
                                                    <div className="q box animatedInfo"></div>
                                                    <div className="w box animatedInfo"></div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="e box animatedInfo"></div>
                                                    <div className="w box animatedInfo"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="divider"> </div>
                                    </div>
                                ))}
                            </div>

                    </div>

                    <div className="button man">
                        <GradientButton text={"Download Template"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
