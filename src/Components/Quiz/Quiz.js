import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const questions = useLoaderData();
    const quiz = questions.data;
    console.log(quiz);

    // const { id, question } = questions
    // console.log(questions.data.questions);
    return (

        <div>
            <h1>This is quiz page :{quiz.length}</h1>
            <div className='question-container'>
                {/* {
                    questions.map(question => <Question
                        key={question.id}
                        question={question}
                    ></Question>)
                } */}
            </div>
        </div>

    );
};

export default Quiz;