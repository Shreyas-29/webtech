import React, { useEffect, useState, FormEventHandler, useRef } from 'react';
import { signOut, useSession, signIn } from 'next-auth/react'
import Head from 'next/head';
import Image from 'next/image';
import { BsGoogle } from 'react-icons/bs'
import { toast } from 'react-hot-toast';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const SigninPage = () => {

    const { data: session } = useSession();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('password');


    const togglePassword = () => {
        if (type === 'password') {
            setType('text');
        }
        else {
            setType('password');
        }
    }


    const authenticate = async (name: any, email: any, password: any) => {
        try {
            toast.success('Your are successfully signed in.');
            return { authenticate: true };
        } catch (error) {
            console.log(error);
        }
    }

    // const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!name || !email || !password) {
            toast.error('All fields are required.');
            return;
        }
        authenticate(name, email, password)
            .then((res) => {
                if (res?.authenticate) {
                    // Storing the user data in localstorage
                    window.localStorage.setItem('name', name);
                    window.localStorage.setItem('email', email);
                    window.localStorage.setItem('password', password);
                    Router.push('/');
                    return session;
                } else {
                    toast.error('Please Enter corrent information');
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error('An error occured, Please try again.');
            });
        setName('');
        setEmail('');
        setPassword('');

    };
    useEffect(() => {
        setTimeout(() => {
            handleSubmit
        }, 1000);
    }, []);




    if (session) {
        return (
            <div>
                <Head>
                    <title>Webtech | Signin </title>
                    <link rel="icon" href="/favicon.svg" />
                </Head>
                <div className='container mx-auto flex flex-col items-center justify-center !my-12 gap-8'>
                    <div className='flex flex-col items-center justify-center px-16 py-12 my-12 sm:px-16 border rounded-3xl space-y-5 max-w-md'>
                        <h2 className='text-xl font-medium capitalize text-center'>Welcome, <span className='mx-2 text-black'>{session.user!.name}</span> </h2>
                        <Image
                            src={session.user?.image || '/avatar.jpg'}
                            alt={'user'}
                            unoptimized
                            width={1000}
                            height={1000}
                            referrerPolicy="no-referrer"
                            className='w-20 h-20 rounded-full object-cover object-center shadow-md'
                        />
                        <p className='text-base font-medium text-gray-700 !mb-5 text-center'>Go to
                            <Link href={'/dashboard'} className='mx-1 hover:text-violet-500 font-semibold'>Dashboard</Link>
                            to create post and explore more articles.</p>
                        <button onClick={() => signOut()} className='w-full !mx-10 capitalize hover:shadow-lg hover:shadow-purple-500/40 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 text-white px-4 py-2 font-medium rounded-md relative transition-all duration-300 hover:scale-105 active:scale-95 ease-in-out flex items-center justify-center gap-4'>
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <section className='container mx-auto px-4 !sm:px-16 items-center flex justify-center flex-col gap-8'>
                <Head>
                    <title>Webtech | Signin </title>
                    <link rel="icon" href="/favicon.svg" />
                </Head>
                <div className='flex flex-col items-center justify-center my-12 w-full mx-auto lg:px-40'>
                    <header className='w-full mx-auto mb-8'>
                        <div className='flex flex-col items-center justify-center py-4 sm:py-8 w-full text-2xl lg:text-3xl font-bold space-y-4'>
                            Sign Up to
                            <h3 className='text-3xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 mt-4 to-fuchsia-500 font-semibold uppercase'>
                                Webtech
                            </h3>
                        </div>
                    </header>
                    <div className='flex flex-col items-center justify-center py-8 lg:py-16 px-6 container border rounded-xl lg:rounded-[40px] bg-white'>
                        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center pt-10 pb-5'>
                            <div className='flex flex-col items-center justify-center space-y-10  px-0 sm:px-8 py-4 w-full'>
                                <div className='flex items-center w-full relative'>
                                    <label htmlFor="name" className='absolute -top-6 text-sm text-gray-800 mx-1'>Name</label>
                                    <input type="text" name='username' onChange={(e) => setName(e.target.value)} value={name} id='name' placeholder='' autoComplete="off"
                                        className='px-3 py-2 border rounded-md bg-white caret-indigo-500 font-medium text-black outline-none focus:ring-2 focus:ring-violet-500 w-full' />
                                </div>
                                <div className='flex items-center w-full relative'>
                                    <label htmlFor="name" className='absolute -top-6 text-sm text-gray-800 mx-1'>Email</label>
                                    <input
                                        type="text"
                                        name='email'
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        id='email'
                                        autoComplete="off"
                                        className='px-3 py-2 border rounded-md bg-white caret-indigo-500 font-medium text-black outline-none focus:ring-2 focus:ring-violet-500 w-full' />
                                </div>
                                <div className='flex items-center w-full relative'>
                                    <label htmlFor="name" className='absolute -top-6 text-sm text-gray-800 mx-1'>Password</label>
                                    <input
                                        type={type}
                                        name='username'
                                        onChange={(e) => setPassword(e.target.value)}
                                        id='name'
                                        autoComplete="off"
                                        className='px-3 py-2 border rounded-md bg-white caret-indigo-500 font-medium text-black outline-none focus:ring-2 focus:ring-violet-500 w-full' />
                                    {type === 'password' && (<IoEye onClick={togglePassword} className='text-gray-500 hover:text-gray-900 absolute right-4 w-6 h-6 cursor-pointer' />)}
                                    {type === 'text' && (<IoEyeOff onClick={togglePassword} className='text-gray-500 hover:text-gray-900 absolute right-4 w-6 h-6 cursor-pointer' />)}
                                </div>
                                <div className='flex items-center justify-center w-full pt-2'>
                                    <button type='submit' className='capitalize w-full hover:shadow-lg hover:shadow-purple-500/40 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 text-white px-4 py-2 font-normal hover:font-medium rounded-md relative transition-all duration-300 hover:scale-105 active:scale-95 ease-in-out flex items-center justify-center gap-4'>
                                        Sign In
                                    </button>
                                </div>
                                <div className='flex items-center justify-center w-full relative'>
                                    <span className='w-full h-px bg-neutral-300'></span>
                                    <span className='bg-white px-4 absolute text-sm font-medium'>
                                        OR
                                    </span>
                                </div>
                            </div>
                        </form>
                        <div className='flex flex-col items-center justify-center w-full mb-5 mx-auto lg:px-96'>
                            <button onClick={() => signIn()} type='button' className='capitalize hover:shadow-lg w-full sm:w-max hover:shadow-purple-500/40 bg-gradient-to-l to-violet-500 via-purple-500 from-fuchsia-500 text-white px-4 lg:px-12 py-2 font-normal hover:font-medium rounded-md relative transition-all duration-300 hover:scale-105 active:scale-95 ease-in-out flex items-center justify-center gap-4'>
                                <BsGoogle size={18} /> Sign In with Google
                            </button>
                            <p className='text-sm text-neutral-700 mt-6 text-center w-3/4'>
                                By signing up, I agree to the Terms of Services and Privacy Policy
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SigninPage
// aws code:1674295351818 