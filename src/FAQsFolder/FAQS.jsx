import React from 'react'
import FAQShero from './FAQSdubfolder/FAQShero'
import FAQSQuestion from './FAQSdubfolder/FAQSQuestion'

export default function FAQS() {
  return (
  <div className='' >
 
         <div className='bg-[url(/image/contactimage/contactmobile.png)] md:bg-[url(/image/contactimage/contactlogo.png)] bg-cover h-[100vh]    bg-no-repeat border '>
         
      
 
        
     <div className='flex flex-col'>
 
         <div className=' lg:pt-[140px] pt-[90px] '>
         {/* <div className=' lg:pt-[60px] pt-[60px] '> */}
             
             <FAQShero/>
 
           
         </div> 
 
     </div>
 
         </div>
 
         <div className='relative grid lg:h-80 h-140 lg:justify-center'>
 
             <div className='relative lg:bottom-80 bottom-91'>
             <FAQSQuestion/>
 
             </div>
         </div>
 
 
 
 
 
       
 
 
         
 
 
       
     </div>
  )
}
