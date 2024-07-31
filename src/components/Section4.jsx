import React from 'react'
import img1 from '../assets/camp.jpg'
import img2 from '../assets/glass.jpg'
import img3 from '../assets/bag.jpg'

const Section4 = () => {
    return (
        <div>
            <p className='font-normal  text-[20px] mt-3'>SHOP PRODUCTS</p>
            <h1 className='text-[35px] font-bold mb-[40px]'>Open 24/7/365.</h1>
            <div className='flex gap-5 justify-between '>
                <div className='flex flex-col justify-center items-center text-center gap-3 cursor-pointer w-[30%] h-auto'>
                    <img src={img1} alt="" className='rounded ' />
                    <p className='font-normal  text-[20px] '>White Tent </p>
                    <h2 className='font-bold text-[black]'>$ 200.00 USD</h2>
                    <button className='px-5 py-2 bg-[#EB5757] text-[white] font-bold rounded border-none hover:bg-[black] duration-200'>Details</button>
                </div>
                <div className='flex flex-col justify-center items-center text-center gap-3 cursor-pointer w-[30%] h-auto'>
                    <div className='h-full w-full'>
                        <img src={img2} className='rounded h-full w-full' alt="" />
                    </div>
                    <p className='font-normal  text-[20px] '>White Tent </p>
                    <h2 className='font-bold text-[black]'>$ 200.00 USD</h2>
                    <button className='px-5 py-2 bg-[#EB5757] text-[white] font-bold rounded border-none hover:bg-[black] duration-200'>Details</button>
                </div>

                <div className='flex flex-col justify-center items-center text-center gap-3 cursor-pointer w-[30%] h-auto'>
                    <img src={img3} alt="" className='rounded ' />
                    <p className='font-normal  text-[20px] '>Blue Canvas Pack</p>
                    <h2 className='font-bold text-[black]'>$ 95.00 USD <span className='text-[#EB5757] line-through '> $ 145.00 USD</span>
                    </h2>
                    <button className='px-5 py-2 bg-[#EB5757] text-[white] font-bold rounded border-none hover:bg-[black] duration-200'>Details</button>
                </div>

            </div>

            <div className='flex justify-center item-center mt-[60px]'>
                <button className='px-6 py-2 rounded border-none font-bold text-[white] bg-[black] hover:bg-[#EB5757] duration-200'>View All Products</button>
            </div>
        </div>
    )
}

export default Section4
