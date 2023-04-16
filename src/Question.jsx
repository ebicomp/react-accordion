import { useState } from "react"
const Question = ({ id, title, info }) => {
  const [show, setShow] = useState(false)
  return (
    <div className="question-container">
      <div className="question">
        <div className="title">{title}</div>
        <button
          onClick={() => {
            setShow(pre => !pre)
          }}
        >
          +
        </button>
      </div>
      <div className={`info ${show ? "info-show" : ""}`}>{info}</div>
    </div>
  )
}

export default Question
