import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { getCategories } from '../services/graphql';
import Link from 'next/link';

function TopicWidget() {


    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories()
            .then((result) => setCategories(result));
    }, []);


    return (
        <div className='my-8 pt-5 pb-7 w-full rounded-xl border'>
            <div className='flex items-start justify-between w-full mb-4 pt-2 pb-4 px-4 border-b'>
                <h4 className='text-lg font-semibold'>✨ Trending topics</h4>
                <Link href={'/categories'}>
                    <button className='text-indigo-500 hover:text-indigo-500'>
                        view all
                    </button>
                </Link>
            </div>
            {categories.slice(3, 8).map((category: any) => (
                <Link href={`/categories/${category.slug}`} key={category.id}>
                    <div className='w-full cursor-pointer px-6 py-4 hover:bg-slate-200 border-b-2 last:border-b-0 transition duration-300 flex items-center justify-start gap-x-4 '>
                        <div className='overflow-hidden rounded-md'>
                            <Image
                                src={category.featuredImage.url}
                                alt='c'
                                width={100}
                                height={100}
                                unoptimized
                                className='w-14 h-14 rounded-md object-cover hover:scale-110 transition ease-in-out duration-300'
                            />
                        </div>
                        <p className='font-medium text-gray-800'>{category.title}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default TopicWidget
