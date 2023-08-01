import React, { useState } from 'react'
import {AiOutlineStar} from 'react-icons/ai'
import "../Styles/Home.css"
import Questions from './Questions';
import Options from './Options';
import Nextquestion from './Nextquestion';
import Questionresult from './Questionresult';
import data from "../questions.json";
const Home = () => {
    const stars = [];
    for (let index = 0; index < 5; index++) {
        stars.push(<AiOutlineStar key={index} />);
    }

    const [ques,setQues]=useState(0);
    const handleQuestions=()=>{
        if(ques<data.length){
            setQues(ques+1);
        }
    }
  return (
    <>
        <div className='container'>
            <div>
                <progress value="50" max="100"></progress>
            </div>

            <h2>Question {ques+1} of 20</h2>
            <p className='tag'>Entertainment: Board Games</p>
            <div className='stars'>
                {stars}
            </div> 
            <Questions 
                questions_data={data}
                ques={ques}
                 
            />
            <Options ques={ques} options_data={data}/>
            <Questionresult/>
            <Nextquestion
                ques={ques}
                handleQuestions={handleQuestions}
            />
        </div>
    </>
  )
}

export default Home
