import React from 'react'
import { useState } from 'react';
import Data from "./Data";
import "./quizform.css";
const QuizForm=()=> {

const [currentQue , setCurrentque] = useState(0);
const [score , setScore] = useState(0);
const [viewScore , setViewscore] = useState(false);
const [start, setStart] = useState(true);

const handleClick =(isCorrect)=>{
if(isCorrect){
  setScore(score+1);
}
const nextQue = currentQue + 1;
if(nextQue < Data.length){
  setCurrentque(nextQue);
}else{
  setViewscore(true); 
}
}

const resetQuiz = ()=>{
  setScore(0);
  setViewscore(false)
  setCurrentque(0);
}

const startClick=()=>{
  setStart(false);
}

  return (
    <div className='app'>
      {start ? (
               <div className='startBtn'>
               <button onClick={startClick}>Start Quiz</button>
             </div>
          ):(
      <div className='main'>
      {viewScore ? (
        
        <div className='score'>
        <p>You have scored <span>{score} </span>out of <span>{Data.length}</span> </p><br/>
        <button type='submit' className='reset' onClick={resetQuiz}>RESTART</button>
        </div>
      ) :(
            <div className='que-container'>
            <div>
            <div className='que-no'>
              <span>{currentQue + 1} / {Data.length}</span>
              </div>
              <div className='que'>
                {Data[currentQue].que}
                </div>
                </div>
                <div>
                  {Data[currentQue].Ans.map((answer)=>(
                    <li className='list-ans'>
                    <button onClick={()=>handleClick(answer.isCorrect)}><p>{answer.ans}</p></button>
                    </li>
                  ))}
                </div>
              </div>
      )}
    </div>
     )}
  </div>
  )
}

export default QuizForm;
