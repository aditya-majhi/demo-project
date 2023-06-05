import React from 'react'
import { BsBellFill, BsBoxArrowRight } from 'react-icons/bs'
import { CgProfile, CgFileAdd } from 'react-icons/cg'
import { MdOutlineDashboard } from 'react-icons/md'
import { AiOutlineFile } from 'react-icons/ai'
import { signOut } from 'firebase/auth'
import { auth } from '../auth/firebase-config'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const logOut = async() => {
        await signOut(auth) ;
    }

    return (
        <>
            <nav className='h-12 w-full z-10 bg-[#55D6C2] flex justify-between'>
                <h1 className='italic font-bold text-3xl ml-3 pt-1 text-white'>Helpdesk</h1>
                <div className='flex items-center justify-center space-x-3 mr-5'>
                    <div className='flex rounded-md border border-black'>
                        <div className='bg-black text-white font-semibold text-sm px-2 rounded-l-md'>BM</div>
                        <div className='font-semibold text-sm px-2.5'>BI</div>
                    </div>
                    <BsBellFill />
                    <Link to='/profile'><CgProfile /></Link>
                    <BsBoxArrowRight onClick={logOut}/>
                </div>
            </nav>
            <div className='flex'>
                <nav className='h-[100vh] w-44 bg-gray-300 space-y-4 pt-4'>
                    <div className='flex space-x-3 items-center font-semibold ml-3'>
                        <MdOutlineDashboard />
                        <Link to='/dashboard'>Dashboard</Link>
                    </div>
                    <div className='flex space-x-3 items-center font-semibold ml-3'>
                        <CgFileAdd />
                        <Link to='/newticket'>New Ticket</Link>
                    </div>
                    <div className='flex space-x-3 items-center font-semibold ml-3'>
                        <AiOutlineFile />
                        <Link to='/myticket'>My Ticket</Link>
                    </div>
                </nav>
                <div className='w-full h-full'>
                    <h1 className='text-center mt-6 text-2xl font-semibold mb-4'>Dashboard</h1>
                    <div className='flex space-x-7 justify-center'>
                        <div className='w-[180px] border rounded-md h-[180px] flex justify-between flex-col bg-[#3066BE] shadow-gray-600 shadow-md'>
                            <h4 className='text-center font-semibold w-1/2 mx-auto mt-2'>Total Tickets</h4>
                            <h1 className='text-6xl mb-4 text-center font-semibold'>12</h1>
                        </div>
                        <div className='w-[180px] border rounded-md h-[180px] flex justify-between flex-col bg-green-500 shadow-gray-600 shadow-md'>
                            <h4 className='text-center font-semibold w-1/2 mx-auto mt-2'>Total Solved</h4>
                            <h1 className='text-6xl mb-4 text-center font-semibold'>8</h1>
                        </div>
                        <div className='w-[180px] border rounded-md h-[180px] flex justify-between flex-col bg-red-500 shadow-gray-600 shadow-md'>
                            <h4 className='text-center font-semibold w-1/2 mx-auto mt-2'>Total Awaiting Approval</h4>
                            <h1 className='text-6xl mb-4 text-center font-semibold'>2</h1>
                        </div>
                        <div className='w-[180px] border rounded-md h-[180px] flex justify-between flex-col bg-[#F5E960] shadow-gray-600 shadow-md'>
                            <h4 className='text-center font-semibold w-1/2 mx-auto mt-2'>Total in Progress</h4>
                            <h1 className='text-6xl mb-4 text-center font-semibold'>2</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
