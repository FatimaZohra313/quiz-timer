import logo from './logo.svg';
import './App.css';
import Timer from './componenet/Timer';
import { useState } from 'react';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { BedroomChildRounded } from '@mui/icons-material';
import Chip from '@mui/material/Chip';
function App() {
  let [score,setScore] = useState(0)
  let [questions,setQuestions] = useState([
    {
        question: "Indepedence Day of Pakistan",
        options: ["14 august", "15 august", "16 august"],
        correctAnswer : "14 august"
    },
    {
        question:"CSS stands for",
        options: ["Cascading Style Sheet","CSS", "html"],
        correctAnswer: "Cascading Style Sheet"

    },
    {
        question: "JS stands for",
        options:["Java Script","JS","CSS"],
        correctAnswer: "Java Script"
    },
    {
        question:"JS is case sensitive",
        options:["True","False"],
        correctAnswer:"True"
    },
    {
        question: "HTML stand for",
        options :["Hyper Text Markup Language","Java Script","Cascading Style Sheet"],
        correctAnswer:"Hyper Text Markup Language"
    }]);
    let [indexNumber,setIndexNumber] = useState(0)
    let[showResult,setShowResult] = useState(false)
   
  let checkAnswer = (userAnswer,correctAnswer)=>{
    console.log(userAnswer,correctAnswer);
    if(userAnswer == correctAnswer){
      setScore(score + 1)
      console.log(score);
    }
    if(indexNumber + 1 == questions.length){
      setShowResult(true)

    }else
    {

      setIndexNumber(indexNumber + 1)
    }
    
  }
function timeover(){
   setShowResult(true)
     
}
    




  return (
    <div className="App">
      <h1 className='styling'>Quiz App</h1>

    {showResult?<h1>Your score is {score}</h1>:
     <Box>
     <Box container className="styling" sx={{padding : 1}}>
        <Typography className='styling' variant='h5'>
          Question {indexNumber + 1}/{questions.length}

        </Typography>
        
      </Box>
      <Box sx={{padding:1}}>
        <Typography sx={{
          backgroundColor : 'white',
          color:"black",
          
          padding : "10px" 
        }} variant='h4'>{questions[indexNumber].question}?</Typography>
        
      </Box>
      <Box>
        <Grid container>
          {questions[indexNumber].options.map((e,i)=>
          <Grid key={i} item md={6}>
            <Chip className='design' onClick={()=>checkAnswer(e,questions[indexNumber].correctAnswer)} sx={{
              padding: "10px",
              marginTop : "5px",
              paddingBlockEnd : "10px",
              backgroundColor : "white",
              color: "black",
              fontWeight: "bold",
            }} label={e} />

          </Grid>)}

        </Grid>
      </Box>

     <Timer name = {timeover}   className="container" score={score}/>
     </Box>}
    </div>
  );
}

export default App;
