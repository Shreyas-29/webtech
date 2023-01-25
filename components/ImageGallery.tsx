import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FacebookShareButton, WhatsappShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import moment from 'moment';
import Link from 'next/link';


function ImageGallery({ gallery, sidepost }: any) {

    let shareUrl = window.location.href || 'http://localhost:3000';
    const post = gallery.map((item: any) => item.node);
    const sidePost = sidepost.map((item: any) => item.node);
    let first = sidePost[0];
    let second = sidePost[1];

    return (
        <section className='px-4 sm:px-10 lg:px-40 my-16 w-full relative'>
            <div className='flex flex-col items-center justify-center '>
                <div className='flex flex-col items-center text-center w-full my-4 py-8 space-y-4'>
                    <h2 className='text-900 font-semibold text-2xl sm:text-3xl'>Explore Image Gallery</h2>
                    <p className='text-gray-600 font-medium mb-4'>Explore the most trending categories and their posts.</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 w-full sm:px-8'>

                    <div className='group relative overflow-hidden sm:col-span-2 rounded-lg' key={first.id}>
                        <Image
                            src={first.featuredImage.url}
                            alt='graphic design'
                            unoptimized
                            width={2000}
                            height={2000}
                            className='w-full h-auto object-cover rounded-lg'
                        />
                        <div className='sm:absolute bottom-0 px-4 lg:px-8 py-4 left-0 flex flex-col firsts-start justify-start'>
                            <a href="#top">
                                <Link href={`/sidepost/${first.slug}`}>
                                    <p className='px-3 py-1 mb-3 cursor-pointer font-medium rounded-md bg-indigo-100 text-indigo-800 hover:bg-indigo-800 hover:text-white text-xs w-max'>
                                        {first.categories.map((a: any) => a.title)}
                                    </p>
                                    <h2 className='text-lg sm:text-2xl font-semibold text-gray-900 sm:text-white mb-2'>
                                        {first.title.substr(0, 43)}
                                    </h2>
                                    <p className='text-gray-700 sm:text-white hidden sm:block font-medium'>
                                        {first.description.substr(0, 80)}...
                                    </p>
                                    <div className='flex sm:hidden items-center justify-between w-full'>
                                        <p className='text-gray-700 sm:text-white text-xs font-normal'>{first.author.name} · {moment(first.createdAt).format('DD MMM YYYY')} </p>
                                    </div>
                                </Link>
                            </a>
                        </div>
                        <div className='absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition duration-300 hidden sm:flex flex-col items-center justify-center right-0 top-4 mr-4 w-max gap-y-2'>
                            <a href="#" className='bg-white px-2 py-0.5 rounded-full group group-hover:bg-slate-200'>
                                <FacebookShareButton url={shareUrl}>
                                    <FaFacebookF className=' w-3 h-3 text-gray-700 hover:text-indigo-500' />
                                </FacebookShareButton>
                            </a>
                            <a href="#" className='bg-white px-2 py-0.5 rounded-full group group-hover:bg-slate-200'>
                                <TwitterShareButton url={shareUrl}>
                                    <FaTwitter className=' w-3 h-3 text-gray-700 hover:text-indigo-500' />
                                </TwitterShareButton>
                            </a>
                            <a href="#" className='bg-white px-2 py-0.5 rounded-full group group-hover:bg-slate-200'>
                                <LinkedinShareButton url={shareUrl}>
                                    <FaLinkedinIn className=' w-3 h-3 text-gray-700 hover:text-indigo-500' />
                                </LinkedinShareButton>
                            </a>
                            <a href="#" className='bg-white px-2 py-0.5 rounded-full group group-hover:bg-slate-200'>
                                <WhatsappShareButton url={shareUrl}>
                                    <FaWhatsapp className=' w-3 h-3 text-gray-700 hover:text-indigo-500' />
                                </WhatsappShareButton>
                            </a>
                        </div>
                    </div>

                    {post.map((item: any) => (
                        <Link href={`/gallery/${item.slug}`}>
                            <div className='group relative flex flex-col h-full overflow-hidden rounded-md'>
                                <Image
                                    src={item.featuredImage.url}
                                    alt='category'
                                    width={2000}
                                    height={2000}
                                    unoptimized
                                    className='w-full h-full object-cover rounded-xl'
                                />
                                <div className='sm:absolute bottom-0 px-4 py-4 left-0 flex flex-col items-start justify-start mb-6 sm:mb-0'>
                                    <p className={`px-3 py-1 mb-3 cursor-pointer font-medium rounded-md bg-indigo-100 text-indigo-800 hover:bg-indigo-800 hover:text-white text-xs`}>
                                        {item.categories.map((a: any) => a.title)}
                                    </p>
                                    <h2 className='text-lg font-semibold text-gray-900 sm:text-white mb-2'>
                                        {item.title}
                                    </h2>
                                    <div className='flex items-center justify-between w-full'>
                                        <p className='text-gray-700 sm:text-white text-xs font-normal'>{item.author.name} · {moment(item.createdAt).format('DD MMM YYYY')} </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                    <div className='group relative overflow-hidden sm:col-span-2 rounded-lg h-[22rem]' key={second.id}>
                        <Image
                            src={second.featuredImage.url}
                            alt=''
                            unoptimized
                            width={2000}
                            height={2000}
                            className='w-full h-auto object-cover rounded-lg'
                        />
                        <div className='sm:absolute bottom-0 px-4 lg:px-8 py-4 left-0 flex flex-col seconds-start justify-start'>
                            <Link href={`/sidepost/${second.slug}`}>
                                <p className='px-2 py-1 mb-3 cursor-pointer font-medium rounded-md bg-indigo-100 text-indigo-800 hover:bg-indigo-800 hover:text-white text-xs w-max'>
                                    {second.categories.map((a: any) => a.title)}
                                </p>
                                <h2 className='text-lg sm:text-2xl font-semibold text-gray-900 sm:text-white mb-2'>
                                    {second.title.substr(0, 43)}
                                </h2>
                                <p className='text-gray-200 hidden sm:block text-sm sm:text-base font-medium'>
                                    {second.description.substr(0, 80)}...
                                </p>
                                <div className='flex sm:hidden items-center justify-between w-full'>
                                    <p className='text-gray-700 text-xs font-normal'>{second.author.name} · {moment(second.createdAt).format('DD MMM YYYY')} </p>
                                </div>
                            </Link>
                        </div>
                        <div
                            className='absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition duration-700 ease-in-out hidden sm:flex flex-col items-center justify-center right-0 top-4 mr-4 w-max gap-y-2'>
                            <a href="#" className='bg-white px-2 py-0.5 rounded-full group group-hover:bg-slate-200'>
                                <FacebookShareButton url={shareUrl}>
                                    <FaFacebookF className=' w-3 h-3 text-gray-700 hover:text-indigo-500' />
                                </FacebookShareButton>
                            </a>
                            <a href="#" className='bg-white px-2 py-0.5 rounded-full group group-hover:bg-slate-200'>
                                <TwitterShareButton url={shareUrl}>
                                    <FaTwitter className=' w-3 h-3 text-gray-700 hover:text-indigo-500' />
                                </TwitterShareButton>
                            </a>
                            <a href="#" className='bg-white px-2 py-0.5 rounded-full group group-hover:bg-slate-200'>
                                <LinkedinShareButton url={shareUrl}>
                                    <FaLinkedinIn className=' w-3 h-3 text-gray-700 hover:text-indigo-500' />
                                </LinkedinShareButton>
                            </a>
                            <a href="#" className='bg-white px-2 py-0.5 rounded-full group group-hover:bg-slate-200'>
                                <WhatsappShareButton url={shareUrl}>
                                    <FaWhatsapp className=' w-3 h-3 text-gray-700 hover:text-indigo-500' />
                                </WhatsappShareButton>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageGallery
