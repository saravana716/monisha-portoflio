import React from 'react'
import "./Navbar.css"
import logo from "../../Assets/images/portfolioLogo.png"
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonRemoveOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { BsTelephoneMinus } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <div className='nav'>
    <div className='navbar'>
        <div className='logo'>
          <img src={logo} alt="" />
        </div>
        <div className='navlist'>
          <Link to="/"><p>Home <IoHomeOutline /></p></Link>
          <Link to="/about"><p>About <IoPersonRemoveOutline /> </p></Link>
          <Link to="/portfolio"><p>Portfolio <PiSuitcaseSimpleDuotone /></p></Link>
          <Link to="/contact"><p>Contact <BsTelephoneMinus /></p></Link>
          {/* <p>Skills <GoArrowUpRight /></p> */}
          {/* <p>Education <IoBookOutline /></p> */}
        
        </div> 
        <div className='hireme-btn'>
            <button>Hire me</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Navbar