import React from 'react'

interface Props {
  user: string; // Define prop type for user
}

const Details: React.FC<Props> = ({ user }) => {
  return (
    <div className='bg-white w-full'>
      <div className='flex flex-col gap-5 p-5'>
        <div className='flex flex-col gap-5 border-b py-5'>
          <p className='font-semibold'>Personal Information</p>
          <div className='grid grid-cols-2 lg:grid-cols-5 gap-5'>
            <div>
              <span className='text-xs'>FULL NAME</span>
              <p className='text-sm font-semibold'>Teslim</p>
            </div>
            <div>
              <span className='text-xs'>PHONE NUMBER</span>
              <p className='text-sm font-semibold'>08067988642</p>
            </div>
            <div>
              <span className='text-xs'>EMAIL ADDRESS</span>
              <p className='text-sm font-semibold'>Teslim@gamil.com</p>
            </div>
            <div>
              <span className='text-xs'>BVN</span>
              <p className='text-sm font-semibold'>08067988642</p>
            </div>
            <div>
              <span className='text-xs'>GENDER</span>
              <p className='text-sm font-semibold'>Female</p>
            </div>
            <div>
              <span className='text-xs'>MARITAL STATUS</span>
              <p className='text-sm font-semibold'>Single</p>
            </div>
            <div>
              <span className='text-xs'>CHILDERN</span>
              <p className='text-sm font-semibold'>None</p>
            </div>
            <div>
              <span className='text-xs'>TYPE OF RECIDENCE</span>
              <p className='text-sm font-semibold'>Parent's Apartment</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5 border-b py-5'>
          <p className='text-sm font-semibold'>Education and Employment</p>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
            <div>
              <span className='text-xs'>LEVEL OF EDUCATION</span>
              <p className='text-sm font-semibold'>Teslim</p>
            </div>
            <div>
              <span className='text-xs'>EMPLOYMENT STATUS</span>
              <p className='text-sm font-semibold'>08067988642</p>
            </div>
            <div>
              <span className='text-xs'>SECTOR OF EMPLOYMENT</span>
              <p className='text-sm font-semibold'>Teslim@gamil.com</p>
            </div>
            <div>
              <span className='text-xs'>DURATION OF EMPLOYMENT</span>
              <p className='text-sm font-semibold'>08067988642</p>
            </div>
            <div>
              <span className='text-xs'>OFFICE EMAIL</span>
              <p className='text-sm font-semibold'>Female</p>
            </div>
            <div>
              <span className='text-xs'>MONTHLY INCOME</span>
              <p className='text-sm font-semibold'>Single</p>
            </div>
            <div>
              <span className='text-xs'>LOAN REPAYMENT</span>
              <p className='text-sm font-semibold'>None</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5 border-b py-5'>
          <p className='text-sm font-semibold'>Socials</p>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
            <div>
              <span className='text-xs'>TWITTER</span>
              <p className='text-sm font-semibold'>Teslim</p>
            </div>
            <div>
              <span className='text-xs'>FACEBOOK</span>
              <p className='text-sm font-semibold'>08067988642</p>
            </div>
            <div>
              <span className='text-xs'>INSTAGRAM</span>
              <p className='text-sm font-semibold'>Teslim@gamil.com</p>
            </div>
          </div>
        </div>
        <div className='py-5'>
          <p className='text-sm font-semibold'>Gaurantor</p>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
            <div>
              <span className='text-xs'>FULL NAME</span>
              <p className='text-sm font-semibold'>Teslim</p>
            </div>
            <div>
              <span className='text-xs'>PHONE NUMBER</span>
              <p className='text-sm font-semibold'>08067988642</p>
            </div>
            <div>
              <span className='text-xs'>EMAIL ADDRESS</span>
              <p className='text-sm font-semibold'>Teslim@gamil.com</p>
            </div>
            <div>
              <span className='text-xs'>RELATIONSHIP</span>
              <p className='text-sm font-semibold'>08067988642</p>
            </div>
            <div>
              <span className='text-xs'>FULL NAME</span>
              <p className='text-sm font-semibold'>Teslim</p>
            </div>
            <div>
              <span className='text-xs'>PHONE NUMBER</span>
              <p className='text-sm font-semibold'>08067988642</p>
            </div>
            <div>
              <span className='text-xs'>EMAIL ADDRESS</span>
              <p className='text-sm font-semibold'>Teslim@gamil.com</p>
            </div>
            <div>
              <span className='text-xs'>RELATIONSHIP</span>
              <p className='text-sm font-semibold'>08067988642</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details