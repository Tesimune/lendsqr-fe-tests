import AppLogo from '../components/AppLogo'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
    const [show, setShow] = useState(false);


    return (
      <div className="font-avenia">
        <div className="p-5 min-h-screen flex items-center justify-center">
            <div className="absolute top-5 left-5">
                <AppLogo />
            </div>

            <div className="grid md:grid-cols-2 max-w-[1200px] gap-10 mx-auto">
                
                <div className="md:w-[32rem] relative w-12 hidden lg:block">
                    <img src='/images/mockup.svg' alt="MOCKUP" />
                </div>

                <div className="bg-white">
                    <h1 className="font-avenia_bold text-primary md:text-4xl">Welcome!</h1>
                    <p className="mb-10">Enter Login Details</p>

                    <form className="flex flex-col gap-5 md:max-w-[400px]">
                        <input type="text" placeholder="Email Address" className="p-3 rounded ring-1 ring-dark/50 outline-none" />
                        <div className="rounded ring-1 ring-dark/40 text-sm flex items-center">
                            <input type={show ? "text" : "password"} className='bg-transparent p-3 flex-grow outline-none' placeholder="Password" />
                            <button type="button" onClick={() => setShow(!show)} className='uppercase font-semibold text-secondary px-5 tracking-wider'>
                                {show ? "Hide" : "Show"}
                            </button>
                        </div>
                        <a href="#/" className="text-secondary font-semibold uppercase text-sm tracking-wider">Forgot password?</a>
                        <Link to='/dashboard' className="p-3 bg-secondary text-white rounded font-bold">
                            Log in
                        </Link>
                    </form>
                </div>
            </div>
        </div>
      </div>
    )
}