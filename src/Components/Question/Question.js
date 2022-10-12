import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';
import Option from './Option/Option'

const Question = ({ questions, index }) => {
    const { options, id, question, correctAnswer } = questions;

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

    // question dynamic serial

    if (index >= 0) {
        index += 1;
    }

    return (
        <Col>
            <Card style={{ width: '70%', margin: "0 auto" }}>

                <Card.Body>
                    <div className='relative'>
                        <Card.Title className='text-center text-primary'> Quiz No {index} : {question}</Card.Title>
                        <EyeIcon onClick={showCorrectAns} style={{ width: "20px", position: 'absolute', top: '15px', right: '5px' }}></EyeIcon>
                    </div>
                    <div className='row row-cols-md-3 row-cols-sm-1 gap-3'>

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



