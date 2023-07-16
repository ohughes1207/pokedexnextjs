import { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="bg-red-600 fixed top-0 w-full flex">
      <div>
        <button className='btn bg-red-600 text-gray-100 hover:text-red-600 hover:bg-gray-100 my-4 mx-4 shadow-2xl ease-in-out hover:rounded-3xl transition-all duration-300'>
          <FaBars size={65} />
        </button>
      </div>
      <div className="image-container" style={{ background: 'none' }}>
        <a href='/'>
          <img src="mareep-nobg.png" alt="logo" className='-my-24 -mx-40 scale-[0.35]'/> 
        </a>
      </div>
    </header>
  )
}