import React from 'react'
import LoginButton from '../Buttons/LoginButton'
import SignUpButton from '../Buttons/SignUpButton'


const HeroDes = () => {
  return (
    <div className='lg:mx-[158px] mx-[15.5px]   '>
    {/* <div className='mx-[158px]  pt-23  '> */}

        <div className='  text-white '>
          <div className='leading-none'>
            <p className=' lg:text-[64px] text-[40px] font-semibold '>
              
           Powering Logistics 
            </p>
            <p className='lg:text-[64px] text-[40px] font-semibold '>
              for Heavy Industries.

            </p>

          </div>
           

          

            <p className='lg:w-xl text-base font-normal pt-4 text-black w-[360px] '>
            ExpertDex bridges the gap between businesses that need reliable, heavy-duty transportation and verified drivers with the right vehicles to deliver. Whether you are a company moving critical equipment or a vehicle owner looking to maximize your income, our platform offers a seamless and efficient solution
            </p>


            <div className='flex lg:gap-8 items-center pt-[32px] gap-4  '>
                <LoginButton style=' border-2 border-white text-center flex items-center justify-center w-42 h-15  lg:w-45 lg:h-15 rounded-[20px]'/>
                <p className='border-2 bg-[#0037C6]  border-[#0037C6] flex items-center justify-center  text-center w-42 h-15 lg:w-45 lg:h-15 rounded-[20px]'>Find a vehicle</p>
                
                {/* <SignUpButton style='border-2 bg-[#0037C6]  border-[#0037C6] flex items-center justify-center  text-center w-42 h-15 lg:w-45 lg:h-15 rounded-[20px]'/> */}
                {/* <SignUpButton style='border-2 bg-[#0037C6]  border-[#0037C6] flex items-center justify-center  text-center w-42 h-15 lg:w-45 lg:h-15 rounded-[20px]'/> */}
            </div>

         
        </div>
      
    </div>
  )
}

export default HeroDes
