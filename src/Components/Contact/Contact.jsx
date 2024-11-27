import React from 'react'
import "./Contact.css"
import { IoMailOpenOutline } from "react-icons/io5";
import { GiTronArrow } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <>
     <div className='contact'>
        <div className='contact-info'>
            <h3>CONTACT INFO</h3>
            <div className='mail'>
                <div className='contact-icon'><IoMailOpenOutline /></div>
                <div className='contact-details'>
                    <h4>MAIL ME</h4>
                    <p>nandhinikaruppusamy21@gmail.com</p>
                </div>
            </div>
            <div className='mail'>
                <div className='contact-icon'><FiPhoneCall /></div>
                <div className='contact-details'>
                    <h4>CALL ME</h4>
                    <p>+91 95854 11631</p>
                </div>
            </div>
            <div className='mail'>
                <div className='contact-icon'><IoLocationOutline /></div>
                <div className='contact-details'>
                    <h4>LOCATION</h4>
                    <p>Santhosh nagar,</p>
                    <p>Karumathampatti,</p>
                    <p>Coimbatore-641659.</p>
                </div>
            </div>
        </div>
        <div className='getin-touch'>
            <div className='getin-head'>
                <h1>Let's work <span>together.</span></h1>
                <p><GiTronArrow /></p>
            </div>
            <div className='whole-input1'>
                <input type="text" placeholder='First name*'/>
                <input type="text" placeholder='Last name*'/>
            </div>
            <div className='whole-input1'>
                <input type="number" placeholder='Mobile no*'/>
                <input type="email" placeholder='E-mail*'/>
            </div>
            <div className='input2'>
                <input type="text" placeholder='Your subject*'/>
                <textarea name="" id="" placeholder='Your message'></textarea>
            </div>
            <button>Send message</button>
        </div>
        </div> 
    </>
  )
}

export default Contact
