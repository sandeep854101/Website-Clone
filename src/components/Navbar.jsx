import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className=' flex  items-center justify-center bg-[black] w-[100%] py-[20px] text-[white] gap-[15px]'>
        <button className='px-[30px] py-[5px] bg-[#EB5757] rounded-full'>Announcement</button>
        <p className='text-[18px]'>How we're responding to COVID-19</p>
      </nav>
    </div>
  )
}

export default Navbar
