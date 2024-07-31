import React from 'react'
import Navbar from './components/Navbar'
import Item from './components/Item'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Footer from './components/Footer'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className='bg-[#EB5757] py-[15px]'>
          <div className='w-[80%] m-auto' >
            <Item />
          </div>
        </div>
      </div>
      <div className='images images1 py-[15px] '>
        <div className='w-[80%] m-auto' >
          <Section1 />
        </div>
      </div>
      <Section2 />
      <div className='images images2 py-[15px] mt-[50px] '>
        <div className='w-[80%] m-auto' >
          <Section3 />
        </div>
      </div>
      <div className='w-[80%] m-auto' >
        <Section4 />
        <Section5 />
      </div>

      <div className='bg-[#222222] mt-[70px]'>
        <div className='w-[80%] m-auto ' >
          <Footer />
        </div>
      </div>



    </div>
  )
}

export default App
