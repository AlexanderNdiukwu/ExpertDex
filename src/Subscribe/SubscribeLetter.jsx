import React from 'react'
import InputField from './InputField'
import SignUpButton from '../Buttons/SignUpButton'
import LoginButton from '../Buttons/LoginButton'

const SubscribeLetter = () => {
  return (
    <div className='grid lg:grid-cols-2  '>
        <div>
            <p className='relative overflow-hidden '>
                <img src="/image/mainsector/truck.png" alt="image" className=' w-full ' />
            </p>
        </div>
        <div className='flex flex-col lg:gap-10 gap-5 py-10 lg:mx-20 mx-2  lg:justify-center'>
        {/* <div className='flex flex-col gap-10 py-40 mx-40'> */}
            <p className='lg:text-[56px] text-4xl text-center  font-bold '>
            {/* <p className='text-5xl font-medium '> */}
           Ready to Join the Future of Industrial Logistics?
            </p>

            <p className='text-base font-normal text-center  '>
            Get started today—book a vehicle or earn with yours.
            </p>

           <div className='flex lg:gap-8 gap-4 items-center lg:pt-[32px] pt-[16px] justify-center  '>
                <LoginButton style=' border-2 border-[#0073FF] text-[#0073FF] text-center flex items-center justify-center w-35 lg:w-45 h-15 rounded-[20px]'/>
                <p className='border-2 bg-[#0037C6]  border-[#0037C6] flex items-center text-white justify-center  text-center w-35 lg:w-45 h-15 rounded-[20px]'>Find a vehicle</p>
                {/* <SignUpButton style='border-2 bg-[#0037C6]  border-[#0037C6] flex items-center justify-center  text-center w-45 h-15 rounded-[20px]'/> */}
            </div>


        </div>

      
    </div>
  )
}

export default SubscribeLetter
