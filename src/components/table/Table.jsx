import React from 'react'
import "./table.scss"
import CircleIcon from '@mui/icons-material/Circle';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import img4 from "../../images/5.jpg"
import img5 from "../../images/6.jpg"
import img6 from "../../images/7.jpg"
import img7 from "../../images/8.jpg"
import img8 from "../../images/9.jpg"
import img9 from "../../images/10.jpg"
import StarIcon from '@mui/icons-material/Star';
const Tables = () => {

    return (
        <div className='table'>
            <div className="top">
                <h6 className="title"><b>Course Status</b></h6>
                <div className='text-title'>
                    <p>Course Visit <CircleIcon className='visiticon' /> </p>
                    <p>Course Sale <CircleIcon className='saleicon' /></p>
                    <p>This Month <KeyboardArrowDownOutlinedIcon className='monthicon' /></p>
                </div>
            </div>

            <div className="bottom">
                <div className="items">
                    <div className="item" style={{ width: '31rem' }}>
                        <p>Name</p>
                    </div>
                    <div className="item" id='category'>
                        <p>Category</p>
                    </div>
                    <div className="item">
                        <p>Sale</p>
                    </div>
                    <div className="item">
                        <p>Rating</p>
                    </div>
                    <div className="item">
                        <p>Earning</p>
                    </div>
                    <div className="item">
                        <p>Visitor</p>
                    </div>
                </div>

                <div className="content">
                    <div className="data">
                        <div className="textphoto" style={{ width: '27rem' }}>
                            <div className="photo" style={{ backgroundImage: `url(${img4})` }}></div>
                            <div className="text">
                                <h6>Complete Python Bootcamp in Python</h6>
                                <span className='minortext'>Development</span>
                            </div>
                        </div>

                        <span>Design</span>
                        <span>150</span>
                        <span className='icon'><StarIcon className='staricon' /> 4.5</span>
                        <span>$610.50</span>
                        <span>24,512</span>
                    </div>

                    <div className="data">
                        <div className="textphoto" style={{ width: '24rem' }}>
                            <div className="photo" style={{ backgroundImage: `url(${img5})` }}></div>
                            <div className="text">
                                <h6>Advanced Excel Formulas & Functions</h6>
                                <span className='minortext'>Learn backend</span>
                            </div>
                        </div>
                        <span>Development</span>
                        <span>20</span>
                        <span className='icon'><StarIcon className='staricon' /> 5.0</span>
                        <span>$55.50</span>
                        <span>6,200</span>
                    </div>
                    <div className="data">
                        <div className="textphoto" style={{ width: '25rem' }}>
                            <div className="photo" style={{ backgroundImage: `url(${img6})` }}></div>
                            <div className="text">
                                <h6>Video Editor in Filmora</h6>
                                <span className='minortext'>Video-Creation</span>
                            </div>
                        </div>
                        <span>Photography</span>
                        <span>56</span>
                        <span className='icon'><StarIcon className='staricon' /> 4.5</span>
                        <span>$610.50</span>
                        <span>24,512</span>
                    </div>
                    <div className="data" >
                        <div className="textphoto" style={{ width: '26rem' }}>
                            <div className="photo" style={{ backgroundImage: `url(${img7})` }}></div>
                            <div className="text">
                                <h6>Online Meeting Facilitation: The 4 Secret keys</h6>
                                <span className='minortext'>Marketing Courses</span>
                            </div>
                        </div>
                        <span>Marketing</span>
                        <span>150</span>
                        <span className='icon'><StarIcon className='staricon' /> 4.5</span>
                        <span>$610.50</span>
                        <span>24,512</span>
                    </div>
                    <div className="data" >
                        <div className="textphoto" style={{ width: '27rem' }}>
                            <div className="photo" style={{ backgroundImage: `url(${img8})` }}></div>
                            <div className="text">
                                <h6>Intermediate Blues Rhythm Guitar</h6>
                                <span className='minortext'>Music Fundamentals</span>
                            </div>
                        </div>
                        <span>Music</span>
                        <span>30</span>
                        <span className='icon'><StarIcon className='staricon' /> 5.0</span>
                        <span>$110.50</span>
                        <span>6,512</span>
                    </div>
                    <div className="data">
                        <div className="textphoto">
                            <div className="photo" style={{ backgroundImage: `url(${img9})` }}></div>
                            <div className="text">
                                <h6>B2B Sales Masterclass: People-Focused Selling</h6>
                                <span className='minortext'>Business Courses</span>
                            </div>
                        </div>
                        <span>Business</span>
                        <span>90</span>
                        <span className='icon'><StarIcon className='staricon' /> 4.5</span>
                        <span>$240.50</span>
                        <span>512</span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Tables