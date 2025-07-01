import React from 'react'
import LandingCard from '../LandingCards/LandingCard'

const LandingDetails = () => {
  return (
    <div className=''>

        <div className='grid justify-center items-center text-white '>

          <div>
            <p className='text-center text-4xl  lg:text-[56px] font-bold  '>
             Why ExpertDex?
            </p>


          <div className='my-3 '>
          <p className='font-normal lg:w-[945px] w-full text-base  px-10 text-center'>ExpertDex is built specifically for the complex demands of the manufacturing, oil, and gas industries. Whether you're transporting sensitive equipment or maximizing the value of your vehicle, our platform ensures secure, efficient, and reliable logistics</p>
        </div>

          </div>

        </div>

      


        <div className='lg:flex justify-center items-center gap-3 grid  py-10'>
             {/* <div className='bg-white text-center rounded-2xl px-6 '> */}
          <div className='bg-white px-1 lg:w-70 lg:h-53 h-40 text-center lg:px-6 lg:rounded-2xl rounded-xl grid'>

            <div className='flex justify-center items-center py-2'>
              <img src="/image/mainsector/truckcha.png" alt=""  />
            </div>

            <div className=''>
              <p className='lg:text-xl text-lg font-medium'>Specialized in Heavy & Industrial Logistics</p>
            </div>

            <div className=''>
              <p className='text-sm font-normal lg:px-3'>We focus exclusively on transporting industrial goods, machinery, and equipment with precision.</p>

            </div>


          </div>

             {/* <div className='bg-white  text-center rounded-2xl px-6 '> */}
          <div className='bg-white px-1 lg:w-70 lg:h-53 h-40 text-center lg:px-6 lg:rounded-2xl rounded-xl grid'>

            <div className='flex justify-center items-center py-2 '>
              <img src="/image/mainsector/sheildlogo.png" alt=""/>
            </div>

            <div className=''>
              <p className='lg:text-xl text-lg font-medium'>Safe, Verified Drivers and Vehicles</p>
            </div>

            <div className=''>
              <p className='text-sm font-normal lg:px-3 '>All drivers and vehicles go through strict verification and compliance checks to ensure safety and reliability on every trip.</p>

            </div>


          </div>

             {/* <div className='bg-white text-center rounded-2xl px-6 '> */}
          <div className='bg-white px-1 lg:w-70 lg:h-53 h-40 text-center lg:px-6 lg:rounded-2xl rounded-xl grid'>

            <div className='flex justify-center items-center py-2 '>
              <img src="/image/mainsector/antenna.png" alt=""  />
            </div>

            <div className=''>
              <p className='lg:text-xl text-lg font-medium'>Real-Time Tracking and  Communication</p>
            </div>

            <div className=''>
              <p className='text-sm font-normal lg:px-3 '>Track your deliveries live and stay informed with updates every step of the way. No guessing, no blind spots.</p>

            </div>


          </div>


             {/* <div className='bg-white text-center rounded-2xl px-6 '> */}
          <div className='bg-white px-1 lg:w-70 lg:h-53 h-40 text-center lg:px-6 lg:rounded-2xl rounded-xl grid'>

            <div className='flex justify-center items-center py-2'>
              <img src="/image/mainsector/suitcase.png" alt=""  />
            </div>

            <div className=''>
              <p className='lg:text-xl text-lg font-medium'>Built for Both Businesses & Drivers</p>
            </div>

            <div className=''>
              <p className='text-sm font-normal lg:px-3  '>Whether you’re booking transport or earning with your vehicle, ExpertDex offers seamless tools for both sides of the logistics journey.</p>

            </div>


          </div>

          

        </div>

        <div className='flex justify-center  '>
          <p className='flex lg:w-45 lg:h-15 w-40 h-13 border rounded-2xl border-white justify-center text-base font-normal text-white items-center'>Get Started</p>
        </div>
       

      
    </div>
  )
}

export default LandingDetails
