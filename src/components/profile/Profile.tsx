import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'


function Profile ({user}: any) {
  console.log(user)
  
  return (
    <div>
      <div className='grid items-center bg-white w-full'>
        <div className='flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-5 p-5'>
          <div className='flex items-center bg-gray-300 p-7 rounded-full'>
            <AiOutlineUser className='h-12 w-12' />
          </div>
          <div className='flex flex-col gap-1 p-5'>
            <p className='flex justify-center text-xl font-medium'>Teslim</p>
            <p className='flex justify-center text-xs'>mLNfelj</p>
          </div>
          <div className='flex flex-col gap-1 border-y lg:border-y-0 lg:border-x border-slate-300 p-5'>
            <span className='flex justify-center'>User's Tier</span>
            <span className='flex justify-center'>***</span>
          </div>
          <div className='flex justify-center flex-col gap-1 p-5'>
            <span className='flex justify-center text-xl font-medium'>#200,0000</span>
            <span className='flex justify-center text-xs'>1234567890/Providus Bank</span>
          </div>
        </div>
        <div className='hidden md:block'>
          <nav className='flex lg:justify-evenly items-end gap-5 text-sm w-full'>
            <button className='py-1 px-5 text-secondary border-b-2 border-secondary'>General Details</button>
            <button className='py-1 px-5 hover:text-secondary hover:border-b-2 border-secondary'>Documents</button>
            <button className='py-1 px-5 hover:text-secondary hover:border-b-2 border-secondary'>Bank Details</button>
            <button className='py-1 px-5 hover:text-secondary hover:border-b-2 border-secondary'>Loans</button>
            <button className='py-1 px-5 hover:text-secondary hover:border-b-2 border-secondary'>Savings</button>
            <button className='py-1 px-5 hover:text-secondary hover:border-b-2 border-secondary'>App and Systems</button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Profile