import React from 'react'

const Options = (props) => {
  const arr=[];
  arr.push(decodeURIComponent(props.options_data[props.ques].correct_answer));
  arr.push(decodeURIComponent(props.options_data[props.ques].incorrect_answers[0]));
  arr.push(decodeURIComponent(props.options_data[props.ques].incorrect_answers[1]));
  arr.push(decodeURIComponent(props.options_data[props.ques].incorrect_answers[2]));
  return (
    <>

      <div className='options'>
            {/* {console.log(arr)} */}
            {console.log( Math.floor(Math.random() * (3 - 0 + 1)) + 0)}
            <button>{arr[Math.floor(Math.random() * (3 - 0 + 1)) + 0]}</button>
            <button>{arr[Math.floor(Math.random() * (3 - 0 + 1)) + 0]}</button>
            <button>{arr[Math.floor(Math.random() * (3 - 0 + 1)) + 0]}</button>
            <button>{arr[Math.floor(Math.random() * (3 - 0 + 1)) + 0]}</button>
        </div>
    </>
  )
}

export default Options
