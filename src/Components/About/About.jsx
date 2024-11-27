import React from 'react'
import "./About.css"
import image from "../../Assets/images/profile.png"
import { GiTronArrow } from "react-icons/gi";
import { MdOutlineNotStarted } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import profile from "../../Assets/images/profile.png" 
import { FaUserGraduate } from "react-icons/fa";


const About = () => {
  return (
    <>
      <div className='about'>
        <div className='abt-img'>
          <img src={image} alt="" />
        </div>
        <div className='intro-container'>
          <div className='intro-head'>
            <h1>SELF SUMMARY</h1>
            <p><FaUserGraduate /></p>
          </div>
          <div className='abt-intro'>
            <p className='arrow-icon'><GiTronArrow /></p>
            <h1>MONISHA.</h1>
            <p>I'm specialized in building scalable, high-performance web applications using technologies.
            As a developer, I focus on writing clean, maintainable code, optimizing performance, and ensuring seamless integration between front-end and back-end. I’m passionate about learning new technologies and continuously improving my skill set to build impactful digital solutions.
            </p>
          </div>
        </div>
      </div>
      <div className='whole-div'>
      <div className='education-container'>
        <h3>EDUCATION</h3>
      </div>
      <div className='skills-container'>
        <h3>SKILLS</h3>
        <div className='skills'>
          <div className='skills-color1'>
          </div>
        </div>
        <div className='skills-head'>
          <p>HTML/CSS</p>
          <p>90%</p>
        </div>
        <div className='skills'>
          <div className='skills-color2'>
          </div>
        </div>
        <div className='skills-head'>
          <p>Javascript</p>
          <p>70%</p>
        </div>
        <div className='skills'>
          <div className='skills-color3'>
          </div>
        </div>
        <div className='skills-head'>
          <p>React</p>
          <p>80%</p>
        </div>
        <div className='skills'>
          <div className='skills-color4'>
          </div>
        </div>
        <div className='skills-head'>
          <p>Figma</p>
          <p>%</p>
        </div>
      </div>
      </div>
      <div className='contact-container'>
        <div className='credentials1'>
                <img src={profile} alt="" />
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
      </div>
    </>
  )
}

export default About
