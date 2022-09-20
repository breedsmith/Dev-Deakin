import React, {useContext} from 'react'
import QuestionCard from './QuestionCard'
import {QuestionContext} from './context/question.context'
import './QuestionCard.css';
import { useEffect } from 'react';

function QuestionList (props)

{
    const {questions} = useContext(QuestionContext)
    // const filteredQuestion = ()=> {
    //     try{
    //         const test = questions.filter((questions)=>{
    //         return questions.title.toLowerCase().includes(props.searchQuestion.toLowerCase())
    //         })
    //         return test
    //     }
    //     catch(error){
    //         console.log(error)
    //     }
    // }

    //const test = filteredQuestion()

    console.log(questions)
    return <div className='QuestionCards'>
        {Object.keys(questions).map((name) =>
        <QuestionCard
        key = {questions[name].userUid}
        title = {questions[name].title}
        question = {questions[name].problem}
        author = {questions[name].userEmail}
        />
        )}
    </div>
}

export default QuestionList

/*{filteredQuestion.map((questions) =>
<QuestionCard
key = {questions.userUid}
title = {questions.title}
question = {questions.problem}
author = {questions.userEmail}
/>
)}*/