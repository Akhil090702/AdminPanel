import React from 'react';
import './widget.scss'
import { LineChart, Line, ResponsiveContainer } from 'recharts';


const widget = ({ type }) => {

    const value = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    let data;
    switch (type) {
        case "impression":
            data = {
                title: "Impressions"
            };
            break;
        case "total":
            data = {
                title: "Total audience"
            };
            break;
        case "engagement":
            data = {
                title: "Engagements"
            };
            break;
        case "engaged":
            data = {
                title: "Engaged audience"
            };
            break;
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <span className="title">
                    {data.title}
                </span>
                <span className="counter">
                    832
                </span>
            </div>
            <div className="right">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={300} height={100} data={value}>
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default widget
