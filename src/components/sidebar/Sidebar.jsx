import React from 'react'
import './sidebar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'; import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined'; import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import img1 from "../../images/2.jpg"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <div className="top">
                {/* <div className="row">
                    <div className="col-lg-4">
                        LOGO
                    </div>
                    <div className="col-lg-8 logo">
                        Skilify Admin
                    </div>
                </div> */}
                <div className="logo">
                    Skilify Admin
                </div>
            </div>
            <div className="center">
                <ul>
                    <li id="hovered">
                        <HomeOutlinedIcon className='icon' />
                        <span>Dashboard</span>
                        <KeyboardArrowRightIcon className='KeyboardArrowRightIcon'/>
                    </li>
                    <li>
                        <PlayCircleOutlineIcon className='icon' />
                        <span>My Course</span>
                        <KeyboardArrowRightIcon className='KeyboardArrowRightIcon'/>
                    </li>
                    <li>
                        <CalendarTodayIcon className='icon' />
                        <span>Calendar</span>
                        <KeyboardArrowRightIcon className='KeyboardArrowRightIcon'/>
                    </li>
                    <li>
                        <ImportContactsIcon className='icon' />
                        <span>Resource</span>
                        <KeyboardArrowRightIcon className='KeyboardArrowRightIcon'/>
                    </li>
                    <li>
                        <ExtensionOutlinedIcon className='icon' />
                        <span>Quiz</span>
                        <KeyboardArrowRightIcon className='KeyboardArrowRightIcon'/>
                    </li>
                    <li>
                        <ChatBubbleOutlineIcon className='icon' />
                        <span>Message</span>
                        <KeyboardArrowRightIcon className='KeyboardArrowRightIcon'/>
                    </li>
                    <li>
                        <MovingOutlinedIcon className='icon' />
                        <span>My Status</span>
                        <KeyboardArrowRightIcon className='KeyboardArrowRightIcon'/>
                    </li>
                    <li>
                        <AccountBalanceWalletOutlinedIcon className='icon' />
                        <span>Wallet</span>
                        <KeyboardArrowRightIcon className='KeyboardArrowRightIcon'/>
                    </li>
                    <li>
                        <PersonAddAltOutlinedIcon className='icon' />
                        <span>My Account</span>
                        <KeyboardArrowRightIcon className='KeyboardArrowRightIcon'/>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="image" style={{ backgroundImage: `url(${img1})`}}></div>
                <div className="text">
                    <p className='text1'>Skilify Teacher Dashboard Admin</p>
                    <p className='text2'><CopyrightOutlinedIcon className='icon2' />2020 All right reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
