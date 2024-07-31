import React from 'react'
import img1 from '../assets/ladies.jpg'
const Section5 = () => {
    return (
        <div>
            <div className='mt-[60px] flex'>
                <div className='w-[20%]'>
                    <img src={img1} alt="" className=' absolute w-[22%] h-[60%] left-[200px] top-[2680px]  rounded' />
                </div>
                <div className='bg-[#222222] rounded w-[90%] '>
                    <div className='ml-[420px] py-5'>
                        <h2 className='text-[45px] font-bold text-[white]'>Shop Local.</h2>
                        <p className='text-[white] text-[16px] font-weight: 700'>
                            We know that during COVID-19, a lot of folks <br /> around the city and state are feeling uneasy about <br /> the future - we’re not sure what the future holds <br /> either. <br />
                            <br />
                            That said: we know that we love making sure you <br /> have the gear you need for your adventures, and <br /> we’re going to keep doing that - with our team - <br /> until the city tells us we can’t.
                            <br /><br />

                            But as long as folks like yourself support small <br /> businesses around the city, then we’ll be here — <br /> every day, making sure your orders arrive on time.
                            <br />
                            <br />
                            -------
                            <br />
                            <br />
                            Jane & John Doe <br />
                            <b> Acme Outdoors</b>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section5
