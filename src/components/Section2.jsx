import React from 'react'
import circle from '../assets/Circle.svg'
import triangle from '../assets/Triangle.svg'
import rectangle from '../assets/Rectangle.svg'
const Section2 = () => {
    return (
        <div className='w-[80%] m-auto mt-[40px]'>
            <div className='flex items-center justify-between'>
                <div className='font-sans text-[#333] '>
                    <p className='text-[24px]'>Ways to support</p>
                    <h2 className=' font-sans text-[40px] text-[#333] font-bold'>Support Acme Outdoors.</h2>
                </div>
                <div>
                    <p className='text-[18px]'>COVID-19 has forced us to close our retail space, but we need <br /> support from patrons like yourself now more than ever. Below, we’ve <br /> listed the best ways to help us through this season.</p>
                </div>
            </div>
            <div className='flex items-center justify-between mt-[50px]'>
                <div>
                    <div className='bg-[black] h-[350px] w-[350px] text-[white] font-bold  flex flex-col  gap-3  rounded'>
                        <p className='mb-[0px] text-[30px] ml-[50px] mt-[50px]'>01</p>
                        <p className='mb-[100px] text-[38px] text-center'>SHOP <br />
                            PRODUCTS</p>
                        <img src={circle} className=' absolute mt-[260px] ml-[260px]' alt="" />
                    </div>
                    <p className='mt-[50px] ml-[10px]'>Our full product line is still available online <br /> here on our site! Getting outside and hiking is <br /> still something you can do. Get your gear <br /> now!</p>
                </div>
                <div>
                    <div className='bg-[black] h-[350px] w-[350px] text-[white] font-bold   flex flex-col  gap-3  rounded'>
                        <p className='mb-[0px] text-[30px] ml-[50px] mt-[50px]'>02</p>
                        <p className='mb-[100px] text-[38px] text-center mt-7'>DONATE</p>
                        <img src={triangle} className=' absolute mt-[270px] ml-[230px]' alt="" />
                    </div>
                    <p  className='mt-[50px] ml-[10px]'>Since we've changed the way we operate to <br /> online only, and to ensure your safety, not all <br /> our staff is working. Donate to keep them <br /> afloat.</p>
                </div>
                <div>
                    <div className='bg-[black] h-[350px] w-[350px] text-[white] font-bold  flex flex-col  gap-3  rounded'>
                        <p className='mb-[0px] text-[30px] ml-[50px] mt-[50px]'>03</p>
                        <p className='mb-[100px] text-[38px] text-center'>BUY <br />
                            GIFT CARDS </p>
                        <img src={rectangle} className=' absolute mt-[270px] ml-[270px]' alt="" />
                    </div>
                    <p className='mt-[50px] ml-[10px]'>
                        Have all the outdoor gear you need for <br /> now? Buy a gift card and use it later or share <br /> it with friends and family.
                    </p>
                </div>


            </div>
        </div>
    )
}

export default Section2
