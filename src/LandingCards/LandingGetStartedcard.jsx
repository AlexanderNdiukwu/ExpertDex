import React from 'react'

const LandingGetStarted = ({img,desc,details}) => {
  return (
    <div>

            <div className='bg-white text-center w-96 rounded-2xl p-6 '>

            <p className='text-center flex justify-center items-center'>
                <img src={img} alt="img" />
            </p>
            <p className='text-3xl font-medium'>
                {details}
            </p>

            <p className='text-justify  py-5 text-xl font-medium'>
                {desc}
            </p>

            </div>


      
    </div>
  )
}

export default LandingGetStarted
