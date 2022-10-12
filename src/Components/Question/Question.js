import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';
import { removeTages } from 'react-string-replace';
import Option from './Option/Option'

const Question = ({ questions, index }) => {
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
    const showCorrectAns = () => {
        toast.success(`Correct ans is : ${correctAnswer}`, { autoClose: 1000 });
    }

    const ques = removeTages(question)

    // question dynamic serial

    if (index >= 0) {
        index += 1;
    }

    return (
        <Col>
            <Card style={{ width: '70%', margin: "0 auto" }}>

                <Card.Body>
                    <div className='relative'>
                        <Card.Title className='text-center text-danger'> Quiz No {index} : {ques}</Card.Title>
                        <EyeIcon onClick={showCorrectAns} style={{ width: "20px", position: 'absolute', top: '15px', right: '5' }}></EyeIcon>
                    </div>
                    <div className='row row-cols-md-2 gap-4'>

                        {
                            options.map((option, index) => <Option key={index} option={option} correctAnshandler={correctAnshandler}></Option>)
                        }

                    </div>
                </Card.Body>
            </Card>

        </Col>

    );
};
export default Question;



