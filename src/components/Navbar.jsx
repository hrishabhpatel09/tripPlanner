import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-gray-800 h-10 flex items-center text-white justify-between sm:'>
      <div>Logo</div>
      <div>
        <ul className='flex gap-10 cursor-pointer'>
        <li><NavLink to='' className={({isActive})=>isActive?'font-semibold text-[#4cb5f9]':'hover:text-[#4cb5f9]'}>Home</NavLink></li>
        <li><NavLink to='/about' className={({isActive})=>isActive?'font-semibold text-[#4cb5f9]':'hover:text-[#4cb5f9]'}>About</NavLink></li>
        <li><NavLink to='/acheivements' className={({isActive})=>isActive?'font-semibold text-[#4cb5f9]':'hover:text-[#4cb5f9]'}>Our Acheivements</NavLink></li>
        <li><NavLink to='/contact' className={({isActive})=>isActive?'font-semibold text-[#4cb5f9]':'hover:text-[#4cb5f9]'}>Contact</NavLink></li>
        </ul>
      </div>
      <div></div>
    </div>
  )
}

export default Navbar
