import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0073FF] text-white lg:rounded-[64px] rounded-[32px] ' >

        <div className='lg:flex grid lg:mx-32 mx-[18px] justify-between py-10 border-b border-white'>

            <div className='grid'>

            <div className='flex gap-2  '>
            <div className=''>
                <img src="/images/NavBarimages/expertlogo.png" alt="logo" className=' ' />

            </div>
            <div>
                <p className='text-2xl font-normal'>ExpertDex</p>

            </div>

            </div>


            <div className='w-80 h-20 py-4'>
                ExpertDex mission statement is lorem ipsum dolor cit mesas ribuit mun chuy tun jesdt by lkir ryte one 
            </div>

            <div className='flex gap-4 items-center mt-5'>

                <div><img src="/image/mainsector/facebook.png" alt="" /></div>
                <div><img src="/image/mainsector/instagram.png" alt="" /></div>
                <div><img src="/image/mainsector/linkedin.png" alt="" /></div>
                <div><img src="/image/mainsector/whatsapp.png" alt="" /></div>
              

            </div>


            </div>




            <div className='flex flex-col gap-2 py-4 lg:py-0'>
                <p className='text-lg font-bold'>Quick Links</p>
                <p className='font-normal text-base'>Home</p>
                <p className='font-normal text-base'>About Us</p>
                <p className='font-normal text-base'>Contact Us</p>
                <p className='font-normal text-base'>FAQs</p>
            </div>


            <div className='flex flex-col gap-2'>
                <p className='font-bold text-lg'>Contact </p>

                <div className='flex gap-2 items-center'>
                <p>
                    <img src="/image/mainsector/location.png" alt="mail" />
                </p>

                <p className='font-normal text-base'>Support@ExpertDex.com</p>

                </div>

                <div className='flex gap-2 items-center'>
                <p> <img src="/image/mainsector/call.png" alt="mail" /></p>

                <p className='font-normal text-base'>Instagram</p>
                </div>

                <div className='flex gap-2 items-center'>
                <p> <img src="/image/mainsector/sms.png" alt="mail" /></p>

                <p className='font-normal text-base'>Facebook</p>
                </div>

                <div className='bg-white lg:w-[180px] w-[160px] h-[50px]  lg:h-[60px] rounded-2xl flex justify-center items-center mt-10'>

                    <p className='text-base font-normal text-black '>Get Started</p>

                </div>


            
            </div>

        


        </div>

        <div className='lg:flex grid lg:justify-between justify-center text-center  lg:mx-32 pb-10 py-4'>
            <p className='text-sm font-normal'>
            Copyright 2025 ExpertDex. All Rights Reserved
            </p>

            <p className='text-sm font-normal'>
           
                Privacy Policy
                •
                Terms & Conditions
            </p>

        
        </div>




      
    </div>
  )
}

export default Footer
