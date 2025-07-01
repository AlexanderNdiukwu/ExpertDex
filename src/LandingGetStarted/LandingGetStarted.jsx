import React from 'react'
import LandingGetStartedcard from '../LandingCards/LandingGetStartedcard'

const LandingGetStarted = () => {
  return (
    <div className='bg-[#7572FF]  '>

        <div className='mx-32 py-30 grid gap-10 '>
            <p className='text-4xl font-medium'>
            ExpertDex Empowers You to do More
            </p>
            <p className='text-2xl font-medium'>
            Explore a range of features designed to streamline your workflow
            </p>


            <p >
                <LandingGetStartedcard img='../images/LandingPageimages/GetStartedImage.png' details='Direct Connections' desc='ExpertDex fosters direct relationships between manufacturers and consumers, minimizing delays and complexities.'/>
              

            </p>


            <p className='border-2 border-white text-2xl whitespace-nowrap rounded-2xl font-bold text-white w-72 px-23 py-4'>
              Get started
            </p>

            

        </div>

        <div className='relative'>
          <p>
            <img src='../images/LandingPageimages/iPhone.png' alt="img" className='absolute right-34 bottom-0 w-2xl ' />
          </p>
        </div>
      
    </div>
  )
}

export default LandingGetStarted
