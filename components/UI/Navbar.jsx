import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useUI } from './UIContext';

export default function Navbar() {

  return (
    <header className="bg-red-500 fixed top-0 w-full items-baseline flex">
      <NavigationIcon />
      <HomepageLogo />
    </header>
  )
}

const NavigationIcon = () => {
  
  const { SidebarVisible, setSidebarVisible } = useUI()
  
  const toggleSidebar = () => {
    setSidebarVisible(!SidebarVisible);
  }
  return (
    <div className='w-24 h-24 relative content-center bottom-2 left-5 mr-24'>
      <button className={`text-gray-100 shadow-xl hover:rounded-2xl rounded transition-all duration-300 ease-linear ${SidebarVisible ? 'text-red-500 rounded-2xl bg-gray-100' : 'bg-red-500'}`} onClick={toggleSidebar}>
        <FaBars size={90} />
      </button>
    </div>
  )
}


const HomepageLogo = () => (
  <div className="container h-[110px] w-[110px] relative">
    <a href='/' className='h-[110px]'>
      <img src="mareep-nobg.png" alt="logo" className='relative top-1 hover:brightness-[.8] transition-all duration-100'/> 
    </a>
  </div>
)

const WebTitle = () => (
  <div className=''>
    <span className=' text-5xl text-white inline-block'>
      Pokedex Web App
    </span>
  </div>
)

/*
ALT LOGO

const HomepageLogo = () => (
  <div className="container h-[110px] w-[110px] relative">
    <a href='/' className='h-[110px]'>
      <img src="shaymin.png" alt="logo" className='relative top-1 hover:brightness-90 rotate-[145deg]'/> 
    </a>
  </div>
)
*/
