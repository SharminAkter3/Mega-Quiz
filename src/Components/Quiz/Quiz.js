import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const clickData = useLoaderData();
    const { data } = clickData;
    const { questions } = data;
    console.log(questions);
    return (
        <div>
            <h1>This is quiz page :{data.length}</h1>
            <div className='question-container'>
                {/* {
                    questions.map(question => <div>
                        <h1>Question : {question.question}</h1>
                    </div>
                    )
                } */}
            </div>
        </div>
    );
};

export default Quiz;