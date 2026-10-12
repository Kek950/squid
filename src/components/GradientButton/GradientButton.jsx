import "./GradientButton.css"

export default function GradientButton({text}) {
  return (
    <button className="gradientButton">
       <span>{text}</span>
        <div className="wrapper">
            <div className="gradientCircle"></div>
        </div>
    </button>
  )
}
