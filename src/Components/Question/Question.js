import { Toast } from 'bootstrap';
import React from 'react';

const Questions = ({ questions, index }) => {
    const { option, id, question, correctAnswer } = questions;

    // check correct ans
    const correctAnshandler = (option) => {
        if (correctAnswer === option) {
            toast.success('Answer is correct', { autoClose: 1000 });
        }
        else {
            toast.warning('Ans is false', { autoClose: 1000 });
        }
    }

    //show correct ans
}

const Question = () => {
    return (
        <div>
            <h1>This is quesyi</h1>
        </div>
    );
};

export default Question;