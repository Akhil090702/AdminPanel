import React from 'react'
import ViewHeadlineOutlinedIcon from '@mui/icons-material/ViewHeadlineOutlined';
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import './navbar.scss'
import img2 from '../../images/3.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="Hello">
          <ViewHeadlineOutlinedIcon className='dropdown' />
          Hello Mad
          <BackHandOutlinedIcon className='HeyEmoji' />
        </div>

        <div className="search">
          <SearchOutlinedIcon className='searchicon' />
          <input className='searchholder' type="text" placeholder='Search here' />
        </div>

        <div className="items">
          <div className="item">
            <button className='upload'><FileUploadOutlinedIcon /> New Upload</button>
          </div>

          <div className="item" id='bell'>
            <NotificationsOutlinedIcon />
          </div>
          <div className="item" id='msg'>
            <MarkUnreadChatAltOutlinedIcon />
          </div>
          <div className="item" id='wave'>
            <LandscapeOutlinedIcon />
          </div>
          <div className="item" style={{ marginRight: '10px' }}>
            <span style={{ display: 'block', fontWeight: '700' }}>TheMad</span>
            Designer
          </div>
          <div className="item">
            <div className="image" style={{ backgroundImage: `url(${img2})` }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar