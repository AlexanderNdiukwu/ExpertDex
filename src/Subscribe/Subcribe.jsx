import React from 'react'
import SubscribeLetter from './SubscribeLetter'
import InputField from './InputField'

const Subcribe = () => {
  return (
    <div>



      
        

        <div className='py-7'>

          <div className='grid justify-center items-center'>
        <div className='grid justify-center items-center'>
          <p className='lg:text-[56px] text-[32px] font-bold text-center '>Subscribe to Our Newsletter</p>
        </div>

        <div className='my-3 '>
          <p className='font-normal lg:w-[945px] w-full lg:px-10 text-center'>We will send you updates on our best deals and offers</p>
        </div>

        </div>


        <div className='flex justify-center pt-2'>
        <InputField/>

        </div>

        </div>


      
    </div>
  )
}

export default Subcribe
