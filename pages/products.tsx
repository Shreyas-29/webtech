import React, { useEffect, useState } from 'react';
import Image from 'next/dist/client/image';
import Link from 'next/dist/client/link';
import Head from 'next/head';
import { IoCart } from 'react-icons/io5';
import { getProducts } from '../services/graphql';

function Products() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProducts()
            .then((result) => setProduct(result))
    }, []);

    const products = product.map((item: any) => item.node);

    console.log(products);

    return (
        <section>
            <Head>
                <title>Webtech | Products</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <div className='w-screen px-4 sm:px-10 lg:px-32 my-8 pb-16 relative'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center w-full gap-8'>

                    {products.map((item: any) => (
                        <Link href={`/products/${item.slug}`} key={item.id}>
                            <div key={item.id} className='flex flex-col items-center justify-start w-full p-4 sm:p-6 relative border hover:border- hover:shadow-xl hover:bg-white transition rounded-xl'>
                                <Image
                                    src={item.featuredImage.url}
                                    alt='Image'
                                    unoptimized
                                    width={2000}
                                    height={2000}
                                    className='w-full h-52 object-cover object-center rounded-md'
                                />
                                <div className='flex flex-col items-start justify-start w-full space-y-2 mt-4'>
                                    <h2 className='text-lg sm:text-xl font-semibold text-gray-900'>
                                        {item.title.substr(0, 40)}
                                    </h2>
                                    <p className='text-base font-medium text-gray-600'>
                                        {item.description.substr(0, 50)}...
                                    </p>
                                    <div className='flex items-center justify-between w-full !mt-4'>
                                        <button className='px-3 py-1 rounded-md w-max bg-indigo-500 text-white hover:bg-indigo-600 font-medium'>
                                            Buy Now
                                        </button>
                                        <button className=''>
                                            <IoCart className='w-7 h-7 text-gray-600 hover:text-gray-900' />
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Products
