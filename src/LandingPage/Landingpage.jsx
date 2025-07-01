import React, { Suspense } from 'react'
import Navbar from '../NavSelection/Navbar'
import HeroDes from '../HeroDescription/HeroDes'
import Section1 from '../Section/Section1'

import LandingDetails from '../LandingDetails/LandingDetails'
import LandingGetStarted from '../LandingGetStarted/LandingGetStarted'
import Subcribe from '../Subscribe/Subcribe'
import Footer from '../Footer/Footer'
import Stats from '../landingstats/Stats'
import Reviews from '../Section/Reviews'
import SubscribeLetter from '../Subscribe/SubscribeLetter'


const Landingpage = () => {
  return (
    <div className='' >

        <div className='bg-[url(/image/mainsector/mobilebg.png)] md:bg-[url(/image/landingpage/exportlandingp.png)] bg-cover bg-center lg:h-[100vh]   bg-no-repeat border '>
        
        <div className=''>
            <Navbar/>
        </div>

       
    <div className='flex flex-col'>

        <div className=' lg:pt-[60px] pt-[60px]'>
            <HeroDes/>

          
        </div> 

         <div className='flex justify-between text-white lg:mx-[158px] mx-[15.5px] mt-20 pb-7 lg:pb-0 items-center'>
              <Stats stats='4.5K+' details='Vehicles Registered'/>
              <Stats stats='200+' details='Industry Clients Served'/>
              <Stats stats='98%' details='On-time delivery'/>
              
           </div>

     

    </div>


       

       

        </div>


        <div className='lg:px-[163px] px-[17.5px] py-10  '>
            <Section1/>
         
        </div>

        <div className='lg:px-[163px] px-[17.5px] py-10 bg-[#0073FF] '>
            <LandingDetails/>
        </div>

        <div className='lg:px-[163px] px-[17.5px] py-10 bg-[#F3F3F3]'>
            <Reviews/>

        </div>

        <div className=''>
            <SubscribeLetter/>
        </div>

     

        <div className='lg:px-[163px] px-[17.5px] py-10 bg-[#F3F3F3]' >

            <Subcribe/>
        </div>


        <div className='lg:px-[163px] px-[17.5px] py-10 '>
            <Footer/>
        </div>


      


        


      
    </div>
  )
}

export default Landingpage
