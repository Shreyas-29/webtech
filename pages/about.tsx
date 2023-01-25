import React, { useEffect, useState } from 'react';
import Image from 'next/dist/client/image';
import Head from 'next/head'
import { getAuthor } from '../services/graphql';

function About() {

    const [author, setAuthor] = useState([]);

    useEffect(() => {
        getAuthor()
            .then((result) => setAuthor(result));
    }, []);
    console.log(author);

    return (
        <section className='relative'>
            <Head>
                <title>Webtech | About</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <span className='absolute ml-20 top-0 bg-rose-500 w-80 h-80 rounded-full blur-3xl opacity-30 lg:w-96 lg:h-96'></span>
            <span className='absolute ml-20 top-96 bg-teal-500 w-80 h-80 rounded-full blur-3xl opacity-30 lg:w-96 lg:h-96'></span>
            <div className='w-screen px-4 sm:px-10 lg:px-40 my-8 pb-16 relative'>
                <div className='flex flex-col lg:flex-row space-y-14 lg:space-y-0 items-center relative text-center lg:text-left py-16 lg:py-28'>
                    <div className='w-full space-y-5 lg:space-y-7'>
                        <h2 className='text-3xl md:text-4xl xl:text-5xl font-semibold text-gray-900'>
                            👋 About Us
                        </h2>
                        <p className='block text-base xl:text-lg text-gray-600 font-medium'>
                            We're impartial and independent, and every day we create distinctive world class programmers and content which inform, educate and entertain millions of peoples around the world.
                        </p>
                    </div>
                    <div className='flex-grow w-full'>
                        <Image
                            src={'https://chisnghiax.com/ncmaz/assets/about-hero-right.28a06758.png'}
                            alt='Image'
                            unoptimized
                            width={2000}
                            height={2000}
                            className='w-full h-auto object-center'
                        />
                    </div>
                </div>
                <div className='w-full container mx-auto py-16 lg:py-28'>
                    <div className='relative flex flex-col justify-center text-center mb-12 md:mb-16 items-centr lg:items-start text-neutral-900 space-y-5 lg:space-y-7'>
                        <h2 className='text-3xl md:text-4xl xl:text-5xl font-semibold text-gray-900'>
                            ⛱️ Founder
                        </h2>
                        <p className='block text-base xl:text-lg text-gray-600 font-medium'>
                            We're impartial and independent, and every day we create distinctive world class programmers and content.
                        </p>
                    </div>
                    <div className='flex flex-wrap items-center justify-center w-full py-8'>
                        {author.map((item: any) => (
                            <div className='flex flex-col items-center justify-center w-full'>
                                <Image
                                    src={item.photo.url}
                                    alt='Author'
                                    unoptimized
                                    width={2000}
                                    height={2000}
                                    className='w-72 h-60 object-cover object-center rounded-lg mb-4'
                                />
                                <h4 className='text-lg font-semibold text-gray-900 mb-2'>
                                    {item.name}
                                </h4>
                                <span className='text-base font-medium text-gray-700'>
                                    Founder of Webtech
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='relative py-16'>
                    <div className='absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-slate-200 dark:bg-black dark:bg-opacity-20'></div>
                    <div className='py-4 w-full flex flex-col items-center justify-start space-y-8 z-10'>
                        <div className='flex flex-col items-start justify-start text-center sm:text-start w-full space-y-5 lg:space-y-7 z-10'>
                            <h2 className='text-3xl md:text-4xl xl:text-5xl font-semibold text-gray-900'>
                                🚀 Our Achivements
                            </h2>
                            <p className='block text-base xl:text-lg text-gray-600 font-medium'>
                                We're impartial and independent, and every day we create distinctive world class programmers and content.
                            </p>
                        </div>
                        <div className='py-4 w-full grid-cols-1 grid sm:grid-cols-2 lg:grid-cols-3 xl:gap-8 gap-5 z-10'>
                            <div className='bg-white hover:bg-gray-100 p-6 rounded-xl flex space-y-4 flex-col items-start'>
                                <h3 className='text-gray-900 font-bold text-2xl sm:text-4xl'>
                                    10 million
                                </h3>
                                <p className='text-gray-500 font-medium'>
                                    Articles have bben public around the world
                                </p>
                            </div>
                            <div className='bg-white hover:bg-gray-100 p-6 rounded-xl flex space-y-4 flex-col items-start'>
                                <h3 className='text-gray-900 font-bold text-2xl sm:text-4xl'>
                                    150,000
                                </h3>
                                <p className='text-gray-500 font-medium'>
                                    Registered users account
                                </p>
                            </div>
                            <div className='bg-white hover:bg-gray-100 p-6 rounded-xl flex space-y-4 flex-col items-start'>
                                <h3 className='text-gray-900 font-bold text-2xl sm:text-4xl'>
                                    180+
                                </h3>
                                <p className='text-gray-500 font-medium'>
                                    Countries and regions have our presence
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
