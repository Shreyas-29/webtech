import React, { useState } from 'react'
import Image from 'next/image';
import { BsArrowRightShort } from 'react-icons/bs';
import moment from 'moment';
import Link from 'next/link';
import { IoMdShare } from 'react-icons/io';
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FacebookShareButton, WhatsappShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import { IoChatboxEllipses, IoChatboxEllipsesOutline, IoHeart, IoHeartOutline } from 'react-icons/io5';

function Articles({ post }: any) {

    const [share, setShare] = useState(false);
    const [active, setActive] = useState(true);

    const like = () => {
        setActive(!active);
    }
    const toggleShareButton = () => {
        setShare(!share);
    }

    const posts = post.map((a: any) => a.node)
    let shareUrl = window.location.href || 'http://localhost:3000';

    return (
        <section className='px-4 sm:px-10 lg:px-40 my-16 w-full'>
            <div className='flex flex-col items-center text-center w-full mt-4 mb-4 py-8 space-y-4'>
                <h2 className='text-gray-900 font-semibold text-2xl sm:text-3xl'>Discover more articles</h2>
                <p className='text-gray-600 font-medium mb-4'>Explore over 55 articles.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 w-full relative'>
                {posts.map((item: any) => (
                    <div className='flex flex-col items-center justify-center relative w-full pb-2 rounded-xl bg-white hover:shadow-xl transition-shadow group' key={item.id}>
                        <Link href={`/articles/${item.slug}`} className='absolute z-10 inset-0 w-full h-52'></Link>
                        <Image
                            src={item.featuredImage.url}
                            alt='article'
                            width={2000}
                            height={2000}
                            unoptimized
                            className='w-full h-52 object-cover object-center rounded-t-xl mt-0 relative'
                        />
                        <div className='flex flex-col items-center justify-center w-full px-4 pb-4 space-y-3'>
                            <button onClick={toggleShareButton} className='bg-neutral-100 hover:bg-slate-200 p-1.5 rounded-full gap-x-1 text-sm text-gray-700 flex items-center absolute top-2.5 right-2.5 z-20'>
                                <IoMdShare className='w-4 h-4' />
                                {share && (
                                    <span className={`w-max bg-slate-200 absolute top-0 right-9 gap-y-2 rounded-md py-2 px-1 flex flex-col items-center justify-center duration-500 ease-in-out shadow-md shadow-slate-500/40`}>
                                        <span className='absolute bg-slate-200 rotate-45 w-2 h-2 top-3 -right-1 transform-gpu inline-block'></span>
                                        <a href="#" className='bg-white px-1.5 py-0.5 rounded-full shadow-sm'>
                                            <FacebookShareButton url={shareUrl}>
                                                <FaFacebookF className='w-3 h-3 text-gray-700 hover:text-indigo-500' />
                                            </FacebookShareButton>
                                        </a>
                                        <a href="#" className='bg-white px-1.5 py-0.5 rounded-full shadow-sm'>
                                            <TwitterShareButton url={shareUrl}>
                                                <FaTwitter className=' w-3 h-3 text-gray-700 hover:text-indigo-500' />
                                            </TwitterShareButton>
                                        </a>
                                        <a href="#" className='bg-white px-1.5 py-0.5 rounded-full shadow-sm'>
                                            <LinkedinShareButton url={shareUrl}>
                                                <FaLinkedinIn className=' w-3 h-3 text-gray-700 hover:text-indigo-500' />
                                            </LinkedinShareButton>
                                        </a>
                                        <a href="#" className='bg-white px-1.5 py-0.5 rounded-full shadow-sm'>
                                            <WhatsappShareButton url={shareUrl}>
                                                <FaWhatsapp className=' w-3 h-3 text-gray-700 hover:text-indigo-500' />
                                            </WhatsappShareButton>
                                        </a>
                                    </span>
                                )}
                            </button>
                            <Link href={`/articles/${item.slug}`} passHref={true} className='space-y-3 w-full'>
                                <span className='absolute w-max px-2 py-1 rounded-md bg-violet-100 text-violet-800 hover:bg-violet-800 hover:text-white text-xs top-3 left-3 opacity-0 group-hover:opacity-100 z-20 font-medium'>
                                    {item.categories.map((name: any) => name.title)}
                                </span>
                                <div className='flex items-center justify-start w-full gap-2'>
                                    <Image src={item.author.photo.url} alt='author' width={2000} height={2000} unoptimized className='w-6 h-6 rounded-full' />
                                    <p className='text-xs font-normal'>{item.author.name} · {moment(item.createdAt).format('DD MMM YYYY')}</p>
                                </div>
                                <h2 className='text-lg font-semibold block text-neutral-900'>
                                    {item.title}
                                </h2>
                                <div className='flex items-center justify-between w-full relative'>
                                    <div className='flex items-center justify-center gap-x-4'>
                                        <span className='text-xs font-medium text-gray-600 flex items-center gap-x-1'>
                                            {active ? <IoHeartOutline onClick={like} className='w-5 h-5 text-gray-700' /> : <IoHeart onClick={like} className='w-5 h-5 text-rose-500' />}1.2k</span>
                                        <span className='text-xs font-medium text-gray-600 flex items-center gap-x-1'>
                                            {active ? <IoChatboxEllipsesOutline onClick={like} className='w-5 h-5 text-gray-700' /> : <IoChatboxEllipses onClick={like} className='w-5 h-5 text-blue-600' />}15
                                        </span>
                                    </div>
                                    <span className='text-center flex gap-0.5 group text-sm text-gray-800 items-center font-medium hover:text-indigo-500 cursor-pointer'>
                                        Read More <BsArrowRightShort className='w-5 h-5 group-hover:translate-x-1 transition' />
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Articles