import React from 'react'

export default function Stats({stats,details}) {
  return (
    <div>

        <div className=''>

            <div className='grid justify-center text-center  items-center'>
            <p className='text-[32px] lg:text-[56px] font-bold'>{stats}</p>
            <p className='lg:text-sm text-xs font-normal w-25 lg:w-full px-2'>{details}</p>

            </div>


        </div>
      
    </div>
  )
}
