import Image from 'next/image';
import Link from 'next/dist/client/link';
import React, { useEffect, useState } from 'react';
import { getCategories } from '../services/graphql';

function ArticleWidget() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((result) => setCategories(result));
    }, []);


    return (
        <div className='rounded-xl border py-5'>
            <div className='flex items-start justify-between w-full mb-4 pt-2 pb-4 border-b px-4'>
                <h4 className='text-lg font-semibold'>🏷️ Discover more categories</h4>
            </div>
            <div className='flex flex-wrap gap-x-2 w-full px-4'>
                {categories.slice(0, 5).map((category: any) => (
                    <Link href={`/categories/${category.slug}`} key={category.id} className='w-full'>
                        <div className='w-full cursor-pointer px-6 py-4 hover:bg-slate-200 border-b-2 last:border-b-0 transition duration-300 flex items-center text-start justify-start gap-x-4 rounded-md'>
                            <div className='overflow-hidden rounded-md'>
                                <Image
                                    src={category.featuredImage.url}
                                    alt='category'
                                    width={2000}
                                    height={2000}
                                    unoptimized
                                    className='w-14 h-14 rounded-md object-cover hover:scale-110 transition ease-in-out duration-300'
                                />
                            </div>
                            <p className='font-medium text-gray-800'>{category.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ArticleWidget
