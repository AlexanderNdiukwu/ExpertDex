import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../NavSelection/Navbar'
import ContactHero from './contactsubfolder/ContactHero'
import ContactForm from './contactsubfolder/ContactForm'

export default function Contactpage() {
  return (
  <div className='' >

        <div className='bg-[url(/image/contactimage/contactmobile.png)] md:bg-[url(/image/contactimage/contactlogo.png)] bg-cover h-[100vh]    bg-no-repeat border '>
        
        {/* <div className=''>
            <Navbar/>
        
        </div> */}

       
    <div className='flex flex-col'>

        <div className=' lg:pt-[140px] pt-[90px] '>
        {/* <div className=' lg:pt-[60px] pt-[60px] '> */}
            
            <ContactHero/>

          
        </div> 

    </div>

        </div>

        <div className='relative grid lg:h-90 h-80 lg:justify-center'>

            <div className='relative lg:bottom-80 bottom-80'>
            <ContactForm/>

            </div>
        </div>


{/* 
        <div className='lg:px-[163px] px-[17.5px] py-10 '>
            <Footer/>
        
        </div> */}


      


        


      
    </div>
  )
}
