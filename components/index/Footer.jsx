import React from 'react';

export default function Footer() {
  return (
    <footer className=" bg-gray-800 text-white py-10 absolute -bottom-[195px] w-full h-48">
      <Avatar />
    </footer>
  );
}


const Avatar = () => (
  <div className="w-36 h-36">
    <img src='avatar.jpg' alt='avatar' className='rounded-full relative'/>
  </div>
)