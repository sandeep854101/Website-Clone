import React from 'react'
import logo from '../assets/logo.svg'
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div >
      <div className='flex justify-between items-center py-[40px]'>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
         <ul className='flex items-center gap-[20px] text-[26px] text-[white]'>
          <li><AiFillTwitterSquare /></li>
          <li><FaFacebook /></li>
          <li><FaInstagram /></li>
         </ul>
        </div>
      </div>
      <div className='flex items-center justify-center pb-[40px]'>
        <p className='text-[white]'>Made In <a href="#" className='text-[#EB5757] underline underline-offset-2'>Webflow.</a> © 2020.</p>
      </div>

    </div>
  )
}

export default Footer 
