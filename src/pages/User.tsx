import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs'
import Index from '../components/layouts/Index'
import Profile from '../components/profile/Profile'
import Details from '../components/profile/Details'
import { useParams } from 'react-router-dom';

export function useFetch(url: RequestInfo | URL) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setUser(result)
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
    }
    fetchUser()
  }, [url])

  return { loading, user };
}


const User = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const { loading, user } = useFetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <AiOutlineLoading3Quarters className='animate-spin text-2xl' />
      </div>
    )
  }

  return (
    <div>
      <Index>
        <div className="dashboard">
          <div>
            <Link to="/dashboard" className="flex items-center text-sm pt-5 pb-10 font-medium">
              <BsArrowLeft className='h-5 w-12' />
              <span>Back to Users</span>
            </Link>
            <div className='grid md:flex justify-between items-center gap-5 pt-5 pb-10'>
              <h1 className="md:text-3xl font-medium">User Details</h1>
              <div className='flex items-center gap-3.5'>
                <button className='text-red-500 border border-red-500 py-1.5 px-3 rounded-lg'>BLACKLIST USER</button>
                <button className='text-secondary border border-secondary py-1.5 px-3 rounded-lg'>ACTIVATE USER</button>
              </div>
            </div>
          </div>
          <section className='flex flex-col gap-5'>
            <Profile user={user} />
            <Details user={user} />
          </section>
        </div>
      </Index>
    </div>
  )
}

export default User