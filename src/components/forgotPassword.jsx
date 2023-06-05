import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <>
            <div className='w-[100vw] h-[100vh] bg-[#55D6C2] flex items-center justify-center'>
                <div className='w-[80vw] h-[70vh] bg-[#8EDFd2] flex items-center justify-center'>
                    <div className='form w-[420px] flex flex-col items-center justify-center'>
                        <h3 className='text-center font-semibold mb-7 mx-4'>Don't worry.Enter your email below and we will send you a link to change password.</h3>
                        <input className='w-full p-1.5 placeholder:text-black border border-black' placeholder='Email' />
                        <button className='bg-green-500 text-white rounded-md w-[200px] py-1 mt-8'>Submit</button>
                        <button className='bg-[#1F4786] text-white rounded-md w-[200px] py-1 mt-4'><Link to='/login'> Sign In</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword
