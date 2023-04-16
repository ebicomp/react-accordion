import React from "react"
import questions from "./data"
import Question from "./Question"

const Questions = () => {
  return (
    <div className="questions">
      {questions.map(q => (
        <Question key={q.id} {...q} />
      ))}
    </div>
  )
}

export default Questions
