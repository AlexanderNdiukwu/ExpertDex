import React from 'react'
import Navbar from '../NavSelection/Navbar'
import Footer from '../Footer/Footer'

import Stats from '../landingstats/Stats'
import Heroabout from './aboutsubfolder/Heroabout'
import Aboutsec1 from './aboutsubfolder/Aboutsec1'
import Aboutdiff from './aboutsubfolder/Aboutdiff'
import SubscribeLetter from '../Subscribe/SubscribeLetter'
import Subcribe from '../Subscribe/Subcribe'

export default function  AboutUs() {
  return (
    <div>

       <div className='bg-[url(/image/aboutimage/mobileabout.png)] lg:bg-[url(/image/aboutimage/aboutlogo.png)] bg-cover bg-center lg:h-[100vh]   bg-no-repeat border '>

       <div className='bg-black/20 lg:h-[100vh]'>
{/* 
        <div className=''>
            <Navbar/>
        </div> */}

       
    <div className='flex flex-col'>

        <div className=' lg:pt-[130px] pt-[90px]'>
        {/* <div className=' lg:pt-[75px] pt-[60px]'> */}
         <Heroabout/>

          
        </div> 

         <div className='flex justify-between text-white lg:mx-[158px] mx-[15.5px] mt-39 pb-7 lg:pb-0 items-center'>
              <Stats stats='4.5K+' details='Vehicles Registered'/>
              <Stats stats='200+' details='Industry Clients Served'/>
              <Stats stats='98%' details='On-time delivery'/>
           </div>

     

    </div>

       </div>

        </div>

        <div className='bg-[#F3F3F3] py-15'>
          <Aboutsec1/>
        </div>

        <div className='lg:px-[163px] px-[17.5px] py-15 bg-[#0073FF] '>
            <Aboutdiff/>
        </div>

        <div className=''>
          
            <SubscribeLetter/>
        </div>

     

        <div className='lg:px-[163px] px-[17.5px] py-10 bg-[#F3F3F3]' >

            <Subcribe/>
        </div>













{/*       
        <div className='lg:px-[163px] px-[17.5px] py-10 '>
            <Footer/>
        </div> */}

      
    </div>
  )
}
