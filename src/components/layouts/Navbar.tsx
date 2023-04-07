import AppLogo from "../AppLogo"
import { Bell, Chevron, Search } from "../Icons"
import { IoIosMenu } from "react-icons/io"


const Navbar = () => {
  return (
    <nav className='sticky top-0 h-[80px] w-full shadow flex items-center md:gap-24 justify-between px-5 md:px-10 bg-white z-50'>

            <div className="flex justify-center items-center gap-3">
                <button className='text-2xl md:hidden' onClick={()=>{console.log('hello')}}>
                    <IoIosMenu className="h-9 w-7" />
                </button>
                <AppLogo />
            </div>

            <div className="w-full">
                <div className='flex justify-between items-center'>
                    <div className="hidden lg:block">
                        <form className="flex rounded-lg h-10 ring-2 ring-secondary">
                            <input className="px-4 bg-transparent rounded-l-lg outline-none border-none flex-grow" type="search" placeholder="Search for anything" />
                            <button className="px-4 bg-secondary">
                                <Search />
                            </button>
                        </form>
                    </div>

                    <div className="flex justify-end items-center gap-5 w-full">
                        <a href='#/'>
                            <span className="hidden md:block link ml-auto">Docs</span>
                        </a>
                        <button className="hidden md:block link">
                            <Bell />
                        </button>
                        <div className="flex items-center gap-2">
                            <div className="w-9 h-9 rounded-full bg-black/30" />
                            <p className='hidden md:block'>Adedeji</p>
                            <Chevron />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
