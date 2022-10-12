import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";

const Statistics = () => {

    const [quizName, setQuizName] = useState([]);
    const [quizMark, setQuizMark] = useState([]);

    useEffect(() => {

        const totalQuizName = [];
        const totalQuizMark = [];

        const getQuizRecord = async () => {
            const dataMark = await fetch("https://openapi.programming-hero.com/api/quiz");
            const dataRes = await dataMark.json();
            console.log(dataRes);

            for (let i = 0; i < dataRes.length; i++) {
                totalQuizName.push(dataRes[i].data.name);
                console.log(totalQuizName);
                totalQuizMark.push(dataRes[i].data.total);

            }
            setQuizName(quizName);
            setQuizMark(quizMark);
        }
        getQuizRecord();

    }, []);

    return (
        <React.Fragment>
            <div className="container-fluid mb-5">
                <h3 className="text-center mt-3 mb-3">Bar Chart in Quiz</h3>

                <Chart
                    type="bar"
                    width={1380}
                    height={700}
                    series={[
                        {
                            name: "Quiz Mark",
                            data: quizMark,
                        },
                    ]}
                    options={{
                        colors: ["#f90000"],
                        theme: { mode: "light" },

                        xaxis: {
                            tickPlacement: "on",
                            categories: quizName,
                            title: {
                                text: 'Quiz Topics',
                                style: { color: "#f90000", fontSize: 30 },
                            },
                        },

                        yaxis: {
                            labels: {
                                formatter: (quiz) => {
                                    return `${quiz.data.name}`;
                                },
                                style: { fontSize: "15", colors: ["#f90000"] },
                            },
                            title: {
                                text: "User In (K)",
                                style: { color: "#f90000", fontSize: 15 },
                            },
                        },

                        legend: {
                            show: true,
                            position: "right",
                        },

                        dataLabels: {
                            formatter: (quiz) => {
                                return `${quiz.data}`;
                            },
                            style: {
                                colors: ["#f4f4f4"],
                                fontSize: 15,
                            },
                        },
                    }}
                ></Chart>
            </div>
        </React.Fragment>
    );
}

export default Statistics;