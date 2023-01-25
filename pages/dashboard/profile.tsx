import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

function Profile() {

    const [type, setType] = useState('password');
    const { data: session } = useSession();

    const togglePassword = () => {
        if (type === 'password') {
            setType('text');
        }
        else {
            setType('password');
        }
    }

    return (
        <div className='rounded-xl md:border md:border-neutral-100 md:p-6'>
            <form action="#" className='grid md:grid-cols-2 gap-6 w-full p-3 md:py-5'>
                <div className='flex items-center w-full relative'>
                    <label htmlFor="name" className='absolute -top-6 text-sm text-gray-800 mx-1'>First Name</label>
                    <input
                        type="text"
                        name='username'
                        placeholder={session?.user?.name?.substring(0, 8)!}
                        required
                        id='name'
                        autoComplete="off"
                        className='px-3 py-2 rounded-md border bg-white caret-indigo-500 font-medium text-black outline-none focus:ring-2 focus:ring-violet-500 w-full'
                    />
                </div>
                <div className='flex items-center w-full relative mt-4 md:mt-0'>
                    <label htmlFor="name" className='absolute -top-6 text-sm text-gray-800 mx-1'>Last Name</label>
                    <input
                        type="email"
                        required
                        placeholder={session?.user?.name?.substring(8, 20)!}
                        name='email'
                        id='email'
                        autoComplete="off"
                        className='px-3 py-2 rounded-md border bg-white caret-indigo-500 font-medium text-black outline-none focus:ring-2 focus:ring-violet-500 w-full'
                    />
                </div>
                <div className='flex items-center w-full relative mt-4'>
                    <label htmlFor="name" className='absolute -top-6 text-sm text-gray-800 mx-1'>Current Password</label>
                    <input
                        type={type}
                        required
                        placeholder='****'
                        name='password'
                        id='password'
                        autoComplete="off"
                        className='px-3 py-2 rounded-md border bg-white caret-indigo-500 font-medium text-black outline-none focus:ring-2 focus:ring-violet-500 w-full'
                    />
                    {type === 'password' && (<IoEye onClick={togglePassword} className='text-gray-500 hover:text-gray-900 absolute right-4 w-6 h-6 cursor-pointer' />)}
                    {type === 'text' && (<IoEyeOff onClick={togglePassword} className='text-gray-500 hover:text-gray-900 absolute right-4 w-6 h-6 cursor-pointer' />)}
                </div>
                <div className='flex items-center w-full relative mt-4'>
                    <label htmlFor="name" className='absolute -top-6 text-sm text-gray-800 mx-1'>New Password</label>
                    <input
                        type={type}
                        required
                        name='password'
                        id='password'
                        autoComplete="off"
                        className='px-3 py-2 rounded-md border bg-white caret-indigo-500 font-medium text-black outline-none focus:ring-2 focus:ring-violet-500 w-full'
                    />
                    {type === 'password' && (<IoEye onClick={togglePassword} className='text-gray-500 hover:text-gray-900 absolute right-4 w-6 h-6 cursor-pointer' />)}
                    {type === 'text' && (<IoEyeOff onClick={togglePassword} className='text-gray-500 hover:text-gray-900 absolute right-4 w-6 h-6 cursor-pointer' />)}
                </div>
                <div className='flex md:col-span-2 items-center w-full relative mt-4'>
                    <label htmlFor="name" className='absolute -top-6 text-sm text-gray-800 mx-1'>Email Address</label>
                    <input
                        type="email"
                        required
                        placeholder={session?.user?.email!}
                        name='email'
                        id='email'
                        autoComplete="off"
                        className='px-3 py-2 rounded-md border bg-white caret-indigo-500 font-medium text-black outline-none focus:ring-2 focus:ring-violet-500 w-full'
                    />
                </div>
                <div className='md:col-span-2 w-full my-4 flex items-center justify-center'>
                    <button type='submit' className='capitalize hover:shadow-lg w-full hover:shadow-purple-500/40 bg-gradient-to-l to-violet-500 via-purple-500 from-fuchsia-500 text-white px-4 py-2 font-normal hover:font-medium rounded-md relative transition-all duration-300 hover:scale-105 active:scale-95 ease-in-out flex items-center justify-center gap-4'>
                        Update Profile
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Profile
