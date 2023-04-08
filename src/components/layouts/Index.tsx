import { useState } from 'react';
import Navbar from './Navbar';
import DashboardSidebar from './Sidebar';

const Dashboard = ({children}: any) => {
    const [open, setOpen] = useState(false);
    
    const bar = () => {
        if (open === true){
            setOpen(false)
        }else{
            setOpen(true)
        }
    }

    return (
        <div className="bg-gray-50 min-h-screen">

            <Navbar bar={bar} open={open}/>

            <section className="flex">
                {open === true ? (
                    <div className='lg:hidden'>
                        <DashboardSidebar />
                    </div>
                ):(
                    <div className='lg:w-[10%] hidden lg:block'>
                        <DashboardSidebar />
                    </div>
                )}
                <main className='h-full w-full p-3 lg:pl-[10%]'>
                    {children}
                </main>
            </section>
        </div>
    )
}

export default Dashboard;