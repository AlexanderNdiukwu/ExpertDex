import React from 'react'
import Navbar from '../NavSelection/Navbar'
import Footer from '../Footer/Footer'
import HeroDes from '../HeroDescription/HeroDes'
import Stats from '../landingstats/stats'

export default function AboutUs() {
  return (
    <div>

       <div className='bg-[url(/image/mainsector/mobilebg.png)] lg:bg-[url(/image/landingpage/exportlandingp.png)] bg-cover bg-center lg:h-[100vh]   bg-no-repeat border '>
        
        <div className=''>
            <Navbar/>
        </div>

       
    <div className='flex flex-col'>

        <div className=' lg:pt-[75px] pt-[60px]'>
            <HeroDes/>

          
        </div> 

         <div className='flex justify-between text-white lg:mx-[158px] mx-[15.5px] mt-34 pb-7 lg:pb-0 items-center'>
              <Stats stats='4.5K+' details='Vehicles Registered'/>
              <Stats stats='200+' details='Industry Clients Served'/>
              <Stats stats='98%' details='On-time delivery'/>
           </div>

     

    </div>


       

       

        </div>

      
        <div className='lg:px-[163px] px-[17.5px] py-10 '>
            <Footer/>
        </div>

      
    </div>
  )
}
