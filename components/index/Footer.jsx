import React from 'react';

import { BsDiscord } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className=" bg-gray-800 text-white py-10 absolute -bottom-[195px] w-full h-48">
      <Details />
    </footer>
  );
}


const Avatar = () => (
  <div className="w-40 h-40 -mt-5">
    <img src='avatar.jpg' alt='avatar' className='rounded-full'/>
  </div>
)

const Details = () => (
  <div className='flex justify-center'>
    <Avatar />
    <DetailsContent />
  </div>
)

const DetailsContent = () => (
  <div className='mt-1 ml-8'>
    <span className='text-lg'>Made with &hearts; by Olli</span>
    <PlatformDetails icon={<BsGithub size="21"/>} text='ohughes1207' href='https://github.com/ohughes1207'/>
    <PlatformDetails icon={<BsDiscord size="21"/>} text='princess_olli'/>
    <PlatformDetails icon={<AiFillInstagram size="21"/>} text='olli_hughes' href='https://www.instagram.com/olli_hughes/'/>
  </div>
)

const PlatformDetails = ({ icon, text, href }) => (
  <div className='flex items-center'>
    {icon}
    <a href={href}>
      <span className='flex pl-1'> {text} </span>
    </a>
  </div>
)

