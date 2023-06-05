import React from 'react'
import { AiOutlineFile } from 'react-icons/ai'
import { BsBellFill, BsBoxArrowRight } from 'react-icons/bs'
import { CgFileAdd, CgProfile } from 'react-icons/cg'
import { MdOutlineDashboard } from 'react-icons/md'
import profile from '../assets/pngegg (3).png'
import { Link } from 'react-router-dom'

const Profile = () => {

  const logOut = async () => {
    await signOut(auth);
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
          <BsBoxArrowRight onClick={logOut} />
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
        <div>
          <h1 className='my-2 ml-5 text-2xl font-semibold'>User Profile</h1>
          <div className='flex w-[75vw] h-[75vh] lg:w-[80vw] lg:h-[80vh] bg-[#55D6C2] mx-[3%] pt-[3%]'>
            <div className='w-[50%]'>
              <div className='w-[90%] mx-auto bg-white h-[300px] rounded-md'>
                <img src={profile} className='mx-auto w-[120px] pt-3' />
                <h4 className='ml-4 my-1.5 font-semibold mt-5'>Username</h4>
                <h4 className='ml-4 my-1.5 font-semibold'>Contact Number</h4>
                <h4 className='ml-4 my-1.5 font-semibold'>Email</h4>
                <h4 className='ml-4 my-1.5 font-semibold'>Department</h4>
              </div>
            </div>
            <div className='w-[50%]'>
              <div className='w-[90%] bg-white h-[200px] rounded-md items-center flex flex-col'>
                <h1 className='my-3 text-xl font-semibold'>Give Your Feedback</h1>
                <input className='bg-gray-300 placeholder:text-black px-3 py-1 mb-2' placeholder='[Lorem Ipsum]' />
                <h2>⭐⭐⭐⭐⭐</h2>
                <button className='w-[180px] mt-3 font-semibold bg-[#55D6C2] px-3 py-1 rounded-md'>Submit Feedback</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
