import React from 'react'

const LandingCard = ({img,desc}) => {
  return (
    <div className=''>

        <div className='bg-[#0037C6] rounded-lg p-6 '>

            <p className='text-center flex justify-center items-center'>
                <img src={img} alt="img" />
            </p>

            <p className='text-justify text-white py-5 text-sm font-medium'>
                {desc}
            </p>

        </div>
      
    </div>
  )
}

export default LandingCard
