import React from 'react'
import "./queries.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import img3 from "../../images/4.jpg"

const Queries = () => {
  return (
    <div className='Queryarea'>
      <div className="top">
        <h6 className="title"><b>Student Queries</b> </h6>
        <div className="text-title">
          <p><MoreVertOutlinedIcon className='MoreVertOutlinedIcon' /></p>
        </div>
      </div>

      <div className="bottom">
          <div className="items">
            <div className="item">
              <div className="photo" style={{ backgroundImage: `url(${img3})` }}></div>
              <div className="phototext">
                <h6>Machine Learning Bootcamp</h6>
                <span className='uidesign'>By James Board</span>
              </div>
              <div className="money">
                <button className='View'>View</button>
                <button className='decline'>Decline</button>
              </div>
            </div>
            <div className="item">
              <div className="photo" style={{ backgroundImage: `url(${img3})` }}></div>
              <div className="phototext">
                <h6>Python & R In Data Science</h6>
                <span className='uidesign'>Data Science </span>
              </div>
              <div className="money">
                <button className='Approval'>Approval</button>
                <button className='decline'>Decline</button>
              </div>
            </div>
            <div className="item">
              <div className="photo" style={{ backgroundImage: `url(${img3})` }}></div>
              <div className="phototext">
                <h6>SuperDataScience Support</h6>
                <span className='uidesign'>Data Science</span>
              </div>
              <div className="money">
                <button className='Approval'>Approval</button>
                <button className='decline'>Decline</button>
              </div>
            </div>

            <div className="item">
              <div className="photo" style={{ backgroundImage: `url(${img3})` }}></div>
              <div className="phototext">
                <h6>Analyst Bootcamp 2020</h6>
                <span className='uidesign'>Data Science</span>
              </div>
              <div className="money">
                <button className='Approval'>Approval</button>
                <button className='decline'>Decline</button>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Queries