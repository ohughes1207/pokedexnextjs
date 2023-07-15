import { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-red-600 fixed top-0 w-full flex">
    <div>
      <button className='btn bg-red-600 text-gray-100 hover:text-red-600 hover:bg-gray-100 my-4 mx-4 shadow-2xl rounded-4xl hover:rounded-xl transition-all duration-300'>
        <FaBars size={65}/>
      </button>
    </div>
      <div>
        <img src="./mareep.png" alt="Mareep"/> 
      </div>
    </nav>
  )
}