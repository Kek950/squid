import Spline from '@splinetool/react-spline'
import React, { useState } from 'react'
import './Contactus.css'

export default function Contactus() {

    const [wrapper, setwrapper] = useState(1)

  return (
    <div className='contactus'>
        <div className="container">
            <div className="spline">
                <div className="wrapper">
                    <Spline scene="https://prod.spline.design/6Um2i0UQV3CTxgSd/scene.splinecode" />
                    <div className="overlay"></div>
                </div>
            </div>
            <div className="form">
                <div className="title">
                    <h2>
                        Get In Touch
                    </h2>
                    <p>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </p>
                </div>
                <form action="">
                    <div className="wrapper" onClick={() => setwrapper(1)}>
                       <input type="email" placeholder='your email' className='email'/>
                        <div className={wrapper == 3 ? "gradientBlock active" : "gradientBlock"}>
                            <div className={wrapper == 3 ? "gradientFocus active" : "gradientFocus"}></div>
                        </div>
                    </div>
                    <div className="wrapper" onClick={() => setwrapper(2)}>
                        <input type="text" placeholder='name' className='name'/>
                        <div className={wrapper == 3 ? "gradientBlock active" : "gradientBlock"}>
                            <div className={wrapper == 3 ? "gradientFocus active" : "gradientFocus"}></div>
                        </div>
                    </div>
                    <div className="wrapper" onClick={() => setwrapper(3)}>
                        <textarea name="" id="" placeholder='your request'></textarea>
                        <div className={wrapper == 3 ? "gradientBlock active" : "gradientBlock"}>
                            <div className={wrapper == 3 ? "gradientFocus active" : "gradientFocus"}></div>
                        </div>
                    </div>
                    <button><span>Get In Touch</span></button>
                    
                </form>
            </div>
        </div>
    </div>
  )
}
