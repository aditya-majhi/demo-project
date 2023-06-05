import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../auth/firebase-config'
import Dashboard from './dashboard';
import { Link } from 'react-router-dom';

const Signup = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [user, setUser] = useState() ;

    const signUp = async () => {
        try {
            const acc = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            setUser(acc) ;
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            {user ?
                <Dashboard />
                :
                <div className='w-[100vw] h-[100vh] bg-[#55D6C2] flex items-center justify-center'>
                    <div className='w-[80vw] h-[70vh] bg-[#8EDFd2] flex items-center justify-center'>
                        <div className='form w-[420px] flex flex-col items-center justify-center'>
                            <h1 className='font-bold font-sans text-2xl italic text-center mb-4'>Helpdesk System</h1>
                            <h4 className='text-center mb-4 font-semibold'>Sign up here</h4>
                            <div className='space-y-4'>
                                <input className='w-full p-1.5 placeholder:text-black border border-black' placeholder='Username' />
                                <input className='w-full p-1.5 placeholder:text-black border border-black' placeholder='Password' onChange={(event) => { setPassword(event.target.value) }} />
                                <input className='w-full p-1.5 placeholder:text-black border border-black' placeholder='Email' onChange={(event) => { setEmail(event.target.value) }} />
                            </div>
                            <button className='bg-[#1F4786] text-white rounded-md w-[200px] py-1 mt-6' onClick={signUp}>Sign Up</button>
                            <div className='flex justify-between w-full px-4 my-7'>
                                <Link className='text-sm text-red-600 font-semibold' to='/forgot'>Forgot Password</Link>
                                <Link className='font-semibold' to='/login'>Sign In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Signup
