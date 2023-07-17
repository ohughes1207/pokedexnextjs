import { FaBars } from 'react-icons/fa';


export default function Navbar() {
  return (
    <header className="bg-red-500 fixed top-0 w-full items-baseline flex h-[120px]">
      <NavigationIcon />
      <HomepageLogo />
      <WebTitle />
    </header>
  )
}

const NavigationIcon = () => (
  <div className='w-24 h-24 relative bottom-5 content-center left-5 mr-24 items-center'>
    <button className='btn bg-red-500 text-gray-100 hover:text-red-500 hover:bg-gray-100 shadow-xl hover:rounded-2xl rounded transition-all duration-300 ease-linear'>
      <FaBars size={65} />
    </button>
  </div>
)

const HomepageLogo = () => (
  <div className="container h-[110px] w-[110px] relative">
    <a href='/' className='h-[110px]'>
      <img src="mareep-nobg.png" alt="logo" className='relative top-1 hover:brightness-90'/> 
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