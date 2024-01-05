import React from 'react'
import "./sales.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Area, AreaChart } from 'recharts';
import img3 from "../../images/4.jpg"

const Sales = () => {

  const data = [
    {
      pv: 1000
    },
    {
      pv: 6200,
    },
    {
      pv: 1800,
    },
    {
      pv: 7500,
    },
    {
      pv: 2500,
    },
    {
      pv: 9000,
    }
  ];
  return (
    <>
      <div className='Salearea'>
        <div className="top">
          <h6 className="title"><b>Weekly Sale Stats</b> </h6>
          <div className="text-title">
            <p><MoreVertOutlinedIcon className='MoreVertOutlinedIcon' /></p>
          </div>
        </div>
        <hr />

        <div className="chart">
          <AreaChart className='chartwidth' width={600} height={150} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="pv" stroke="#3e377d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </div>

        <div className="bottom">
          <div className="items">
            <div className="item">
              <div className="photo" style={{ backgroundImage: `url(${img3})` }}></div>
              <div className="phototext">
                <h6>Adobe XD Part 01</h6>
                <span className='uidesign'>UIUX Design </span>
              </div>
              <div className="money">
                <p className='dollar'>$20</p>
              </div>
            </div>
            <div className="item">
              <div className="photo" style={{ backgroundImage: `url(${img3})` }}></div>
              <div className="phototext">
                <h6>Adobe XD Part 01</h6>
                <span className='uidesign'>UIUX Design </span>
              </div>
              <div className="money">
                <p className='dollar2'>$20</p>
              </div>
            </div>
            <div className="item">
              <div className="photo" style={{ backgroundImage: `url(${img3})` }}></div>
              <div className="phototext">
                <h6>Adobe XD Part 01</h6>
                <span className='uidesign'>UIUX Design </span>
              </div>
              <div className="money">
                <p className='dollar3'>$20</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sales
