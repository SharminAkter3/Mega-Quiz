import React, { useContext, PureComponent } from 'react';
import { ItemContext } from '../Main/Main';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {

    const quizTopics = useContext(ItemContext);
    const { data } = quizTopics;

    return (

        <div style={{ width: "80%", margin: "50px auto" }}>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart width={400} height={350}
                    data={data.map(data => data)}
                    margin={{
                        top: 5,
                        right: 20,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>

            </ResponsiveContainer>
        </div>

    );
};

export default Statistics;