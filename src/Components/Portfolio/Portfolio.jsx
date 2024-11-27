import React from 'react'
import "./Portfolio.css"
import { MdOutlineNotStarted } from "react-icons/md";
import portfolio1 from "../../Assets/images/portfolio1.png"
import { FiArrowDownRight } from "react-icons/fi";

const Portfolio = () => {
  return (
    <>
     <div className='grid-div'>
        <div className='portfolio'>
            <img src={portfolio1} alt="" />
            <div className='portfolio-para'>
                <h2>Web designing</h2>      
                <p><MdOutlineNotStarted /></p>      
            </div>
            <div className='site-btn'>
                <button>View site <FiArrowDownRight className='site-icon'/></button>
            </div>
        </div>
        <div className='portfolio'>
            <img src={portfolio1} alt="" />
            <div className='portfolio-para'>
                <h2>Web designing</h2>      
                <p><MdOutlineNotStarted /></p>      
            </div>
            <div className='site-btn'>
                <button>View site <FiArrowDownRight className='site-icon' /></button>
            </div>
        </div>
        <div className='portfolio'>
            <img src={portfolio1} alt="" />
            <div className='portfolio-para'>
                <h2>Web designing</h2>      
                <p><MdOutlineNotStarted /></p>      
            </div>
            <div className='site-btn'>
                <button>View site <FiArrowDownRight className='site-icon' /></button>
            </div>
        </div>
        <div className='portfolio'>
            <img src={portfolio1} alt="" />
            <div className='portfolio-para'>
                <h2>Web designing</h2>      
                <p><MdOutlineNotStarted /></p>      
            </div>
            <div className='site-btn'>
                <button>View site <FiArrowDownRight className='site-icon' /></button>
            </div>
        </div>
        <div className='portfolio'>
            <img src={portfolio1} alt="" />
            <div className='portfolio-para'>
                <h2>Web designing</h2>      
                <p><MdOutlineNotStarted /></p>      
            </div>
            <div className='site-btn'>
                <button>View site <FiArrowDownRight className='site-icon'/></button>
            </div>
        </div>
        <div className='portfolio'>
            <img src={portfolio1} alt="" />
            <div className='portfolio-para'>
                <h2>Web designing</h2>      
                <p><MdOutlineNotStarted /></p>      
            </div>
            <div className='site-btn'>
                <button>View site <FiArrowDownRight className='site-icon'/></button>
            </div>
        </div>
        </div> 
    </>
  )
}

export default Portfolio
