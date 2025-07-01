import React from 'react'

const InputField = () => {
  return (
    <div>
        <div className='lg:flex text-center'>
            <p className=''>
            <input type="text" placeholder='Enter your email' className='border p lg:rounded-l-lg rounded-lg lg:pr-80 pr-40 py-3 pl-3' />

            </p>

            <div className='bg-[#0037C6] lg:rounded-r-lg lg:mx-0 my-2 lg:my-0  mx-20 rounded-lg py-2 px-4 font-medium justify-center text-lg flex  text-white'>
                <p>
                Subscribe

                </p>
            </div>


        </div>
      
    </div>
  )
}

export default InputField
