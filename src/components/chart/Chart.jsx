import React from 'react'
import "./chart.scss"
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    pv: 80,
  },
  {
    name: 'Tue',
    pv: 48,
  },
  {
    name: 'Wed',
    pv: 35,
  },
  {
    name: 'Thu',
    pv: 50,
  },
  {
    name: 'Fri',
    pv: 35,
  },
  {
    name: 'Sat',
    pv: 20,
  },

];

const Chart = () => {
  return (
    <>
      <div className='chart'>
        <div className="top">
          <h6 className="title"><b>Visitors</b> <span className='revenuespan'><TrendingDownOutlinedIcon className='movingicon' />-0.3%</span></h6>
          <div className="text-title">
            <p><MoreVertOutlinedIcon className='MoreVertOutlinedIcon' /></p>
          </div>
        </div>
        <div className="bottom">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              barGap={10}
              width={300}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke='gray'/>
              <YAxis interval={0} stroke='gray'/>
              <Tooltip />
              <Bar dataKey="pv" fill="#0d055c" barSize={10} radius={20} activeBar={<Rectangle fill="red"/>} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  )
}

export default Chart
