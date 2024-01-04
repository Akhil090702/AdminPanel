import React from 'react'
import "./piechart.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import MovingIcon from '@mui/icons-material/Moving';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';


const Piechart = () => {
    const percentage = 40;
    return (
        <div className='Piearea'>
            <div className="top">
                <h6 className="title"><b>Sale</b> </h6>
                <div className="text-title">
                    <p><MoreVertOutlinedIcon className='MoreVertOutlinedIcon' /></p>
                </div>
            </div>
            <hr />


            <div className="bottom">
                <div className="featuredchart" style={{ fontWeight: '700' }}>
                    <CircularProgressbar
                        value={percentage}
                        text="3,500"
                        styles={buildStyles({
                            textColor: "#4d4865",
                            pathColor: "#f37139",
                            trailColor: "#5942b5",
                            textSize: "12px",
                        })}
                    />
                </div>

                <div className="summary">
                    <div className="item">
                        <div className="itemtitle">Current Week</div>
                        <div className="itemvalue">Last Week</div>
                    </div>
                    <div className="item">
                        <div className="itemtitle">2000</div>
                        <div className="itemvalue">1500</div>
                    </div>
                    <div className="item">
                        <div className="itemtitle"> <span className='incpercent'><MovingIcon /> +0.3% </span></div>
                        <div className="itemvalue"> <span className='decpercent'><TrendingDownOutlinedIcon className='trending' /> -0.3% </span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Piechart
