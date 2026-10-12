import GradientButton from '../GradientButton/GradientButton'
import Interface from '../interface/Interface'
import './Header.css'

export default function Header() {
  return (
    <header className='header'>
        
        <div className="background">
            <div className="background__img">
                <img src="public/Group 95.png" alt="" />
            </div>
        </div>

        <div className="header__title">
            <h1>Beautiful Landing Page Design for You</h1>
            <p>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </p>
            <GradientButton text={"Download Template"}/>
        </div>

        <Interface/>




        <div className="substractBlock">

          <div className="substract top">
            <img src="public/Ellipse 18.png" alt="" />
          </div>
          <div className="inner"></div>
          <div className="substract bottom">
            <img src="public/Ellipse 18.png" alt="" />
          </div>

        </div>


        <div className="bg_balls">
          <div className="ball_1 ball">
            <img src="/public/Ellipse 14.png" alt="" />
          </div>
          <div className="ball_2 ball">
            <img src="/public/Ellipse 14.png" alt="" />
          </div>
          <div className="ball_3 ball">
            <img src="/public/Ellipse 14.png" alt="" />
          </div>
        </div>

    </header>
  )
}
