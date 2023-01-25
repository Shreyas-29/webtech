import React, { useState } from 'react'
import { BsBookmark, BsBookmarkFill, BsChatSquareDots } from 'react-icons/bs'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';

function Blog({ report, journal }: any) {

  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(25);
  const [mark, setMark] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    if (liked) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  }
  const toggleBookMark = () => {
    setMark(!mark);
  }


  return (
    <section className='my-8 py-8 w-full container space-y-6'>
      <div className='flex flex-col items-center justify-center w-full space-y-4 mb-16'>
        <h2 className='text-2xl font-semibold text-gray-900'>
          Listen to audio live
        </h2>
        <p className='font-medium text-gray-600 text-center'>
          Click on th music icon to play the music or podcast
        </p>
      </div>
      <div className='container w-full mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full items-center justify-center gap-6'>

          {report.map((item: any) => (
            <div className='group relative overflow-hidden w-full h-80 sm:w-auto sm:h-auto'>
              <div className='absolute top-0 inset-x-0 p-3 flex items-center justify-between w-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:translate-y-1 z-30'>
                <div className='flex items-center justify-center gap-x-2'>
                  <button
                    onClick={toggleLike}
                    className={`relative min-w-[68px] flex items-center rounded-md group transition-colors px-5 py-2 text-sm gap-x-2 group ${liked ? 'bg-rose-100 text-rose-500' : 'text-gray-600 bg-neutral-50 hover:bg-rose-100 hover:text-rose-500'}`}
                    title='Liked'
                    type='button'
                  >
                    {liked ?
                      <FaHeart className='w-4 h-4' /> :
                      <FaRegHeart className='w-4 h-4' />
                    }
                    {count}
                  </button>
                  <button
                    className='px-5 py-2 rounded-md relative items-center hidden sm:flex text-sm text-gray-600 font-medium bg-neutral-50 gap-x-2 hover:text-teal-500 hover:bg-teal-100'
                    title='Comments'
                    type='button'
                  >
                    <BsChatSquareDots className='w-4 h-4' />
                    <span className='font-medium'>
                      15
                    </span>
                  </button>
                </div>
                <div>
                  <button
                    onClick={toggleBookMark}
                    className='bg-neutral-50 hover:bg-gray-200 transition !p-2.5 rounded-md w-max text-gray-600 flex items-center gap-x-2'>
                    {mark ?
                      <BsBookmarkFill className='w-4 h-4' /> : <BsBookmark className='w-4 h-4' />
                    }
                  </button>
                </div>
              </div>
              <div className='flex flex-col items-center justify-start w-full rounded-lg relative'>
                <Link href={`/reports/${item.slug}`} className='w-full h-72'>
                  <Image
                    src={item.featuredImage.url}
                    alt='Image'
                    width={2000}
                    height={2000}
                    unoptimized
                    className='w-full !h-full object-cover rounded-lg object-center'
                  />
                  <Link href={`/reports/${item.slug}`} className='absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black opacity-70 rounded-lg'></Link>
                  <div className='absolute bottom-0 p-4 w-full flex flex-col items-start justify-start'>
                    <span className='w-max px-3 py-1 rounded-md bg-violet-100 text-violet-800 hover:bg-violet-800 hover:text-white transition mb-4 capitalize font-medium text-xs'>
                      {item.categories.slice(0, 1).map((category: any) => category.title)}
                    </span>
                    <h3 className='text-lg font-medium text-white mb-4'>
                      {item.title}
                    </h3>
                    <div className='flex items-center justify-start w-full'>
                      <p className='text-xs font-medium text-neutral-200'>
                        {item.author.name} · <span className='text-xs font-normal text-slate-300'>
                          {moment(item.createdAt).format('DD MMM, YYYY')}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}

        </div>

        {/* Main Grid */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center my-12 gap-6'>
         
          {journal.map((item: any) => (
            <Link href={`/journals/${item.slug}`}>
              <div className='border flex items-start justify-center rounded-lg p-4 gap-x-4 hover:shadow-xl transition duration-300 hover:shadow-gray-400/3 hover:scale-105 hover:border-0'>
                <Image src={item.featuredImage.url} alt='Image' width={2000} height={2000} unoptimized className='rounded-md w-20 h-20 object-cover' />
                <div className='flex flex-col space-y-2'>
                  <h4 className='text-base sm:text-lg font-semibold text-gray-800'>
                    {item.title.substr(0, 41)}...
                  </h4>
                  <p className='text-gray-600 font-normal text-xs'>
                    {moment(item.createdAt).format('DD MMM, YYYY')}
                  </p>
                </div>
              </div>
            </Link>
          ))}

        </div>
        {journal.length > 6 && (
          <div className='flex items-center justify-center w-full py-4'>
            <button className='bg-indigo-500 text-white px-5 py-3 rounded-lg hover:scale-105 transition duration-300 ease-in-out active:scale-95 hover:shadow-indigo-500/40 hover:shadow-lg font-medium text-base'>
              Show More 
            </button>
         </div> 
        )}

      </div>
    </section>
  )
}

export default Blog
//  <div className='group relative overflow-hidden w-full h-80 sm:w-auto sm:h-auto'>
//             <div className='absolute top-0 inset-x-0 p-3 flex items-center justify-between w-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:translate-y-1 z-30'>
//               <div className='flex items-center justify-center gap-x-2'>
//                 <button
//                   onClick={toggleLike}
//                   className={`relative min-w-[68px] flex items-center rounded-md group transition-colors px-5 py-2 text-sm gap-x-2 group ${liked ? 'bg-rose-100 text-rose-500' : 'text-gray-600 bg-neutral-50 hover:bg-rose-100 hover:text-rose-500'}`}
//                   title='Liked'
//                   type='button'
//                 >
//                   {liked ?
//                     <FaHeart className='w-4 h-4' /> :
//                     <FaRegHeart className='w-4 h-4' />
//                   }
//                   {count}
//                 </button>
//                 <button
//                   className='px-5 py-2 rounded-md relative items-center hidden sm:flex text-sm text-gray-600 font-medium bg-neutral-50 gap-x-2 hover:text-teal-500 hover:bg-teal-100'
//                   title='Comments'
//                   type='button'
//                 >
//                   <BsChatSquareDots className='w-4 h-4' />
//                   <span className='font-medium'>
//                     15
//                   </span>
//                 </button>
//               </div>
//               <div>
//                 <button
//                   onClick={toggleBookMark}
//                   className='bg-neutral-50 hover:bg-gray-200 transition !p-2.5 rounded-md w-max text-gray-600 flex items-center gap-x-2'>
//                   {mark ?
//                     <BsBookmarkFill className='w-4 h-4' /> : <BsBookmark className='w-4 h-4' />
//                   }
//                 </button>
//               </div>
//             </div>
//             <div className='flex flex-col items-center justify-start w-full rounded-lg relative'>
//               <Link href={''} className='w-full h-72'>
//                 <Image
//                   src={'https://img-getpocket.cdn.mozilla.net/404x202/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fs3.amazonaws.com%2Fpocket-curatedcorpusapi-prod-images%2Fb9f36bdc-5e1d-4c19-960b-eda2a1687afa.jpeg'}
//                   alt='Image'
//                   width={2000}
//                   height={2000}
//                   unoptimized
//                   className='w-full !h-full object-cover rounded-lg object-center'
//                 />
//                 <Link href={''} className='absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black opacity-70 rounded-lg'></Link>
//                 <div className='absolute bottom-0 p-4 w-full flex flex-col items-start justify-start'>
//                   <span className='w-max px-3 py-1 rounded-md bg-violet-100 text-violet-800 hover:bg-violet-800 hover:text-white transition mb-4 capitalize font-medium text-xs'>
//                     Health
//                   </span>
//                   <h3 className='text-lg font-medium text-white mb-4'>
//                     Take a 3d tour through a microsoft datacenter
//                   </h3>
//                   <div className='flex items-center justify-start w-full'>
//                     <p className='text-xs font-medium text-neutral-200'>
//                       Shreyas Sihasane · <span className='text-xs font-normal text-slate-300'>
//                         20 May, 2023
//                       </span>
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>