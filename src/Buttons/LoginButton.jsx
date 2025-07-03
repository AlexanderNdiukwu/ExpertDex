import React from 'react'
import { Link } from 'react-router-dom'

const LoginButton = ({style}) => {
  return (
    <div>

        <div className='font-medium'>
            <p className={style} >
                 <Link to={'/auth'}>Start as a driver</Link>
            </p>
        </div>
      
    </div>
  )
}

export default LoginButton
