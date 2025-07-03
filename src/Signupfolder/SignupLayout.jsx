import React from 'react'
import Navbar from '../NavSelection/Navbar'
import { Outlet } from 'react-router-dom'
import Signupnav from './Signupnav'

export default function SignupLayout() {
  return (
    <div>

        <div className='relative h-0 '>
            <Signupnav/>
        </div>

        <Outlet/>
      
    </div>
  )
}
