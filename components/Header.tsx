import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BiUserCircle } from 'react-icons/bi'
import { toast } from 'react-hot-toast';
import { TbLogout } from 'react-icons/tb';
import { MdEdit } from 'react-icons/md';
import { Turn as Hamburger } from 'hamburger-react'
import { IoChevronDown, IoGrid } from 'react-icons/io5';
import { Bitter } from '@next/font/google';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { IoMdHelpCircle } from 'react-icons/io';

const bitter = Bitter({ subsets: ['latin'] });

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setopenDropdown] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const { data: session } = useSession();

    const showPopup = () => {
        setopenDropdown(!openDropdown);
        toast.error("Please login to access dashboard.");
    }
    const closeMenu = () => {
        setIsOpen(!isOpen);
    }
    const toggleDropdown = () => {
        setopenDropdown(!openDropdown);
    }
    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeBackground, true);
    }, []);


    return (
        <nav className='px-4 sm:px-10 lg:px-32 pt-8 w-screen bg-transparent' id='top'>

            <header className='hidden sm:flex items-center justify-center pb-8'>
                <div className='flex !items-center !justify-between w-full'>
                    <Link href={'/'}>
                        <h1 className={`bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-fuchsia-500 uppercase font-bold drop-shadow-md innerShadow text-3xl hover:bg-gradient-to-bl transition duration-300 ${bitter.className}`}>webtech</h1>
                    </Link>

                    <ul className='menu flex items-center justify-center space-x-6'>
                        <Link href='/'><li className={`menuLink dark:text-slate-400 dark:hover:text-indigo-500 font-semibold hover:text-indigo-600 text-neutral-700 transition duration-300 cursor-pointer`}>Home</li></Link>
                        <Link href='/blog'><li className={`menuLink dark:text-slate-400 dark:hover:text-indigo-500 font-semibold hover:text-indigo-600 text-neutral-700 transition duration-300 cursor-pointer`}>Blog</li></Link>
                        <Link href='/products'><li className={`menuLink dark:text-slate-400 dark:hover:text-indigo-500 font-semibold hover:text-indigo-600 text-neutral-700 transition duration-300 cursor-pointer`}>Products</li></Link>
                        <Link href='/categories'><li className={`menuLink dark:text-slate-400 dark:hover:text-indigo-500 font-semibold hover:text-indigo-600 text-neutral-700 transition duration-300 cursor-pointer`}>Categories</li></Link>
                        <Link href='/about'><li className={`menuLink dark:text-slate-400 dark:hover:text-indigo-500 font-semibold hover:text-indigo-600 text-neutral-700 transition duration-300 cursor-pointer`}>About</li></Link>
                    </ul>

                    <div className='flex items-center justify-center relative space-x-6'>

                        {/* User */}


                        {session ? (
                            <div className='flex items-center space-x-2 px-4 py-1 rounded-md hover:bg-slate-200 cursor-pointer' onClick={toggleDropdown} >
                                <Image src={session.user?.image!} unoptimized alt='user' width={2000} height={2000} className='w-7 h-7 rounded-full' />
                                <div className='text-slate-700 font-medium flex items-center gap-2'>Shreyas <IoChevronDown className={`${openDropdown && 'rotate-180 transition-transform duration-300 ease-in-out'} ${!openDropdown && '-rotate-0 transition-transform duration-150'}`} /></div>
                            </div>
                        ) : (
                            <BiUserCircle strokeWidth='0.01' onClick={toggleDropdown} className='w-10 h-10 text-slate-600 cursor-pointer from-gray-500' />
                        )}

                        {openDropdown && session && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                exit={{ opacity: 0, scale: 1 }}
                                animate={{ opacity: 1, scale: 1, originZ: 1, originY: 1, backdropFilter: 'revert-layer' }}
                                transition={{ duration: 0.4 }}
                                className='absolute !z-50 top-12 right-[6.5rem] flex flex-col items-center bg-slate-100 rounded-xl p-6 w-64 backdrop-blur-sm shadow-xl'>

                                <div className='flex items-center space-x-3 w-full border-b border-neutral-300 pb-4'>
                                    <Image src={session.user?.image!} unoptimized alt='user' width={2000} height={2000} className='w-10 h-10 !rounded-full object-cover' />
                                    <div className='flex flex-grow flex-col items-start'>
                                        <h5 className='font-semibold capitalize'>{session.user?.name}</h5>
                                        <p className='text-xs text-gray-600 font-normal'>Web Developer</p>
                                    </div>
                                </div>

                                <div className='flex flex-col w-full items-start space-y-1 py-2 mt-2'>
                                    <Link href={'/myprofile'} className='w-full'>
                                        <div onClick={toggleDropdown} className='cursor-pointer flex items-center w-full text-slate-800 hover:bg-slate-300 hover:text-slate-900 transition py-2 gap-x-3 px-4 rounded-md'>
                                            <MdEdit className='text-slate-600 w-5 h-5' /> My Profile
                                        </div>
                                    </Link>
                                    <Link href={'/dashboard'} className='w-full'>
                                        <div onClick={toggleDropdown} className='cursor-pointer flex items-center w-full text-slate-800 hover:bg-slate-300 hover:text-slate-900 transition py-2 gap-x-3 px-4 rounded-md'>
                                            <IoGrid className='text-slate-600 w-5 h-5' /> Dashboard
                                        </div>
                                    </Link>
                                    <a href="mailto:webtechshreyas@gmail.com" className='w-full'>
                                        <div onClick={toggleDropdown} className='cursor-pointer flex items-center w-full text-slate-800 hover:bg-slate-300 hover:text-slate-900 transition py-2 gap-x-3 px-4 rounded-md'>
                                            <IoMdHelpCircle className='text-slate-600 w-5 h-5' />  Help
                                        </div>
                                    </a>
                                    <Link href={'/signin'} className='w-full'>
                                        <div onClick={toggleDropdown} className='cursor-pointer flex items-center w-full text-slate-800 hover:bg-slate-300 hover:text-slate-900 transition py-2 gap-x-3 px-4 rounded-md'>
                                            <TbLogout className='text-slate-600 w-5 h-5' /> Sign Out
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                        {openDropdown && !session && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                exit={{ opacity: 0, scale: 1 }}
                                animate={{ opacity: 1, scale: 1, originZ: 1, originY: 1, backdropFilter: 'revert-layer' }}
                                transition={{ duration: 0.4 }}
                                // onMouseLeave={toggleDropdown}
                                className='absolute !z-50 top-12 right-[6.5rem] flex flex-col items-center bg-slate-200 rounded-md p-4 w-64 backdrop-blur-sm shadow-md'>
                                <div onClick={showPopup} className='cursor-pointer flex items-center w-full text-slate-800 hover:bg-slate-300 hover:text-slate-900 transition py-2 gap-x-3 px-4 rounded-md'>
                                    <IoGrid className='text-slate-600 w-5 h-5' /> Dashboard
                                </div>
                                <Link href={'/signin'} className='w-full'>
                                    <div className='cursor-pointer flex items-center w-full text-slate-800 hover:bg-slate-300 hover:text-slate-900 transition py-2 gap-x-3 px-4 rounded-md'>
                                        <TbLogout className='text-slate-600 w-5 h-5' /> Sign In
                                    </div>
                                </Link>
                            </motion.div>
                        )}

                        <Link href={'/signin'}>
                            {session ? (
                                <button className='hover:shadow-lg hover:shadow-purple-500/40 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 text-white rounded-md hover:bg-indigo-600 transition-all duration-300 hover:scale-105 active:scale-95 capitalize px-4 py-2 font-medium'>
                                    Sign Out
                                </button>
                            ) : (
                                <button className='hover:shadow-lg hover:shadow-purple-500/40 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 text-white rounded-md hover:bg-indigo-600 transition-all duration-300 hover:scale-105 active:scale-95 capitalize px-4 py-2 font-medium'>
                                    Sign In
                                </button>
                            )}
                        </Link>
                    </div>

                </div>
            </header>

            <header className='flex sm:hidden items-center justify-between w-full mb-8 pb-4 border-b'>
                <Link href={'/'}>
                    <h1 className='bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-fuchsia-500 uppercase font-bold drop-shadow-sm text-3xl hover:bg-gradient-to-bl transition duration-300 ml-4'>w</h1>
                </Link>
                <div className='realtive z-50 flex items-center justify-center space-x-2'>
                    {session ? (
                        <Image
                            src={session?.user?.image!}
                            alt=''
                            width={2000}
                            height={2000}
                            unoptimized
                            className={`w-9 h-9 rounded-full object-cover object-center cursor-pointer ${isOpen ? '-z-10' : 'z-0'} `}
                            onClick={toggleDropdown}
                        />
                    ) : (
                        <BiUserCircle className={`w-9 h-9 text-slate-600 cursor-pointer relative ${isOpen ? '-z-10' : 'z-0'}`} onClick={toggleDropdown} />
                    )}
                    {openDropdown && session && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            exit={{ opacity: 0, scale: 1 }}
                            animate={{ opacity: 1, scale: 1, originZ: 1, originY: 1, backdropFilter: 'revert-layer' }}
                            transition={{ duration: 0.4 }}
                            className={`absolute !z-50 top-20 right-4 flex flex-col items-center bg-slate-100 rounded-xl p-6 w-64 backdrop-blur-sm shadow-xl ${isOpen ? '-z-10' : 'z-0'}`}>

                            <div className='flex items-center space-x-3 w-full border-b border-neutral-300 pb-4'>
                                <Image src={session.user?.image!} unoptimized alt='user' width={2000} height={2000} className='w-10 h-10 !rounded-full object-cover' />
                                <div className='flex flex-grow flex-col items-start'>
                                    <h5 className='font-semibold capitalize'>{session.user?.name}</h5>
                                    <p className='text-xs text-gray-600 font-normal'>Web Developer</p>
                                </div>
                            </div>

                            <div className='flex flex-col w-full items-start space-y-1 py-2 mt-2'>
                                <Link href={'/myprofile'} className='w-full'>
                                    <div onClick={toggleDropdown} className='cursor-pointer flex items-center w-full text-slate-800 hover:bg-slate-300 hover:text-slate-900 transition py-2 gap-x-3 px-4 rounded-md'>
                                        <MdEdit className='text-slate-600 w-5 h-5' /> My Profile
                                    </div>
                                </Link>
                                <Link href={'/dashboard'} className='w-full'>
                                    <div onClick={toggleDropdown} className='cursor-pointer flex items-center w-full text-slate-800 hover:bg-slate-300 hover:text-slate-900 transition py-2 gap-x-3 px-4 rounded-md'>
                                        <IoGrid className='text-slate-600 w-5 h-5' /> Dashboard
                                    </div>
                                </Link>
                                <a href="mailto:webtechshreyas@gmail.com" className='w-full'>
                                    <div onClick={toggleDropdown} className='cursor-pointer flex items-center w-full text-slate-800 hover:bg-slate-300 hover:text-slate-900 transition py-2 gap-x-3 px-4 rounded-md'>
                                        <IoMdHelpCircle className='text-slate-600 w-5 h-5' />  Help
                                    </div>
                                </a>
                                <Link href={'/signin'} className='w-full'>
                                    <div onClick={toggleDropdown} className='cursor-pointer flex items-center w-full text-slate-800 hover:bg-slate-300 hover:text-slate-900 transition py-2 gap-x-3 px-4 rounded-md'>
                                        <TbLogout className='text-slate-600 w-5 h-5' /> Sign Out
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                    {openDropdown && !session && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            exit={{ opacity: 0, scale: 1 }}
                            animate={{ opacity: 1, scale: 1, originZ: 1, originY: 1, backdropFilter: 'revert-layer' }}
                            transition={{ duration: 0.4 }}
                            // onMouseLeave={toggleDropdown}
                            className={`absolute top-20 right-8 flex flex-col items-center bg-slate-100 rounded-md p-4 w-64 backdrop-blur-sm shadow-md ${isOpen ? '-z-10' : 'z-0'}`}>
                            <div onClick={showPopup} className='cursor-pointer flex items-center w-full text-slate-800 hover:bg-slate-300 hover:text-slate-900 transition py-2 gap-x-3 px-4 rounded-md'>
                                <IoGrid className='text-slate-600 w-5 h-5' /> Dashboard
                            </div>
                            <Link href={'/signin'} className='w-full' onClick={toggleDropdown}>
                                <div className='cursor-pointer flex items-center w-full text-slate-800 hover:bg-slate-300 hover:text-slate-900 transition py-2 gap-x-3 px-4 rounded-md'>
                                    <TbLogout className='text-slate-600 w-5 h-5' /> Sign In
                                </div>
                            </Link>
                        </motion.div>
                    )}
                    <Hamburger toggle={setIsOpen} toggled={isOpen} color={isOpen ? '#fff' : '#000'} size={24} rounded distance='sm' />
                    {isOpen && (
                        <>
                            <div className='flex flex-col items-start justify-between pt-24 pb-12 space-y-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 absolute w-60 h-screen !right-0 top-0 -z-10 transition duration-300 ease-linear'>
                                <div className='flex flex-col items-start justify-start w-full gap-y-2'>
                                    <Link href={'/'} className='w-full' onClick={closeMenu}>
                                        <li className='text-bold text-white capitalize py-2 px-8 mx-4 hover:text-indigo-500 hover:bg-white w-full rounded-md transition duration-200'>Home</li>
                                    </Link>
                                    <Link href={'/blog'} className='w-full' onClick={closeMenu}>
                                        <li className='text-bold text-white capitalize py-2 px-8 mx-4 hover:text-indigo-500 hover:bg-white w-full rounded-md transition duration-200'>Blog</li>
                                    </Link>
                                    <Link href={'/products'} className='w-full' onClick={closeMenu}>
                                        <li className='text-bold text-white capitalize py-2 px-8 mx-4 hover:text-indigo-500 hover:bg-white w-full rounded-md transition duration-200'>Products</li>
                                    </Link>
                                    <Link href={'/categories'} className='w-full' onClick={closeMenu}>
                                        <li className='text-bold text-white capitalize py-2 px-8 mx-4 hover:text-indigo-500 hover:bg-white w-full rounded-md transition duration-200'>Categories</li>
                                    </Link>
                                    <Link href={'/about'} className='w-full' onClick={closeMenu}>
                                        <li className='text-bold text-white capitalize py-2 px-8 mx-4 hover:text-indigo-500 hover:bg-white w-full rounded-md transition duration-200'>About</li>
                                    </Link>
                                </div>
                                <Link href={'/signin'} className='w-full' onClick={closeMenu}>
                                    <div className='flex items-center !justify-center w-full'>
                                        <button className='text-violet-500 bg-white w-max rounded-md hover:bg-slate-50 capitalize px-16 py-2 shadow-lg shadow-slate-100/50 transition font-medium'>
                                            Sign In
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </header>
        </nav>
    )
}

export default Header
