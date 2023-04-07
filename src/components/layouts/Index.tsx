import { useState } from 'react';
import Navbar from './Navbar';
import DashboardSidebar from './Sidebar';

const Dashboard = ({children}: any) => {

    const [open, setOpen] = useState(true);
    const [expand, setExpand] = useState(true);

    return (
        <div className="bg-gray-50 min-h-screen">

            <Navbar />

            <section className="flex">
                <div className='lg:w-[10%]'>
                    <DashboardSidebar open={open}/>
                </div>
                <main className='h-full w-full p-3 lg:pl-[10%]'>
                    {children}
                </main>
            </section>
        </div>
    )
}

export default Dashboard;