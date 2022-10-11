import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import { Row } from 'react-bootstrap';

const Quiz = () => {
    const data = useLoaderData();
    const quizs = data.data;
    const quizQuestions = data.data.questions;
    console.log(quizQuestions);

    return (
        <div className='question-container'>
            <Row xs={1} className='g-4 mb-5'>
                <h2 className='text-center mt-5 fw-bolder'>Quiz of <span className='text-warning'>{quizs.name}</span></h2>
                {
                    quizQuestions.map((questions, index) => <Question key={index} index={index} questions={questions} />)
                }
            </Row>
        </div>


    );
};

export default Quiz;