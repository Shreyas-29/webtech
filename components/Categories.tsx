import React, { useEffect, useState } from 'react'
import { getCategories } from '../services/graphql';
import { BsCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import Link from 'next/link';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 768, min: 640 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
};
export type featuredImage = {
    url: string,

}

const Categories = () => {

    const [categories, setCategories] = useState<{ name: string, featuredImage: any, slug: string, title: string, metaDesc: string, color: any }[]>([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getCategories()
            .then((newCategories) => {
                setCategories(newCategories);
                setDataLoaded(true);
            })
    }, []);

    const leftArrow = (
        <div className='absolute arrow-btn left-0 text-center p-2 cursor-pointer bg-indigo-500 hover:bg-indigo-600 rounded-full shadow-lg shadow-indigo-600/40'>
            <BsCaretLeftFill className='text-white w-5 h-5' />
        </div>
    )
    const rightArrow = (
        <div className='absolute arrow-btn right-0 text-center p-2 cursor-pointer bg-indigo-500 hover:bg-indigo-600 rounded-full shadow-lg shadow-indigo-600/40'>
            <BsFillCaretRightFill className='text-white w-5 h-5' />
        </div>
    )


    return (
        <section className='px-4 sm:px-10 lg:px-40 my-16 w-full'>
            <div className='flex flex-col items-center text-center w-full mt-4 py-8 space-y-4'>
                <h2 className='font-semibold text-2xl sm:text-3xl'>Top Categories</h2>
                <p className='text-gray-600 font-medium mb-4'>Explore the most trending categories and their posts.</p>
            </div>

            <Carousel infinite customLeftArrow={leftArrow} customRightArrow={rightArrow} responsive={responsive} itemClass="p-4">
                {dataLoaded && categories.map((item) => (
                    <Link href={`/categories/${item.slug}`} key={item.slug}>
                        <div className='card flex flex-col items-center justify-center w-full relative group'>
                            <Image
                                src={item.featuredImage.url}
                                alt='category'
                                width={2000}
                                height={2000}
                                unoptimized
                                className='w-full sm:w-60 h-44 rounded-lg object-cover object-center'
                            />
                            <p className={`absolute opacity-0 bottom-0 group-hover:opacity-100 group-hover:-translate-y-1/3 group-hover:bottom-1/3 transition duration-300 ease-in-out px-3 py-1 rounded-md  hover:bg-indigo-500 text-indigo-500 hover:text-white bg-indigo-100`}>
                                {item.title}
                            </p>
                        </div>
                    </Link>
                ))}
            </Carousel>
        </section>
    )
}

export default Categories
