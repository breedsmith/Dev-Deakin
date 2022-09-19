import React, {useContext} from 'react'
import QuestionCard from './QuestionCard'
import {QuestionContext} from './context/question.context'
import './QuestionCard.css';
import { useEffect } from 'react';

function QuestionList (props)

{
    const {questions} = useContext(QuestionContext)
    console.log(Array.isArray(questions))
    console.log(questions)
    const filteredQuestion = ()=> {
        try{
            const test = questions.filter((questions)=>{
            return questions.title.toLowerCase().includes(props.searchQuestion.toLowerCase())
            })
            return test
        }
        catch(error){
            console.log(error)
        }
    }

    //const test = filteredQuestion()

    //console.log(questions)
    return <div className='QuestionCards'>
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