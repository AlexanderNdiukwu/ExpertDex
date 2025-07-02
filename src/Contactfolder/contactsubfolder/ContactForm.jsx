import React from 'react'

export default function ContactForm() {
  return (
    <div>

        <div className='lg:w-2xl lg:h-[666px] grid lg:py-8 py-5  border rounded-xl border-black/10 lg:px-9 px-4 mx-4 lg:mx-0 bg-white'>
            <div className='py-4 '>
                <p className='lg:text-[56px] font-bold text-3xl whitespace-nowrap '>Get In Touch With Us</p>
            </div>

            <div className='lg:grid lg:grid-cols-2 gap-3'>
                <div>
                    <label htmlFor="name" className='font-normal text-lg'>First Name</label>
                    <p><input type="text" id='name' placeholder='Alexander'   className='w-full border h-10 px-2 border-[#868686] rounded-lg '/></p>
                </div>

                  <div>
                    <label htmlFor="name" className='font-normal text-lg'>Last Name</label>
                    <p><input type="text" id='name' placeholder='Joe' className='w-full border h-10 px-2 border-[#868686] rounded-lg '/></p>
                </div>

                  <div>
                    <label htmlFor="name" className='font-normal text-lg'>Email</label>
                    <p><input type="text" id='name' placeholder='Alexander@gmail.com' className='w-full border h-10 px-2 border-[#868686] rounded-lg '/></p>
                </div>

                  <div>
                    <label htmlFor="name" className='font-normal text-lg'>Phone number (optional)</label>
                    <p><input type="text" id='name'placeholder='080234598899' className='w-full border h-10 px-2 border-[#868686] rounded-lg ' /></p>
                </div>
                  <div className='col-span-2'>
                    <label htmlFor="name" className='font-normal text-lg'>Message</label>
                    <p><textarea name="Message" id="" className='w-full h-34 px-2 border border-[#868686]' placeholder='Message'></textarea></p>
                </div>
            </div>

            <div className='py-4'>
                <button type="submit" className='text-base font-normal w-full rounded-2xl  bg-[#0073FF] h-15 '>Send Message</button>
            </div>
        </div>
      
    </div>
  )
}
