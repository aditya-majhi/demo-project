import React from 'react'
import { AiOutlineFile } from 'react-icons/ai'
import { BsBellFill, BsBoxArrowRight } from 'react-icons/bs'
import { CgFileAdd, CgProfile } from 'react-icons/cg'
import { MdOutlineDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'

const NewTicket = () => {

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
                <div className='w-[70%] mx-auto space-y-6'>
                    <h1 className='text-center text-3xl mt-2 font-semibold'>Create New Ticket</h1>
                    <div className='flex justify-between'>
                        <div className='w-[47%] space-y-3'>
                            <div className='flex justify-between items-center'>
                                <label htmlFor='ticket-no' className='text-xl font-semibold'>Ticket No.:</label>
                                <input id='ticket-no' className='bg-gray-300 px-1 py-0.5 rounded-md' />
                            </div>
                            <div className='flex justify-between items-center'>
                                <label htmlFor='name' className='text-xl font-semibold'>Name:</label>
                                <input id='name' className='bg-gray-300 px-1 py-0.5 rounded-md' />
                            </div>
                        </div>
                        <div className='w-[47%] space-y-3'>
                            <div className='flex justify-between items-center'>
                                <label htmlFor='date' className='text-xl font-semibold'>Date:</label>
                                <input id='date' className='bg-gray-300 px-1 py-0.5 rounded-md' />
                            </div>
                            <div className='flex justify-between items-center'>
                                <label htmlFor='department' className='text-xl font-semibold'>Department:</label>
                                <input id='department' className='bg-gray-300 px-1 py-0.5 rounded-md' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor='subject' className='text-xl font-semibold'>Subject:</label>
                        <input id='subject' className='bg-gray-300 px-1 py-0.5 rounded-md' />
                    </div>
                    <div className='flex'>
                        <div className='w-[48%] space-y-1.5'>
                            <div className='flex flex-col space-y-2'>
                                <label htmlFor='category' className='text-xl font-semibold'>Category:</label>
                                <input id='category' className='bg-gray-300 px-1 py-0.5 rounded-md' />
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <label htmlFor='type' className='text-xl font-semibold'>Type:</label>
                                <input id='type' className='bg-gray-300 px-1 py-0.5 rounded-md' />
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <label htmlFor='priority' className='text-xl font-semibold'>Priority:</label>
                                <input id='priority' className='bg-gray-300 px-1 py-0.5 rounded-md' />
                            </div>
                        </div>
                        <div className='flex flex-col w-full ml-5 space-y-2'>
                            <label htmlFor='description' className='text-xl font-semibold'>Description:</label>
                            <input id='description' className='bg-gray-300 h-full px-1 py-0.5 rounded-md' />
                        </div>
                    </div>
                    <div>
                        <button className='w-[25%] py-1 bg-[#35c4ae] font-semibold text-lg rounded-md '>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewTicket
