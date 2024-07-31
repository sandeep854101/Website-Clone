import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import logo from '../assets/logo.svg'
const Item = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <img src={logo} className=' cursor-pointer' alt="" />
            </div>
            <div className='flex items-center gap-5'>
                <ul className='flex items-center gap-5' >
                    <li className=' text-[17px] px-5 py-2 rounded cursor-pointer duration-200 hover:bg-[black] text-[white]'>Home</li>
                    <li className=' text-[17px] px-5 py-2 rounded cursor-pointer duration-200 hover:bg-[black] text-[white]'>About</li>
                    <li className=' text-[17px] px-5 py-2 rounded cursor-pointer duration-200 hover:bg-[black] text-[white]'>Shop</li>
                    <li className=' text-[17px] px-5 py-2 rounded cursor-pointer duration-200 hover:bg-[black] text-[white]'>Donate</li>
                    <li className=' text-[17px] px-5 py-2 rounded cursor-pointer duration-200 hover:bg-[black] text-[white]'>Contact</li>
                </ul>
                <button className='text-[20px] px-5 py-2 rounded cursor-pointer duration-200 bg-[black] text-[white]'>
                <IoCartOutline />

                </button>
            </div>
        </div>
    )
}

export default Item
