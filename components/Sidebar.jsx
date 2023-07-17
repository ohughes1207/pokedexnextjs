import React from 'react'

import { TbPokeball } from "react-icons/tb";
import { TbSearch } from 'react-icons/tb';

export default function Sidebar() {
  return (
    <div className='fixed left-0 w-32 flex flex-col bg-red-500 shadow-lg rounded-r-lg top-1/3'>
      <a href='/pokemon'>
        <SidebarIcon icon={<TbSearch size="75"/>} text='Search Pokemon' />
      </a>
      <a href='team-builder'>
        <SidebarIcon icon={<TbPokeball size="75"/>} text='Team Builder'/>
      </a>
    </div>
  )
}


const SidebarIcon = ({ icon, text }) => (
    <div className='sidebar-icon group'>
      {icon}
      <span className='sidebar-tooltip group-hover:scale-100'>
        {text}
      </span>
    </div>
)

/*
absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left
*/