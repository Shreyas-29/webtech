import Image from 'next/dist/client/image';
import Link from 'next/dist/client/link';
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { BsBookmark, BsBookmarkFill, BsChatSquareDots } from 'react-icons/bs';
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { BlogComponent } from '../components';
import { getJournals, getReports, getSidePost } from '../services/graphql';
import moment from 'moment';

function Blog() {

    const [post, setPost] = useState([]);
    const [report, setReport] = useState([]);
    const [journal, setJournal] = useState([]);
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(25);
    const [mark, setMark] = useState(false);

    useEffect(() => {
        getSidePost()
            .then((result) => {
                setPost(result)
            });
        getReports()
            .then((result) => {
                setReport(result);
            })
        getJournals()
            .then((result) => {
                setJournal(result);
            })
    }, []);

    const singlePost = post.map((item: any) => item.node);
    const singleReport = report.map((item: any) => item.node);
    const journals = journal.map((item: any) => item.node);
    // console.log(singleReport);


    const toggleLike = () => {
        setLiked(!liked);
        if (liked) {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
    }
    const toggleBookMark = () => {
        setMark(!mark);
    }


    return (
        <section>
            <Head>
                <title>Webtech | Blog</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <div className='w-screen px-4 sm:px-10 lg:px-40 my-8 pb-16 relative'>
                <div className='container mx-auto w-full relative'>
                    <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 my-16 mb-20'>
                        <div className='left grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 sm:gap-5 w-full items-center'>

                            {singlePost.slice(2, 4).map((item: any) => (
                                <div key={item.id} className='relative flex flex-col rounded-lg overflow-hidden group sm:row-span-3 col-span-1'>
                                    <div className='absolute top-0 inset-x-0 p-3 flex items-center justify-between w-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:translate-y-1'>
                                        <div className='flex items-center justify-center gap-x-2'>
                                            <button
                                                onClick={toggleLike}
                                                className={`relative min-w-[68px] flex items-center rounded-md group transition-colors px-5 py-2 text-sm gap-x-2 group ${liked ? 'bg-rose-100 text-rose-500' : 'text-gray-600 bg-neutral-50 hover:bg-rose-100 hover:text-rose-500'}`}
                                                title='Liked'
                                                type='button'
                                            >
                                                {liked ?
                                                    <FaHeart className='w-4 h-4' /> :
                                                    <FaRegHeart className='w-4 h-4' />
                                                }
                                                {count}
                                            </button>
                                            <button
                                                className='px-5 py-2 rounded-md relative items-center hidden sm:flex text-sm text-gray-600 font-medium bg-neutral-50 gap-x-2 hover:text-teal-500 hover:bg-teal-100'
                                                title='Comments'
                                                type='button'
                                            >
                                                <BsChatSquareDots className='w-4 h-4' />
                                                <span className='font-medium'>
                                                    {count}
                                                </span>
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                onClick={toggleBookMark}
                                                className='bg-neutral-50 hover:bg-gray-200 transition !p-2.5 rounded-full w-max text-gray-600 flex items-center gap-x-2'>
                                                {mark ?
                                                    <BsBookmarkFill className='w-4 h-4' /> : <BsBookmark className='w-4 h-4' />
                                                }
                                            </button>
                                        </div>
                                    </div>
                                    <Link href={`/sidepost/${item.slug}`}>
                                        <div className='rounded-lg'>
                                            <Image
                                                src={item.featuredImage.url}
                                                alt='image'
                                                width={2000}
                                                height={2000}
                                                unoptimized
                                                className='w-full h-[22rem] rounded-lg object-cover object-center'
                                            />
                                        </div>
                                    </Link>
                                    <Link href={`/sidepost/${item.slug}`} className='absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black opacity-80'></Link>
                                    <div className='absolute inset-x-0 bottom-0 flex flex-col flex-grow p-4 w-full'>
                                        <Link href={`/sidepost/${item.slug}`} className='absolute inset-0'></Link>
                                        <h2 className='text-white font-medium text-xl mb-2'>
                                            {item.title}
                                        </h2>
                                        <p className='text-white text-xs font-normal'>{item.author.name} · {moment(item.createdAt).format('DD MMM YYYY')} </p>
                                    </div>
                                </div>
                            ))}

                            {singlePost.slice(4, 5).map((item: any) => (
                                <div className='w-full relative flex flex-col rounded-lg overflow-hidden group sm:row-span-2 col-span-2 mt-10 sm:mt-0'>
                                    <div className='absolute top-0 inset-x-0 p-3 flex items-center justify-between w-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:translate-y-1'>
                                        <div className='flex items-center justify-center gap-x-2'>
                                            <button
                                                onClick={toggleLike}
                                                className={`relative min-w-[68px] flex items-center rounded-md group transition-colors px-5 py-2 text-sm gap-x-2 group ${liked ? 'bg-rose-100 text-rose-500' : 'text-gray-600 bg-neutral-50 hover:bg-rose-100 hover:text-rose-500'}`}
                                                title='Liked'
                                                type='button'
                                            >
                                                {liked ?
                                                    <FaHeart className='w-4 h-4' /> :
                                                    <FaRegHeart className='w-4 h-4' />
                                                }
                                                {count}
                                            </button>
                                            <button
                                                className='px-5 py-2 rounded-md relative items-center hidden sm:flex text-sm text-gray-600 font-medium bg-neutral-50 gap-x-2 hover:text-teal-500 hover:bg-teal-100'
                                                title='Comments'
                                                type='button'
                                            >
                                                <BsChatSquareDots className='w-4 h-4' />
                                                <span className='font-medium'>
                                                    15
                                                </span>
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                onClick={toggleBookMark}
                                                className='bg-neutral-50 hover:bg-gray-200 transition !p-2.5 rounded-full w-max text-gray-600 flex items-center gap-x-2'>
                                                {mark ?
                                                    <BsBookmarkFill className='w-4 h-4' /> : <BsBookmark className='w-4 h-4' />
                                                }
                                            </button>
                                        </div>
                                    </div>
                                    <Link href={`/sidepost/${item.slug}`} className='w-full'>
                                        <div className='rounded-lg w-full'>
                                            <Image
                                                src={item.featuredImage.url}
                                                alt='image'
                                                width={2000}
                                                height={2000}
                                                unoptimized
                                                className='w-full h-[22rem] rounded-lg object-cover object-center'
                                            />
                                        </div>
                                    </Link>
                                    <Link href={`/sidepost/${item.slug}`} className='absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black opacity-80'></Link>
                                    <div className='absolute inset-x-0 bottom-0 flex flex-col flex-grow p-4 w-full'>
                                        <Link href={`/sidepost/${item.slug}`} className='absolute inset-0'></Link>
                                        <h2 className='text-white font-medium text-xl mb-2'>
                                            {item.title}
                                        </h2>
                                        <p className='text-white text-xs font-normal'>{item.author.name} · {moment(item.createdAt).format('DD MMM YYYY')} </p>
                                    </div>
                                </div>
                            ))}

                        </div>

                        {singlePost.slice(5, 6).map((item: any) => (
                            <div className='right relative flex flex-col group rounded-lg overflow-hidden w-full'>
                                <div className='absolute top-0 inset-x-0 p-3 flex items-center justify-between w-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:translate-y-1'>
                                    <div className='flex items-center justify-center gap-x-2'>
                                        <button
                                            onClick={toggleLike}
                                            className={`relative min-w-[68px] flex items-center rounded-md group transition-colors px-5 py-2 text-sm gap-x-2 group ${liked ? 'bg-rose-100 text-rose-500' : 'text-gray-600 bg-neutral-50 hover:bg-rose-100 hover:text-rose-500'}`}
                                            title='Liked'
                                            type='button'
                                        >
                                            {liked ?
                                                <FaHeart className='w-4 h-4' /> :
                                                <FaRegHeart className='w-4 h-4' />
                                            }
                                            {count}
                                        </button>
                                        <button
                                            className='px-5 py-2 rounded-md relative items-center hidden sm:flex text-sm text-gray-600 font-medium bg-neutral-50 gap-x-2 hover:text-teal-500 hover:bg-teal-100'
                                            title='Comments'
                                            type='button'
                                        >
                                            <BsChatSquareDots className='w-4 h-4' />
                                            <span className='font-medium'>
                                                15
                                            </span>
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            onClick={toggleBookMark}
                                            className='bg-neutral-50 hover:bg-gray-200 transition !p-2.5 rounded-md w-max text-gray-600 flex items-center gap-x-2'>
                                            {mark ?
                                                <BsBookmarkFill className='w-4 h-4' /> : <BsBookmark className='w-4 h-4' />
                                            }
                                        </button>
                                    </div>
                                </div>
                                <Link href={`/sidepost/${item.slug}`} className='h-full'>
                                    <div className='rounded-lg inset-0 h-full'>
                                        <Image
                                            src={item.featuredImage.url}
                                            alt='image'
                                            width={2000}
                                            height={2000}
                                            unoptimized
                                            className='!w-full h-[22rem] sm:h-full rounded-lg object-cover object-center'
                                        />
                                    </div>
                                </Link>
                                <Link href={`/sidepost/${item.slug}`} className='absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black opacity-80'></Link>
                                <div className='absolute inset-x-0 bottom-0 flex flex-col flex-grow p-4 lg:p-8 w-full'>
                                    <Link href={`/sidepost/${item.slug}`} className='absolute inset-0'></Link>
                                    <span className='bg-violet-100 text-violet-800 hover:bg-violet-800 hover:text-white transition px-3 py-1 rounded-md w-max hidden sm:block text-xs font-medium mb-4 z-10 cursor-pointer'>
                                        Design
                                    </span>
                                    <h2 className='text-white font-medium text-xl sm:text-3xl mb-3'>
                                        {item.title}
                                    </h2>
                                    <p className='text-white text-xs font-normal'>{item.author.name} · {moment(item.createdAt).format('DD MMM YYYY')} </p>
                                </div>
                            </div>
                        ))}

                    </div>
                    <BlogComponent report={singleReport} journal={journals} />
                </div>
            </div>
        </section>
    )
}

export default Blog

{/* <div className='relative flex flex-col rounded-lg overflow-hidden group sm:row-span-3 col-span-1'>
<div className='absolute top-0 inset-x-0 p-3 flex items-center justify-between w-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:translate-y-1'>
    <div className='flex items-center justify-center gap-x-2'>
        <button
            onClick={toggleLike}
            className={`relative min-w-[68px] flex items-center rounded-md group transition-colors px-5 py-2 text-sm gap-x-2 group ${liked ? 'bg-rose-100 text-rose-500' : 'text-gray-600 bg-neutral-50 hover:bg-rose-100 hover:text-rose-500'}`}
            title='Liked'
            type='button'
        >
            {liked ?
                <FaHeart className='w-4 h-4' /> :
                <FaRegHeart className='w-4 h-4' />
            }
            {count}
        </button>
        <button
            className='px-5 py-2 rounded-md relative items-center hidden sm:flex text-sm text-gray-600 font-medium bg-neutral-50 gap-x-2 hover:text-teal-500 hover:bg-teal-100'
            title='Comments'
            type='button'
        >
            <BsChatSquareDots className='w-4 h-4' />
            <span className='font-medium'>
                15
            </span>
        </button>
    </div>
    <div>
        <button
            onClick={toggleBookMark}
            className='bg-neutral-50 hover:bg-gray-200 transition !p-2.5 rounded-full w-max text-gray-600 flex items-center gap-x-2'>
            {mark ?
                <BsBookmarkFill className='w-4 h-4' /> : <BsBookmark className='w-4 h-4' />
            }
        </button>
    </div>
</div>
<Link href={''}>
    <div className='rounded-lg'>
        <Image
            src={'https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
            alt='image'
            width={2000}
            height={2000}
            unoptimized
            className='w-full h-[22rem] rounded-lg object-cover object-center'
        />
    </div>
</Link>
<Link href={''} className='absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black opacity-80'></Link>
<div className='absolute inset-x-0 bottom-0 flex flex-col flex-grow p-4 w-full'>
    <Link href={''} className='absolute inset-0'></Link>
    <h2 className='text-white font-medium text-xl'>
        What is metaverse? Let's play games with meta.
    </h2>
</div>
</div> */}