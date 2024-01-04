import React from 'react'
import "./featured.scss"
import MovingIcon from '@mui/icons-material/Moving';
import CircleIcon from '@mui/icons-material/Circle';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'Jan',
        uv: 2,
        pv: 19,
        amt:10
    },
    {
        name: 'Feb',
        uv: 28,
        pv: 50,
        amt:20
    },
    {
        name: 'Mar',
        uv: 30,
        pv: 50,
        amt: 30,
    },
    {
        name: 'Api',
        uv: 40,
        pv: 48,
        amt: 40,
    },
    {
        name: 'May',
        uv: 8,
        pv: 80,
        amt: 50,
    },
    {
        name: 'June',
        uv: 11,
        pv: 60,
        amt: 60,
    },
    {
        name: 'July',
        uv: 68,
        pv: 50,
        amt: 70,
    },
    {
        name: 'Aug',
        uv: 6,
        pv: 45,
        amt: 80,
    },
    {
        name: 'Sep',
        uv: 12,
        pv: 60,
        amt: 90,
    },
    {
        name: 'Oct',
        uv: 70,
        pv: 25,
        amt: 90,
    },
    {
        name: 'Nov',
        uv: 45,
        pv: 30,
        amt: 90,
    },
    {
        name: 'Dec',
        uv: 20,
        pv: 80,
        amt: 90,
    },
];


const Featured = () => {
    return (
        <>
            <div className='featured'>
                <div className="top">
                    <h6 className="title"><b>Revenue</b> <span className='revenuespan'><MovingIcon className='movingicon' />+0.3%</span></h6>
                    <div className='text-title'>
                        <p>Course Visit <CircleIcon className='visiticon' /> </p>
                        <p>Course Sale <CircleIcon className='saleicon' /></p>
                        <p>This Month <KeyboardArrowDownOutlinedIcon className='monthicon' /></p>
                    </div>
                </div>
                <div className="bottom">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart width={730} height={250} data={data}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    {/* <stop offset="5%" stopColor='red' stopOpacity={0.8} /> */}
                                    <stop offset="95%" stopColor="red" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#0d055c" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="white" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" stroke='grey'/>
                            <YAxis stroke='grey'/>
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="red" fillOpacity={1} fill="url(#colorUv)" />
                            <Area type="monotone" dataKey="pv" stroke="#0d055c" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    )
}

export default Featured
