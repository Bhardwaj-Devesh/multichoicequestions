import React from 'react'

const Nextquestion = ({ques,handleQuestions}) => {
  
  return (
    <>
      <button className='next'  onClick={handleQuestions}>Next Question</button>
    </>
  )
}

export default Nextquestion
