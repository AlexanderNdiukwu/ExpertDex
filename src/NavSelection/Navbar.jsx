import React, { useState } from 'react'
import LoginButton from '../Buttons/LoginButton'
import SignUpButton from '../Buttons/SignUpButton'
import { Link } from 'react-router-dom'

const Navbar = () => {

    let [show , setShow ] = useState(false)

    let showmenubar = ()=>{
        setShow(!show)
    }
    let Cancelmenubar = ()=>{
        setShow(!show)
    }


  return (
    <div className={`text-white ${show ? 'bg-white' : 'bg-transparent'} `}>
    {/* <div className='text-white w-full  '> */}

        <div className='flex items-center lg:mx-[158px] mx-[15.5px]   justify-between lg:pt-2 pt-3 '>
            <div className='flex gap-2  '>
            <div className=''>
                <div className={`${show ? 'hidden':'block'}`}>
                <img src="/image/NavBarimages/expertlogo.png" alt="logo" className='' />

                </div>

                  <div className={`${show ? 'block' : 'hidden'}`}>
                <img src="/image/Expertlogo.png" alt="logo" className='' />

                </div>


            </div>

            
            <div>
                <p className={`text-2xl font-normal ${show ? 'text-black' : 'text-white'}`}><Link to={'/'} >ExpertDex</Link></p>

            </div>

            </div>




            <div className='hidden md:block'>
                <div className='text-base font-medium  flex gap-10  '>
                    <p  ><Link to={'/'} >Home</Link></p>
                    
                    <p><Link to={'/AboutUs'} >About Us</Link></p>
                    <p><Link to={'/Contactpage'} >Contact Us</Link></p>
                    <p><Link to={'/FAQS'} >FAQs</Link></p>

                </div>
            </div>


            {/* <div className={`${show ? 'hidden':'block'}`}> */}
            <div className='hidden md:block'>
                <div className='flex  '>
                {/* <SignUpButton style='border-2 bg-[#0037C6]  border-[#0037C6] flex items-center justify-center  text-center w-45 h-15 rounded-[20px]'/> */}

                    <SignUpButton style='bg-[#0037C6] text-white text-center border-[#0037C6] px-[40px] py-[15px] justify-center flex items-center  rounded-[15px]'/> 
                </div>
            </div>

            {/* <div className='lg:hidden'> */}
            <div className={`md:hidden ${show ? 'hidden' :'block'}`}>

                <img src="/image/mainsector/meunbar.png" alt="" onClick={showmenubar} />
            </div>
            <div className={`lg:hidden ${show ? 'block':'hidden'}`}>
            {/* <div className='lg:hidden'> */}
                <img src="/image/cancel.png" alt="" onClick={Cancelmenubar} />
            </div>





        </div>

        {show &&
        
        
  
        <div className='bg-white w-full h-fit absolute grid py-4 transition-opacity ease-in-out duration-500 '>

            <div className='grid text-black py-3 gap-4 justify-center text-center'>
                <p className='text-base font-medium hover:border-b border-black hover:bg-black/5'><Link to={'/'} >Home</Link></p>
                <p className='text-base font-medium  hover:border-b border-black'><Link to={'/AboutUs'} >About Us</Link></p>
                <p className='text-base font-medium  hover:border-b border-black'><Link to={'/Contactpage'} >Contact Us</Link></p>
                <p className='text-base font-medium  hover:border-b border-black'><Link to={'/FAQS'} >FAQs</Link></p>
            </div>

            <div className='mx-10'>

                <p className='text-white bg-[#0073FF] w-full text-center py-2 hover:bg-[#0073FF]/90 hover:scale-110 rounded-xl'>Get Started</p>

            </div>


            
    

        </div>
        
        
        }









      
    </div>
  )
}

export default Navbar
