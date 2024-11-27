import React from 'react'
import  "./Profile.css"
import profile from "../../Assets/images/profile.png"
import { MdOutlineNotStarted } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { RxDotFilled } from "react-icons/rx";
import { GiTronArrow } from "react-icons/gi";
import education from "../../Assets/images/eduimg.png"
import signature from "../../Assets/images/signature..png"
import { useNavigate } from 'react-router';

const Profile = () => {

  let navigate = useNavigate

  function aboutnavigate(params) {
    navigate('/about')
  }

  return (
    <>
    <div className='home'>
     <div className='profile'>
        <div className='image'>
            <img src={profile} alt="" />
            <div className='intro'>
              <h3>A WEB DESIGNER</h3>
              <h1>Monisha.</h1>
              <p>I’m a passionate web designer with a knack for creating visually appealing and user-friendly websites.</p>
            </div>
        </div>
        <div className='latest-works'>
          <marquee direction="left to right" scrollamount="5" loop>
              <p><RxDotFilled />LATEST WORK AND FEATURED<RxDotFilled /></p>          
          </marquee>
          <div className='works'>
            <div className='credentials' onClick={aboutnavigate}>
              <img src={profile} alt="" />
              <div className='more-info'>
                <div className='sub-div'>
                  <p>MY LEARNINGS</p>
                  <h2>Education</h2>
                </div>
                <div className='icon'>
                  <p><MdOutlineNotStarted /></p>
                </div>
              </div>
            </div>
            <div className='projects'>
              <h1>MY WORKS</h1>
              <img src={signature} alt="" />
              <div className='more-info'>
                <div className='sub-div'>
                    <p>SHOWCASE</p>
                    <h2>Projects</h2>
                  </div>
                  <div className='icon'>
                    <MdOutlineNotStarted />
                  </div>
              </div>
            </div>
          </div>
        </div>
     </div>
      <div className='services'>
          <div className='medias'>
            <div className='media-icons'>
                <p><IoGlobeOutline /></p>
                <p><FaLinkedinIn /></p>              
            </div>
            <div className='more-info'>
                <div className='sub-div'>
                  <p>STAY WITH ME</p>
                  <h2>Profiles</h2>
                </div>
                <div className='icon'>
                  <MdOutlineNotStarted />
                </div>
              </div>
          </div>
          <div className='contact-div'>
             <div className='contact-head'>
                <p><GiTronArrow /></p>
                <button className='contact-btn'>Contact me</button>
              </div>
             <div className='more-info'>
              <h1 className='sub-div'>Let's work <span>together.</span></h1>
              <div className='icon'>
                    <MdOutlineNotStarted />
                  </div>
             </div>
          </div>
          <div className='education-div'>
          <img src={education} alt="" />
              <div className='more-info'>
                <div className='sub-div'>
                  <p>MORE ABOUT ME</p>
                  <h2>Credentials</h2>
                </div>
                <div className='icon'>
                  <p><MdOutlineNotStarted /></p>
                </div>
              </div>
          </div>
      </div>
     </div>
    </>
  )
}

export default Profile