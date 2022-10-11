import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = ({ params }) => {
    const question = useLoaderData();
    console.log(question);
    return (
        <div>
            <h1>This is quiz page :{ }</h1>
            <div className='question-container'>
                {
                    params.map(question => <Question
                        key={question.id}
                        question={question}
                    ></Question>)
                }
            </div>
        </div>
    );
};

export default Quiz;