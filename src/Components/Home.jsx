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
            setVisiblenextbtn(false);
        }
    }
    const [iscorrect,setIscorrect]=useState(false);
    const [visiblenextbtn,setVisiblenextbtn]=useState(false);
    const handleCorrectAnswer=(correct_answer,choosen_answer)=>{
        if(correct_answer===choosen_answer){
            setIscorrect(true);
            setVisiblenextbtn(true);
        } 
        else {
            setIscorrect(false);
            setVisiblenextbtn(false);
        }
    }
  return (
    <>
        <div className='container'>
            <div>
                <progress value={ques*100/20} max="100"></progress>
            </div>

            <h2>Question {ques+1} of 20</h2>
            <p className='tag'>{decodeURIComponent(data[ques].category)}</p>
            <div className='stars'>
                {stars}
            </div> 
            <Questions 
                questions_data={data}
                ques={ques}
                 
            />
            <Options ques={ques} 
                options_data={data}
                handleCorrectAnswer={handleCorrectAnswer}
            />
            <Questionresult iscorrect={iscorrect}/>
            <Nextquestion
                ques={ques}
                handleQuestions={handleQuestions}
                visiblenextbtn={visiblenextbtn}
            />
        </div>
    </>
  )
}

export default Home
