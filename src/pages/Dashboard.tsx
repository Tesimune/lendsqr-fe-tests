import React from 'react'
import Index from '../components/layouts/Index'
import Cards from '../components/dashboard/Cards';
import Users from '../components/dashboard/Users';

function Dashboard() {
  return (
    <div>
        <Index>
        <div className="dashboard">
          <h1 className="text-3xl pt-5 pb-10 font-medium">Users</h1>
          <Cards />
          <Users />
        </div>
      </Index>
    </div>
  )
}

export default Dashboard