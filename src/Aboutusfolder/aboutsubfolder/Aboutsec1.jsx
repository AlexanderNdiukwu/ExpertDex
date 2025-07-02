import React from 'react'

export default function Aboutsec1() {
  return (
    <div className='lg:px-[159px] px-[17.5px] grid lg:grid-cols-2 justify-between '>

        <div >
            <div className='flex justify-center lg:justify-start'>
                <p className='lg:text-[56px] text-[32px] font-bold'>Our Mission</p>
            </div>

            <div>
                <p className='font-normal  w-full text-base text-center lg:text-start py-4 lg:py-0  '>Our mission is to revolutionize the way manufacturers and consumers interact by providing a reliable and user-friendly platform. We strive to empower consumers with access to top-quality products while supporting manufacturers in reaching a broader audience.</p>
            </div>
        </div>


        <div className='flex justify-end'>

          <div>
            <p><img src="/image/aboutimage/aboutmenuimg1.png" alt="" /></p>
          </div>
           <div>
            <p><img src="/image/aboutimage/img2.png" alt="" /></p>
          </div>
           <div>
            <p><img src="/image/aboutimage/img3.png" alt="" /></p>
          </div>
            
        </div>
      
    </div>
  )
}
