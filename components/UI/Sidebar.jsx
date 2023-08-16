import React from 'react'
import { TbPokeball } from "react-icons/tb";
import { TbSearch } from 'react-icons/tb';
import { useUI } from './UIContext';

export default function Sidebar() {
  const { SidebarVisible } = useUI()
  return (
    <div className={`fixed left-0 w-32 flex flex-col bg-red-500 shadow-lg rounded-r-3xl top-1/3 py-3 duration-300 transition-all ${SidebarVisible ? 'ml-0' : '-ml-32'}`}>
      <a href='/pokedex'>
        <SidebarIcon icon={<TbSearch size="85"/>} text='Pokedex' />
      </a>
      <a href='/team-builder'>
        <SidebarIcon icon={<TbPokeball size="85"/>} text='Team Builder' />
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