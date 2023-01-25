import React, {  useState } from 'react';
import Cart from './cart';
import Posts from './posts';
import Createpost from './createpost';
import Dashboard from './dashboard';
import Profile from './profile';
import Head from 'next/head';
import { MdHomeMax } from 'react-icons/md';
import { FaUserEdit } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdCreate } from "react-icons/io";
import { IoGrid } from "react-icons/io5";
import { MdArticle } from "react-icons/md";


function Home() {


    const [currentPage, setCurrentPage] = useState('dashboard');

    // useEffect(() => {
    //     setCurrentPage(router.pathname.split('/')[2])
    // }, [router.pathname]);

    return (
        <section className='w-screen px-4 sm:px-10 lg:px-40 my-8 pb-16 relative'>
            <Head>
                <title>Webtech | Dashboard</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <div className='w-full py-8 flex items-center flex-col justify-center'>
                <header className='flex items-center flex-col space-y-4 justify-center w-full'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 flex items-center gap-2'>
                        <MdHomeMax />  Dash board
                    </h1>
                    <p className='text-base sm:text-lg text-gray-600 font-medium text-center'>
                        Manage your Account, Posts, Settings, Subscriptions, Cart Items
                    </p>
                </header>

                <div className='px-3 py-5 mx-auto bg-white rounded-3xl lg:rounded-[40px] shadow- lg:shadow-lg sm:p-10 mt-10 lg:mt-20 lg:p-16'>
                    <div className='flex flex-col space-y-8 xl:space-y-0 xl:flex-row'>
                        <div className='flex-shrink-0 max-w-xl xl:w-80 xl:pr-8'>
                            <div className='w-full flex flex-col items-start space-y-1'>
                                <button onClick={() => setCurrentPage('dashboard')} className={`w-full rounded-md hover:bg-slate-200 flex items-center px-4 justify-start text-start 
                                ${currentPage === 'dashboard' ? 'bg-slate-200 text-gray-900' : 'bg-transparent'}
                                `}>
                                    <IoGrid className='w-5 h-5' />
                                    <p className={`w-full px-6 py-2.5 font-medium rounded-md hover:bg-slate-200 text-start transition duration-100 text-gray-600 hover:text-gray-900 ${currentPage === 'dashboard' && 'text-gray-900'}`}>
                                        Dashboard
                                    </p>
                                </button>
                                <button onClick={() => setCurrentPage('posts')} className={`w-full rounded-md hover:bg-slate-200 flex items-center px-4 justify-start text-start  
                                ${currentPage === 'posts' ? 'bg-slate-200 text-gray-900' : 'bg-transparent'}
                                `}>
                                    <MdArticle className='w-5 h-5' />
                                    <p className={`w-full px-6 py-2.5 font-medium rounded-md hover:bg-slate-200 text-start transition duration-100 text-gray-600 hover:text-gray-900 ${currentPage === 'posts' ? 'text-gray-900' : 'text-gray-500'}`}>
                                        Posts
                                    </p>
                                </button>
                                <button onClick={() => setCurrentPage('profile')} className={`w-full rounded-md hover:bg-slate-200 flex items-center px-4 justify-start text-start  
                                ${currentPage === 'profile' ? 'bg-slate-200 text-gray-900' : 'bg-transparent'}
                                `}>
                                    <FaUserEdit className='w-5 h-5' />
                                    <p className={`w-full px-6 py-2.5 font-medium rounded-md hover:bg-slate-200 text-start transition duration-100 text-gray-600 hover:text-gray-900 ${currentPage === 'profile' ? 'text-gray-900' : 'text-gray-500'}`}>
                                        Profile
                                    </p>
                                </button>
                                <button onClick={() => setCurrentPage('createpost')} className={`w-full rounded-md hover:bg-slate-200 flex items-center px-4 justify-start text-start  
                                ${currentPage === 'createpost' ? 'bg-slate-200 text-gray-900' : 'bg-transparent'}
                                `}>
                                    <IoMdCreate className='w-5 h-5' />
                                    <p className={`w-full px-6 py-2.5 font-medium rounded-md hover:bg-slate-200 text-start transition duration-100 text-gray-600 hover:text-gray-900 ${currentPage === 'createpost' ? 'text-gray-900' : 'text-gray-500'}`}>
                                        Create Post
                                    </p>
                                </button>
                                <button onClick={() => setCurrentPage('cart')} className={`w-full rounded-md hover:bg-slate-200 flex items-center px-4 justify-start text-start  
                                ${currentPage === 'cart' ? 'bg-slate-200 text-gray-900' : 'bg-transparent'}
                                `}>
                                    <FiShoppingCart className='w-5 h-5' />
                                    <p className={`w-full px-6 py-2.5 font-medium rounded-md hover:bg-slate-200 text-start transition duration-100 text-gray-600 hover:text-gray-900 ${currentPage === 'cart' ? 'text-gray-900' : 'text-gray-500'}`}>
                                        Cart
                                    </p>
                                </button>
                            </div>
                        </div>
                        <div className='w-full h-px block sm:hidden bg-neutral-200 !my-10'></div>
                        <div className='flex-grow w-[18rem] lg:w-[42rem] lg:h-full'>
                        {/* <div className='flex-grow w-[18rem] lg:w-[42rem] lg:h-96'> */}
                            {currentPage === 'dashboard' && <Dashboard />}
                            {currentPage === 'posts' && <Posts />}
                            {currentPage === 'profile' && <Profile />}
                            {currentPage === 'createpost' && <Createpost />}
                            {currentPage === 'cart' && <Cart />}
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Home
// onClick={() => setCurrentPage('dashboard')}
// onClick={() => setCurrentPage('posts')}
// onClick={() => setCurrentPage('profile')}
// onClick={() => setCurrentPage('createpost')}
// onClick={() => setCurrentPage('cart')}