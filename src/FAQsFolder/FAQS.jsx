import React from 'react'
import FAQShero from './FAQSdubfolder/FAQShero'
import FAQSQuestion from './FAQSdubfolder/FAQSQuestion'

export default function FAQS() {
  return (
  <div className='' >
 
         <div className='bg-[url(/image/FAQSimage/FAQSmobile.png)] md:bg-[url(/image/FAQSimage/FAQSlogo.png)] bg-cover h-[100vh]    bg-no-repeat border '>
         
      <div className='bg-black/15 lg:h-[100vh]'>
          
     <div className='flex flex-col'>
 
         <div className=' lg:pt-[140px] pt-[90px] '>
         {/* <div className=' lg:pt-[60px] pt-[60px] '> */}
             
             <FAQShero/>
 
           
         </div> 
 
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
