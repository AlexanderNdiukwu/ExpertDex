import React from 'react'
import LoginButton from '../../Buttons/LoginButton'

export default function Heroabout() {
  return (
    <div className='lg:mx-[158px] mx-[15.5px]   '>
    {/* <div className='mx-[158px]  pt-23  '> */}

        <div className='  text-white '>
          <div className='leading-none'>
            <p className='hidden md:block md:text-[64px] whitespace-nowrap text-4xl font-semibold '>
              
           Driving the Future of 
        
            </p>
             <p className='block md:hidden md:text-[64px] whitespace-nowrap text-4xl font-semibold '>
              
           Driving the Future 
        
            </p>

            <p className='hidden md:block  md:text-[64px] text-4xl font-semibold '>
               Industrial Logistics in Africa!

            </p>


            <p className='block md:hidden md:text-[64px] text-4xl font-semibold '>
             of Industrial 


            </p>

              <p className='block md:hidden md:text-[64px] text-4xl font-semibold '>
             Logistics in Africa!


            </p>





          </div>
           

          

            <p className='lg:w-xl text-base font-normal pt-4  w-full '>
            {/* <p className='lg:w-xl text-base font-normal pt-4 text-black w-[360px] '> */}
ExpertDex is more than just a logistics platform — we’re a movement. Born out of the need for smarter, more reliable transport in the manufacturing, oil, and gas sectors, we connect businesses with capable vehicle owners, ensuring that critical deliveries happen faster, safer, and with less friction.            </p>


            <div className='flex lg:gap-8 items-center pt-[32px] gap-4 justify-center md:justify-start '>
                <LoginButton style=' border-2 border-white text-center flex items-center justify-center w-35 h-14  lg:w-45 lg:h-15 rounded-[20px]'/>
                <p className='border-2 bg-[#0037C6]   border-[#0037C6] flex items-center justify-center  text-center w-35 h-14 lg:w-45 lg:h-15 rounded-[20px]'>Find a vehicle</p>
            
                {/* <SignUpButton style='border-2 bg-[#0037C6]  border-[#0037C6] flex items-center justify-center  text-center w-42 h-15 lg:w-45 lg:h-15 rounded-[20px]'/> */}
                {/* <SignUpButton style='border-2 bg-[#0037C6]  border-[#0037C6] flex items-center justify-center  text-center w-42 h-15 lg:w-45 lg:h-15 rounded-[20px]'/> */}
            </div>

         
        </div>
      
    </div>
  )
}
