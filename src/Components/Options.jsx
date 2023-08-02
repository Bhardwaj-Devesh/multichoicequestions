import React from 'react'

const Options = (props) => {
  const arr=[];
  arr.push(decodeURIComponent(props.options_data[props.ques].correct_answer));
  arr.push(decodeURIComponent(props.options_data[props.ques].incorrect_answers[0]));
  arr.push(decodeURIComponent(props.options_data[props.ques].incorrect_answers[1]));
  arr.push(decodeURIComponent(props.options_data[props.ques].incorrect_answers[2]));
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
 
  return (
    <>

      <div className='options'>
          <button onClick={()=>props.handleCorrectAnswer(arr[0],shuffled[0])}>{shuffled[0]}</button>
          <button onClick={()=>props.handleCorrectAnswer(arr[0],shuffled[1])}>{shuffled[1]}</button>
          <button onClick={()=>props.handleCorrectAnswer(arr[0],shuffled[2])}>{shuffled[2]}</button>
          <button onClick={()=> props.handleCorrectAnswer(arr[0],shuffled[3])}>{shuffled[3]}</button>
      </div>
    </>
  )
}

export default Options
