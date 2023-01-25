import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getGallery, getGalleryDetails } from '../../services/graphql';
import { ArticleWidget, Author,  Comments, Form, GalleryDetail, Loader } from '../../components';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/dist/client/link';
import { BsChatSquareDots, BsBookmark, BsThreeDots, BsBookmarkFill, BsClipboardCheck } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoChatboxEllipsesOutline, IoShareSocial } from 'react-icons/io5';
import { MdContentCopy } from 'react-icons/md';
import { TbBug } from 'react-icons/tb';
import { Variants, motion } from 'framer-motion';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoMdClose } from 'react-icons/io';


function ArticleDetails({ post }: any) {
    console.log(post);

    const copyUrl = window.location.href;

    const [open, setOpen] = useState(false);
    const [info, setInfo] = useState(false);
    const [mark, setMark] = useState(false);
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(5);
    const [value, setValue] = useState(copyUrl);
    const [copied, setCopied] = useState(false);
    const [modal, setModal] = useState(false);

    const toggleShare = () => {
        setOpen(!open);
        setInfo(false);
    }
    const toggleInfo = () => {
        setInfo(!info);
        setOpen(false);
    }
    const toggleBookMark = () => {
        setMark(!mark);
    }
    const toggleLike = () => {
        setLiked(!liked);
        if (liked) {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
    }
    const openModal = () => {
        setModal(!modal);
        setInfo(false);
    }

    const router = useRouter();
    if (router.isFallback) {
        return <Loader />;
    }
    const itemVariants: Variants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    };


    return (
        <div className='mx-auto container'>
            <Head>
                <title>Webtech | </title>
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <header className='relative pt-16 md:py-20 lg:py-20 bg-gray-900 z-10 !w-screen top-0 left-0' key={post.id}>
                <div className='relative z-10 container dark mx-auto px-4 lg:px-36'>
                    <div className='max-w-screen-md'>
                        <div className='space-y-5 flex items-center justify-start flex-col w-full mt-1 mb-6'>
                            <div className='flex items-center w-full justify-start gap-x-4'>
                                <Link href={`/categories/${post.categories.map((category: any) => category.slug)}`}>
                                    <span className='px-2.5 py-1 cursor-pointer text-sm font-medium rounded-md text-purple-800 bg-purple-100 hover:bg-purple-800 hover:text-white'>
                                        {post.categories.map((category: any) => category.title)}
                                    </span>
                                </Link>
                            </div>
                            <h1 className='text-3xl md:text-4xl lg:text-[3rem] lg:leading-tight max-w-4xl text-white'>
                                {post.title}
                            </h1>
                        </div>
                        <div className='w-full h-px bg-gray-700 my-2'></div>
                        <div className='flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5 w-full py-4'>
                            <div className='flex flex-wrap items-center font-medium text-left text-sm text-gray-200 leading-none flex-shrink-0'>
                                <Link href={`/author/${post.author.slug}`}>
                                    <Image
                                        src={post.author.photo.url}
                                        alt='author'
                                        width={2000}
                                        height={2000}
                                        unoptimized
                                        className='w-10 h-10 rounded-full object-cover'
                                    />
                                </Link>
                                <div className='ml-3'>
                                    <Link href={`/author/${post.author.slug}`}>
                                        <p className='text-sm font-semibold capitalize text-gray-50'>{post.author.name}</p>
                                    </Link>
                                    <div className='mt-1 flex items-center justify-start w-max space-x-2'>
                                        <span className='text-xs font-normal text-gray-200'>{moment(post.createdAt).format('DD MMM YYYY')}</span>
                                        <span className='text-xs font-semibold text-gray-200'>·</span>
                                        <span className='text-xs font-normal text-gray-200'>6 min read</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row space-x-2.5 items-center relative'>
                                <div className='flex items-center space-x-2.5 pr-'>
                                    <button
                                        onClick={toggleLike}
                                        className={`relative min-w-[68px] flex items-center   rounded-full group transition-colors px-5 py-2 text-sm gap-x-2 group ${liked ? 'bg-rose-100 text-rose-500' : 'text-white bg-gray-800 hover:bg-rose-100 hover:text-rose-500'}`}
                                        title='Liked'
                                        type='button'
                                    >
                                        {liked ? <FaHeart className='w-4 h-4' /> : <FaRegHeart className='w-4 h-4' />}
                                        <span className={`text-white group-hover:text-rose-500 font-medium ${liked && 'text-rose-500'}`}>
                                            {count}
                                        </span>
                                    </button>
                                    <a href='#comments'>
                                        <button
                                            className='px-5 py-2 rounded-full relative items-center hidden sm:flex text-sm text-gray-200 font-medium bg-gray-800 gap-x-2 hover:text-teal-500 hover:bg-teal-100'
                                            title='Comments'
                                            type='button'
                                        >
                                            <BsChatSquareDots className='w-4 h-4' />
                                            <span className='font-medium'>
                                                15
                                            </span>
                                        </button>
                                    </a>
                                </div>
                                <div className='px-1'>
                                    <div className='border-l border-gray-700 h-6'></div>
                                </div>

                                <button
                                    onClick={toggleBookMark}
                                    className='bg-gray-800 hover:bg-gray-700 transition !p-2.5 rounded-full w-max text-gray-200 flex items-center gap-x-2'>
                                    {mark ?
                                        <BsBookmarkFill className='w-4 h-4' /> : <BsBookmark className='w-4 h-4' />
                                    }
                                </button>
                                <div className='relative'>
                                    <button
                                        onClick={toggleShare}
                                        className='bg-gray-800 hover:bg-gray-700 transition !p-2.5 rounded-full w-max text-gray-200 flex items-center gap-x-2 relative'>
                                        <IoShareSocial className='w-4 h-4' />
                                    </button>
                                    {open && (
                                        <motion.span
                                            initial={{ opacity: 0, scale: 0 }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1, originY: 0, originX: 1 }}
                                            transition={{ duration: 0.2, delay: 0 }}
                                            className='absolute top-10 right-0 ring-1 ring-gray-500 w-48 bg-gray-900 rounded-lg py-2 flex flex-col items-center justify-start mt-2 origin-top-right transform opacity-100 scale-100 transition duration-500 shadow-lg shadow-gray-900/50 z-20' role='menu' tabIndex={0} >
                                            <button className='flex items-center justify-start w-full text-sm text-white mx-2 px-3 py-2 font-normal gap-x-4 cursor-pointer hover:bg-gray-800 duration-300'>
                                                <FaFacebookF className='w-3 h-3' /> Facebook
                                            </button>
                                            <button className='flex items-center justify-start w-full text-sm text-white mx-2 px-3 py-2 font-normal gap-x-4 cursor-pointer hover:bg-gray-800 duration-300'>
                                                <FaLinkedinIn className='w-3 h-3' /> Linkedin
                                            </button>
                                            <button className='flex items-center justify-start w-full text-sm text-white mx-2 px-3 py-2 font-normal gap-x-4 cursor-pointer hover:bg-gray-800 duration-300'>
                                                <FaTwitter className='w-3 h-3' /> Twitter
                                            </button>
                                            <button className='flex items-center justify-start w-full text-sm text-white mx-2 px-3 py-2 font-normal gap-x-4 cursor-pointer hover:bg-gray-800 duration-300'>
                                                <FaInstagram className='w-3 h-3' /> Instagram
                                            </button>
                                        </motion.span>
                                    )}
                                </div>
                                <div className='relative'>
                                    <button
                                        onClick={toggleInfo}
                                        type='button'
                                        className='bg-gray-800 hover:bg-gray-700 transition !p-2.5 rounded-full w-max text-gray-200 flex items-center gap-x-2'>
                                        <BsThreeDots className='w-4 h-4' />
                                    </button>
                                    {info && (
                                        <motion.span
                                            initial={{ opacity: 0, scale: 0 }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1, originY: 0, originX: 1 }}
                                            transition={{ duration: 0.2 }}
                                            className='absolute top-10 right-0 ring-1 ring-gray-500 w-48 bg-gray-900 rounded-lg py-2 flex flex-col items-center justify-start mt-2 origin-top-right transform opacity-100 scale-100 transition duration-500 shadow-lg shadow-gray-900/50 z-20' role='menu' tabIndex={0}>
                                            <CopyToClipboard text={value} onCopy={() => setCopied(true)} >
                                                <motion.button variants={itemVariants} onCopy={() => setCopied(true)} className='flex items-center justify-start w-full text-sm text-white mx-2 px-3 py-2 font-normal gap-x-4 cursor-pointer hover:bg-gray-800 duration-300'>
                                                    {copied ?
                                                        <><BsClipboardCheck className='w-4 h-4 text-green-' /> Copied </> :
                                                        <><MdContentCopy className='w-4 h-4' /> Copy</>
                                                    }
                                                </motion.button>
                                            </CopyToClipboard>
                                            <motion.button variants={itemVariants} onClick={toggleInfo} className='flex items-center justify-start w-full text-sm text-white mx-2 px-3 py-2 font-normal gap-x-4 cursor-pointer hover:bg-gray-800 duration-300'>
                                                <a href="#comment" className='flex items-center gap-x-4 w-full'>
                                                    <IoChatboxEllipsesOutline className='w-4 h-4' /> Comment
                                                </a>
                                            </motion.button>
                                            <motion.button variants={itemVariants} onClick={openModal} className='flex items-center justify-start w-full text-sm text-white mx-2 px-3 py-2 font-normal gap-x-4 cursor-pointer hover:bg-gray-800 duration-300'>
                                                <a href="#modal" className='flex items-center gap-x-4 w-full'>
                                                    <TbBug className='w-4 h-4' /> Report
                                                </a>
                                            </motion.button>
                                        </motion.span>
                                    )}
                                </div>
                                {modal && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        exit={{ opacity: 0, scale: 0 }}
                                        animate={{ scale: 1, opacity: 1, }}
                                        className='absolute transition-transform transform-gpu opacity-100 scal1\ bg-white -left-1/4 rounded-xl border p-8 shadow-xl shadow-gray-500/30 origin-center backdrop-blur-lg'>
                                        <div className='h-max max-w-md sm:w-[30rem] flex items-center justify-center relative'>
                                            <div className='flex flex-col items-center justify-start w-full'>
                                                <h4 className='text-xl font-semibold text-gray-900 mt-4 text-start w-full'>Message</h4>
                                                <p className='text-sm font-medium text-gray-600 my-4'>
                                                    Please provide any additional information or context that will help us understand and handle the situation.
                                                </p>
                                                <textarea name="report" id="report" className='resize-none outline-none w-full p-4 rounded-md bg-gray-100' rows={4} placeholder='...' />
                                                <div className='flex items-center justify-start w-full space-x-4 mt-4'>
                                                    <button className='px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-700 text-white font-medium text-sm'>
                                                        Send
                                                    </button>
                                                    <button onClick={openModal} className='px-4 py-2 rounded-md bg-white hover:bg-gray-100 text-gray-700 ring-[1px] ring-gray-300 font-medium text-sm'>
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                            <button onClick={openModal} className='bg-gray-200 text-gray-900 rounded-full p-1 absolute top-0 right-2 hover:bg-gray-300'>
                                                <IoMdClose className='w-5 h-5' />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-8 md:mt-0 md:absolute md:top-0 md:right-0 md:bottom-0 md:w-1/2 lg:w-2/5 2xl:w-1/3' >
                    <div className='hidden md:block absolute top-0 left-0 bottom-0 w-1/5 from-gray-900 dark:from-black bg-gradient-to-r'></div>
                    <Image src={post.featuredImage.url}
                        alt='featuredImage'
                        width={2000}
                        height={2000}
                        unoptimized
                        className='block w-full h-full object-cover'
                    />
                </div>
            </header >

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative my-10 container px-4 lg:px-36">
                <div className="col-span-1 lg:col-span-8">
                    <GalleryDetail post={post} />
                    <Author article={post} />
                    <Form slug={post.slug} />
                    <Comments slug={post.slug} />
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative top-8">
                        <ArticleWidget />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleDetails

export async function getStaticProps({ params }: any) {
    const data = await getGalleryDetails(params.slug);

    return {
        props: {
            post: data,
        },
        revalidate: 10,
    };
}

export async function getStaticPaths() {
    const posts = await getGallery();
    return {
        paths: posts.map(({ node: { slug } }: any) => ({ params: { slug } })),
        fallback: true,
    };
}