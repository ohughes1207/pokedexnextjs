import { FaBars } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="bg-red-500 fixed top-0 w-full items-baseline flex h-[120px]">
      <div className='w-24 h-24 relative bottom-5 content-center left-5 mr-24 items-center'>
        <button className='btn bg-red-500 text-gray-100 hover:text-red-500 hover:bg-gray-100 shadow-xl hover:rounded-3xl transition-all duration-300 ease-linear'>
          <FaBars size={65} />
        </button>
      </div>
      <div className="container h-[110px] w-[110px] relative">
        <a href='/' className=' inline-block h-[110px]'>
          <img src="mareep-nobg.png" alt="logo" className='relative top-1'/> 
        </a>
      </div>
    </header>
  )
}

/*
export default function Navbar() {
  return (
    <header className="bg-red-600 fixed top-0 w-full items-baseline flex">
      <div>
        <button className='btn bg-red-600 text-gray-100 hover:text-red-600 hover:bg-gray-100 my-4 mx-4 mr-8 shadow-2xl hover:rounded-3xl transition-all duration-300'>
          <FaBars size={65} />
        </button>
      </div>
      <div className="container h-24 w-48 pt-1 items-center">
        <a href='/'>
          <img src="mareep-nobg.png" alt="logo" /> 
        </a>
      </div>
    </header>
  )
}
*/
