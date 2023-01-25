import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getProducts } from '../../services/graphql';

function Cart() {

  const [products, setProducts] = useState([]);
  const product = products.map((item: any) => item.node)
  const items = product.map((item: any) => item.status);


  useEffect(() => {
    getProducts()
      .then((result) => setProducts(result));
  }, []);


  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="max-w-xs overflow-x-scroll scrollbar-hide text-sm text-left text-gray-500 dark:text-gray-400 border- rounded-xl">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Payment
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {items.slice(0, 3).map((item: any) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 flex items-center gap-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className='flex items-center w-96 lg:w-auto max-w-md overflow-hidden gap-4 rounded-md'>
                    <div className='flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-md object-cover'>
                      <Image src={item.featuredImage.url} alt='Article Image' unoptimized width={1000} height={1000} className='w-full h-auto object-cover object-center rounded-md' />
                    </div>
                    <h4 className='inline-flex text-gray-900 font-semibold'>
                      {item.title}
                    </h4>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <span className='cursor-pointer p-1 px-2 rounded-md w-max font-medium text-sm'>
                    1
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className='cursor-pointer p-1 px-2 rounded-md w-max bg-yellow-100 text-yellow-800 font-medium text-sm'>
                    Dispatch
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className='cursor-pointer px-2 py-1 rounded-md bg-red-100 text-red-800 font-medium text-sm'>
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4">
                  ₹ {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cart
// how to asign the value to string of first element of an array 
