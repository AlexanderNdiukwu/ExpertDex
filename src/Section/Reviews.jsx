import React from 'react'

const Reviews = () => {
  return (
    <div className=''>
     <div className='grid justify-center items-center'>
        <div className='flex justify-center text-center  items-center'>
          <p className='lg:text-[56px] text-4xl text-wrap font-bold'>Hear What our Users Have to Say</p>
        </div>

        <div className='my-3 '>
          <p className='font-normal lg:w-[945px] w-[390px] px-10 text-center'>Here’s what some of our users have to say - both clients and drivers</p>
        </div>

      </div>



        <div className='pt-4 lg:grid lg:grid-cols-3 gap-7 lg:gap-12 flex overflow-scroll lg:overflow-hidden w-full  '>
          <div className='min-w-87 h-42 grid px-4 py-2 bg-white '>
            <div>
              <p>“We needed to move a 2-ton pump urgently — ExpertDex found us a driver within 90 minutes. Saved us hours.”</p>
            </div>

            <div>
            <div>
              <p>John Cris</p>
            </div>
            <div>
              <p>Logistics Coordinator, Oilfield Services Co.</p>
            </div>

            </div>
          </div>

              <div className='min-w-87 h-42 grid px-4  py-2 bg-white'>
            <div>
              <p>“I got matched with consistent deliveries for construction sites. It’s become my main income source.”</p>
            </div>

            <div>
            <div>
              <p>Fatima B</p>
            </div>
            <div>
              <p>Flatbed Truck Owner</p>
            </div>

            </div>
          </div>


              <div className='min-w-87 h-42 grid px-4 py-2 w bg-white'>
            <div>
              <p>“I got matched with consistent deliveries for construction sites. It’s become my main income source.”</p>
            </div>

            <div>
            <div>
              <p>jonhson d </p>
            </div>
            <div>
              <p>Flatbed Truck Owner</p>
            </div>

            </div>
          </div>
          


          <div className='lg:col-span-3   justify-center lg:pt-6'>

            <div className=' flex lg:gap-12 gap-7 justify-center  '>
              <div className='w-87 h-42 grid px-4 py-2 lg:py-0  bg-white'>
            <div>
              <p>“I got matched with consistent deliveries for construction sites. It’s become my main income source.”</p>
            </div>

            <div>
            <div>
              <p>Eliza</p>
            </div>
            <div>
              <p>Logistics Coordinator</p>
            </div>

            </div>
          </div>


              <div className='w-87 h-42 grid px-4 py-2 bg-white'>
            <div>
              <p>“We needed to move a 2-ton pump urgently — ExpertDex found us a driver within 90 minutes. Saved us hours.”</p>
            </div>

            <div>
            <div>
              <p>John Cris</p>
            </div>
            <div>
              <p>Logistics Coordinator, Oilfield Services Co.</p>
            </div>

            </div>
          </div>

            </div>


          </div>

        </div>

      
    </div>
  )
}

export default Reviews
