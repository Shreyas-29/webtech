import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { getCategories } from '../services/graphql';

function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((result) => setCategories(result));
    }, []);



    return (
        <section>
            <Head>
                <title>Webtech | Categories</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <div className='w-screen px-4 sm:px-10 lg:px-40 my-8 pb-16 relative'>
                <div className='my-12 w-full space-y-4 flex flex-col items-center justify-center mb-16'>
                    <h2 className='text-2xl font-semibold text-black'>
                        Explore Categories
                    </h2>
                    <p className='text-gray-600 font-medium'>
                        Get each articles on these categories
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center w-full gap-6 sm:gap-10'>
                    {categories.map((category: any) => (
                        <div key={category.id} className='cursor-pointer flex flex-col items-start justify-start w-full px-4 py-6 space-y-4 rounded-lg hover:shadow-xl hover:scale-105 transition duration-300 border hover:border-0 hover:bg-gradient-to-br hover:from-indigo-500 hover:via-purple-500 hover:to-fuchsia-500 group'>
                            <h2 className='text-lg font-semibold text-gray-900 group-hover:text-white'>
                                {category.title}
                            </h2>
                            <p className='text-base font-medium text-gray-600 group-hover:text-gray-100'>
                                {category.metaDesc.substr(0, 50)}...
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Categories
