import React from 'react'
import "./Footer.css"
import { ImLinkedin2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer-list'>
            <Link to='/'><p>Home</p></Link>
            <Link to='/about'><p>About</p></Link>
            <Link to='/portfolio'><p>Portfolio</p></Link>
            <Link to='/contact'><p>Contact</p></Link>
        </div>
        <div className='footer-icons'>
            <p><ImLinkedin2 /></p>
            <p><FaInstagram /></p>
            <p><FaTwitter /></p>
            <p><IoMailUnreadOutline /></p>
        </div>
      </div>
    </>
  )
}

export default Footer
