import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import CategoryWidget from './CategoryWidget';
import { HiOutlineBookmark } from 'react-icons/hi';
import { IoMdBookmark } from 'react-icons/io';
import TopicWidget from './TopicWidget';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import moment from 'moment';

function Blogs({ blogs }: any) {

    const blog = blogs.map((b: any) => b.node);

    const [active, setActive] = useState(true);
    const [mark, setMark] = useState(true);
    const like = () => {
        setActive(!active);
    }
    const bookMark = () => {
        setMark(!mark);
    }
    function HygraphImageLoader({ src, width }: any) {
        const relativeSrc = (src: any) => src.split('/').pop();

        return `https://media.graphassets.com/resize=width:${width}/${relativeSrc(
            src
        )}`;
    }


    return (
        <section className='px-4 sm:px-10 lg:px-40 mt-24 mb-16 w-full'>
            <div className='w-full'>
                <div className='flex flex-col items-center text-center w-full mt-4 mb-4 py-8 space-y-4'>
                    <h2 className='text-gray-900 font-semibold text-2xl sm:text-3xl'>Latest Blogs</h2>
                    <p className='text-gray-600 font-medium mb-4'>Always keep learning new technologies with webtech.</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-12 w-full gap-x-6'>
                    <div className='lg:col-span-8 col-span-1 relative gap-4'>
                        {blog.map((item: any) => (
                            <div key={item.slug} className='w-full px-6 py-6 lg:py-4 mb-8 rounded-xl border flex flex-col-reverse sm:flex-row items-center justify-center group hover:shadow-lg transition duration-300 relative'>
                                <div className='flex flex-col flex-grow'>
                                    <div className='mt-4 lg:mt-0'>
                                        <span className={`rounded-md bg-violet-100 text-violet-800 hover:bg-violet-800 hover:text-white px-2 py-1 text-sm cursor-pointer mb-4 w-max font-medium`}>
                                            {item.categories.map((category: any) => category.title)}
                                        </span>
                                        <Link href={`/blogs/${item.slug}`} passHref={false}>
                                            <h2 className='text-xl font-semibold text-gray-800 my-4 group-hover:text-indigo-500'>{item.title}</h2>
                                        </Link>
                                        <p className='text-gray-600 font-medium mb-2'>{item.description.slice(0, 100)}... </p>
                                    </div>
                                    <div className='flex items-center justify-start gap-x-2 w-full mt-4 group'>
                                        <Image
                                            src={item.author.photo.url}
                                            alt='author'
                                            unoptimized
                                            width={1000}
                                            height={1000}
                                            className='w-6 h-6 rounded-full'
                                        />
                                        <p className='text-sm text-slate-500 group-hover:text-slate-900'>{item.author.name} · {moment(item.createdAt).format('DD MMM, YYYY')} </p>
                                    </div>
                                    <div className='flex items-center justify-between w-full mt-4 mb-2 px-2'>
                                        <span className='flex items-center justify-center gap-x-1 text-sm text-gray-500' onClick={like}>
                                            {active ? <IoHeartOutline onClick={like} className={`w-5 h-5 text-gray-700 cursor-pointer`} /> : <IoHeart onClick={like} className={`w-5 h-5 text-red-500 cursor-pointer`} />}
                                        </span>
                                        <span className='flex items-center justify-center text-sm text-gray-500 font-normal gap-x-4'>
                                            4 min read {mark ? <HiOutlineBookmark onClick={bookMark} className='w-5 h-5 text-neutral-700 cursor-pointer' /> : <IoMdBookmark onClick={bookMark} className='w-5 h-5 text-neutral-700 cursor-pointer' />}
                                        </span>
                                    </div>
                                </div>
                                <Link href={`/blogs/${item.slug}`} className='absolute h-[60%] w-full top-4' ></Link>
                                <div className='flex items-start justify-start lg:ml-4 lg:mb-12 h-full'>
                                    <Image
                                        src={item.featuredImage.url}
                                        loader={HygraphImageLoader}
                                        alt='blogImage'
                                        unoptimized
                                        width={2000}
                                        height={2000}
                                        className='w-80 h-auto object-cover object-center rounded-md shadow-sm'
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='lg:col-span-4 col-span-1 relative'>
                        <CategoryWidget blogs={blogs} />
                        <TopicWidget blogs={blogs} />
                    </div>
                </div>

            </div>
        </section >
    )
}

export default Blogs
