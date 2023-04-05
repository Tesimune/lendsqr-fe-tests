import AppLogo from "../AppLogo"
import { Bell, Chevron, Search } from "../Icons"
import { IoIosMenu } from "react-icons/io"


function Navbar() {
  return (
    <nav className='navbar'>

            <div className="flex justify-center items-center">
                <button className='text-2xl md:hidden' onClick={()=>{console.log('hello')}}>
                    <IoIosMenu />
                </button>
                <AppLogo />
            </div>

            <div className="w-full">
                <div className='flex justify-between items-center'>
                    <form className="flex rounded-lg h-10 ring-2 ring-secondary">
                        <input className="px-4 bg-transparent rounded-l-lg outline-none border-none flex-grow" type="search" placeholder="Search for anything" />
                        <button className="px-4 bg-secondary outline-none flex-grow">
                            <Search />
                        </button>
                    </form>

                    <div className="flex items-center gap-5">
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
