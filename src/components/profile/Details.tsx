import React from 'react'


function Details ({user}: any) {

  return (
    <div className='bg-white w-full'>
      <div className='flex flex-col gap-5 p-5'>
        <div className='flex flex-col gap-5 border-b py-5'>
          <p className='font-semibold'>Personal Information</p>
          <div className='grid grid-cols-2 lg:grid-cols-5 gap-5'>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>FULL NAME</span>
              <p className='text-sm font-semibold'>{user.profile.firstName} {user.profile.lastName}</p>
            </div>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>PHONE NUMBER</span>
              <p className='text-sm font-semibold'>{user.phoneNumber}</p>
            </div>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>EMAIL ADDRESS</span>
              <p className='text-sm font-semibold'>{user.email}</p>
            </div>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>BVN</span>
              <p className='text-sm font-semibold'>{user.profile.bvn}</p>
            </div>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>GENDER</span>
              <p className='text-sm font-semibold'>{user.profile.gender}</p>
            </div>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>MARITAL STATUS</span>
              <p className='text-sm font-semibold'>Single</p>
            </div>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>CHILDERN</span>
              <p className='text-sm font-semibold'>None</p>
            </div>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>TYPE OF RECIDENCE</span>
              <p className='text-sm font-semibold'>Parent's Apartment</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5 border-b py-5'>
          <p className='text-sm font-semibold'>Education and Employment</p>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>LEVEL OF EDUCATION</span>
              <p className='text-sm font-semibold'>{user.education.level}</p>
            </div>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>EMPLOYMENT STATUS</span>
              <p className='text-sm font-semibold'>{user.education.employmentStatus}</p>
            </div>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>SECTOR OF EMPLOYMENT</span>
              <p className='text-sm font-semibold'>{user.education.sector}</p>
            </div>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>DURATION OF EMPLOYMENT</span>
              <p className='text-sm font-semibold'>{user.education.duration}</p>
            </div>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>OFFICE EMAIL</span>
              <p className='text-sm font-semibold'>{user.education.officeEmail}</p>
            </div>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>MONTHLY INCOME</span>
              <p className='text-sm font-semibold'>{user.education.monthlyIncome}</p>
            </div>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>LOAN REPAYMENT</span>
              <p className='flex gap-3 text-sm font-semibold'>{user.education.loanRepayment}</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5 border-b py-5'>
          <p className='text-sm font-semibold'>Socials</p>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>TWITTER</span>
              <p className='text-sm font-semibold'>{user.socials.twitter}</p>
            </div>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>FACEBOOK</span>
              <p className='text-sm font-semibold'>{user.socials.facebook}</p>
            </div>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>INSTAGRAM</span>
              <p className='text-sm font-semibold'>{user.socials.instagram}</p>
            </div>
          </div>
        </div>
        <div className='py-5'>
          <p className='text-sm font-semibold'>Gaurantor</p>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>FULL NAME</span>
              <p className='text-sm font-semibold'>{user.guarantor.firstName} {user.guarantor.lastName}</p>
            </div>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>ADDRESS</span>
              <p className='text-sm font-semibold'>{user.guarantor.address}</p>
            </div>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>GENDER</span>
              <p className='text-sm font-semibold'>{user.guarantor.gender}</p>
            </div>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>PHONE NUMBER</span>
              <p className='text-sm font-semibold'>{user.guarantor.phoneNumber}</p>
            </div>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>EMAIL ADDRESS</span>
              <p className='text-sm font-semibold'>{user.email}</p>
            </div>
            <div className='text-ellipsis overflow-hidden'>
              <span className='text-xs'>RELATIONSHIP</span>
              <p className='text-sm font-semibold'>{user.guarantor.gender}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details