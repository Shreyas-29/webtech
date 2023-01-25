import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Author({ article }: any) {

    const author = article.author;

    return (
        <div className=' py-8'>
            <div className="flex items-start justify-start ">
                <Link href={`/author/${author.slug}`}>
                    <Image
                        src={author.photo.url}
                        alt='author'
                        width={2000}
                        height={2000}
                        unoptimized
                        className='sm:w-24 sm:h-24 w-40 h-16 rounded-lg object-cover'
                    />
                </Link>
                <div className='flex flex-col ml-3 sm:ml-5'>
                    <span className='text-sm text-neutral-500 uppercase tracking-wider font-medium'>
                        written by
                    </span>
                    <h2 className='text-lg font-semibold text-neutral-900'>
                        <Link href={`/author/${author.slug}`}>
                            {author.name}
                        </Link>
                    </h2>
                    <p className='text-sm sm:text-base text-neutral-500 font-medium'>
                        {author.bio}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Author
