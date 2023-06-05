import React, { useRef, useState } from 'react'
import { AiOutlineFile } from 'react-icons/ai'
import { BsBellFill, BsBoxArrowRight, BsSearch } from 'react-icons/bs'
import { CgFileAdd, CgProfile } from 'react-icons/cg'
import { MdOutlineDashboard } from 'react-icons/md'
import { BiDownArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const MyTickets = () => {

    let limit = useRef(10);
    const [showLimit, setShowLimit] = useState(false);
    const [ticketData, showTicketData] = useState(false);
    let ticketNo = useRef(0);

    const data = [
        {
            ticketNo: '1234',
            subject: 'Login Issue',
            Status: 'In Progress',
            supportBy: 'Tech Support',
            date: '13/08/21',
            rate: '⭐⭐⭐⭐⭐'

        },
        {
            ticketNo: '1234',
            subject: 'Login Issue',
            Status: 'In Progress',
            supportBy: 'Tech Support',
            date: '13/08/21',
            rate: '⭐⭐⭐⭐⭐'

        },
        {
            ticketNo: '1234',
            subject: 'Login Issue',
            Status: 'In Progress',
            supportBy: 'Tech Support',
            date: '13/08/21',
            rate: '⭐⭐⭐⭐⭐'

        },
        {
            ticketNo: '1234',
            subject: 'Login Issue',
            Status: 'In Progress',
            supportBy: 'Tech Support',
            date: '13/08/21',
            rate: '⭐⭐⭐⭐⭐'

        },
        {
            ticketNo: '1234',
            subject: 'Login Issue',
            Status: 'In Progress',
            supportBy: 'Tech Support',
            date: '13/08/21',
            rate: '⭐⭐⭐⭐⭐'

        }
    ]

    const ticketActive = (index) => {
        ticketNo.current = index;
        showTicketData(true);
    }

    const logOut = async() => {
        await signOut(auth) ;
    }

    return (
        <div className={`${ticketData && 'bg-black/40'} relative`}>
            {
                ticketData &&
                <div className='w-[400px] h-[400px] absolute bg-white mx-auto shadow-lg right-1/4 left-1/4 my-24'>
                    <h1 className='text-center text-xl font-semibold my-3'>Ticket Details</h1>
                    <h4 className='ml-4 my-1'>Ticket no.: {data[ticketNo.current].ticketNo}</h4>
                    <h4 className='ml-4 my-1'>Date: {data[ticketNo.current].date}</h4>
                    <h4 className='ml-4 my-1'>Name: </h4>
                    <h4 className='ml-4 my-1'>Dept: </h4>
                    <h4 className='ml-4 my-1'>Title: </h4>
                    <h4 className='ml-4 my-1'>Description: </h4>
                    <h4 className='ml-4 my-1'>Category: {data[ticketNo.current].subject}</h4>
                    <h4 className='ml-4 my-1'>Type: </h4>
                    <h4 className='ml-4 my-1'>Priority: </h4>
                    <h4 className='ml-4 my-1'>Attachment: </h4>
                    <button className='w-[140px] bg-green-600 font-semibold text-white my-2 px-2 py-1 rounded-md mx-[32%]' onClick={() => { showTicketData(false) }}>Close</button>
                </div>
            }
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
                <div className='w-[70%] mx-auto'>
                    <h1 className='text-center font-semibold text-2xl mt-5 mb-3'>List of Tickets</h1>
                    <div className='flex bg-gray-300 items-center w-[220px] rounded-md'>
                        <input className='w-[200px] bg-gray-300 placeholder:text-black px-2 py-1 rounded-md' placeholder='Find Ticket' />
                        <BsSearch />
                    </div>
                    <div>
                        <div className='flex my-2 space-x-2 items-center'>
                            <h4>Show</h4>
                            <div className='flex items-center bg-gray-300 space-x-1 px-2 py-1'>
                                <h4>{limit.current}</h4>
                                <BiDownArrow onClick={() => { setShowLimit(!showLimit) }} />
                            </div>
                            <h4>Entries</h4>
                        </div>
                        {showLimit &&
                            <ul className='absolute space-x-1 bg-gray-500 text-white w-[50px]'>
                                <li onClick={limit.current = 5}>
                                    5
                                </li>
                                <li onClick={limit.current = 10}>
                                    10
                                </li>
                                <li onClick={limit.current = 20}>
                                    20
                                </li>
                                <li onClick={limit.current = 25}>
                                    25
                                </li>
                            </ul>
                        }
                        <table class="text-center w-[70vw] h-3/5">
                            <thead class="text-black w-full justify-center">
                                <tr class="flex mb-4 justify-around text-sm md:text-lg">
                                    <th class="p-4 w-1/4">Ticket No.</th>
                                    <th class="p-4 w-1/4">Subject</th>
                                    <th class="p-4 w-1/4">Status</th>
                                    <th class="p-4 w-1/4">Support By</th>
                                    <th class="p-4 w-1/4">Date</th>
                                    <th class="p-4 w-1/4">Rate</th>
                                </tr>
                            </thead>
                            <tbody className="text-xs md:text-sm w-full h-3/5 bg-gray-300">
                                {data.map((res, index) => {
                                    return (
                                        <tr className="flex justify-around text-black">
                                            <td class="p-4 w-1/4 text-blue-500 underline" onClick={() => ticketActive(index)}>{res.ticketNo}</td>
                                            <td class="p-4 w-1/4">{res.subject}</td>
                                            <td class="p-4 w-1/4"><button className='bg-green-500 font-bold px-2 py-1 rounded-md'>{res.Status}</button></td>
                                            <td class="p-4 w-1/4">{res.supportBy}</td>
                                            <td class="p-4 w-1/4">{res.date}</td>
                                            <td class="p-4 w-1/4">{res.rate}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyTickets
