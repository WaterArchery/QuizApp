import { View } from 'react-native';
import React, { useState } from 'react'
import Questions from "../models/Questions";
import QuestionComp from '../components/QuestionComp';
import ButtonComp from '../components/ButtonComp';

export const Home = () => {
  const [count, setCount] = useState(0);
  const [question, setQuestion] = useState(undefined);

    if (count == 0) {
      return (
        <View style={{flex: 1,  alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: 'blue'}}>
          <ButtonComp func= {showQuestion} text = "View Random Question" info = "Click here to view the question" color = "#841584" />
        </View>
      )
    }
    else if (count == 1) {
      return (
        <View style={{flex: 1,  alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: 'blue'}}>
          <QuestionComp question = {question.question} options = {question.options} showAnswer = { false } correctOption = {question.correctOption}/>
          <ButtonComp func= {showAnswer} text = "View Answer" info = "Click here to view the answer" color = "#43c465" />
        </View>
      )
    }
    else if (count == 2) {
      return (
        <View style={{flex: 1,  alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: 'blue'}}>
          <QuestionComp question = {question.question} options = {question.options} showAnswer = { true } correctOption = {question.correctOption}/>
          <ButtonComp func= {showQuestion} text = "View Random Question" info = "Click here to view the question" color = "#841584" />
        </View>
      )
    }

    function showQuestion(params) {
      size = Questions.length;
      const randomNumber = Math.floor(Math.random() * (size - 1));  
      setQuestion(Questions[randomNumber]);
      setCount(1);
    }

    function showAnswer(params) {
      setCount(2);
    }

}


export default Home