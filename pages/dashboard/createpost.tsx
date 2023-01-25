import React, { useEffect, useState } from 'react'
import { getCategories } from '../../services/graphql';
import { IoImageOutline } from 'react-icons/io5';

function CreatePost() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((result) => setCategories(result));
    }, []);
    const category = categories.map((item: any) => item);
    const option = category.map((item: any) => item.title)

    return (
        <div className='rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6'>
            <form action="#" className='grid md:grid-cols-2 gap-6 w-full p-3 md:py-5'>
                <div className='flex items-center w-full relative md:col-span-2'>
                    <label htmlFor="title" className='absolute -top-6 text-sm text-gray-800 mx-1'>Post Title</label>
                    <input
                        type="text"
                        name='title'
                        required
                        placeholder='Title of the post'
                        id='title'
                        autoComplete="off"
                        className='px-3 py-2 rounded-md border bg-white caret-indigo-500 font-medium text-black outline-none focus:ring-2 focus:ring-violet-500 w-full'
                    />
                </div>
                <div className='flex items-center w-full relative md:col-span-2 mt-4'>
                    <label htmlFor="excerpt" className='absolute -top-6 text-sm text-gray-800 mx-1'>Post Excerpt</label>
                    <textarea
                        name='excerpt'
                        cols={4}
                        required
                        placeholder='Short description about the post'
                        id='excerpt'
                        autoComplete="off"
                        className='px-3 py-2 resize-none rounded-md border bg-white caret-indigo-500 font-medium text-black outline-none focus:ring-2 focus:ring-violet-500 w-full'
                    />
                </div>
                <div className='flex items-center w-full relative mt-4'>
                    <label htmlFor="excerpt" className='absolute -top-6 text-sm text-gray-800 mx-1'>Category</label>
                    <select name="categories" id="categories" className='w-full px-3 py-2 rounded-md border bg-white caret-indigo-500 font-medium text-black outline-none focus:ring-2 focus:ring-violet-500'>
                        <option value="1">{option[0]}</option>
                        <option value="1">{option[1]}</option>
                        <option value="1">{option[2]}</option>
                        <option value="1">{option[3]}</option>
                        <option value="1">{option[4]}</option>
                        <option value="1">{option[5]}</option>
                        <option value="1">{option[6]}</option>
                    </select>
                </div>
                <div className='flex items-center w-full relative mt-4'>
                    <label htmlFor="tags" className='absolute -top-6 text-sm text-gray-800 mx-1'>Tags</label>
                    <input
                        type='text'
                        name='tags'
                        required
                        id='tags'
                        placeholder='#'
                        autoComplete="off"
                        className='px-3 py-2 resize-none rounded-md border bg-white caret-indigo-500 font-medium text-black outline-none focus:ring-2 focus:ring-violet-500 w-full'
                    />
                </div>
                <div className='block md:col-span-2 w-full my-4 relative'>
                    <label htmlFor="tags" className='absolute -top-6 text-sm text-gray-800 mx-1'>Featured Image</label>
                    <div className='mt-1 flex justify-center px-6 py-8 border-2 border-neutral-300 dark:border-neutral-700 border-dashed rounded-md'>
                        <div className='space-y-1 text-center'>
                            <IoImageOutline className='mx-auto h-12 w-12 text-neutral-400' />
                            <div className='flex flex-col sm:flex-row items-center justify-center text-sm text-neutral-600 font-medium'>
                                <label htmlFor="file" className='relative cursor-pointer rounded-md font-medium text-indigo-600 text-sm'>
                                    <p className='text-sm font-medium'>
                                        Upload file here
                                    </p>
                                    <input type="file" name='file' id='file' className='sr-only' />
                                </label>
                                <p className='text-sm font-normal pl-1'>or drag and drop </p>
                            </div>
                            <p className='text-xs font-normal text-gray-500'>
                                PNG, JPG, GIF upto 5MB
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center w-full relative md:col-span-2 mt-4'>
                    <label htmlFor="excerpt" className='absolute -top-6 text-sm text-gray-800 mx-1'>Post Content</label>
                    <textarea
                        name='excerpt'
                        rows={10}
                        required
                        placeholder='Write article here...'
                        id='excerpt'
                        autoComplete="off"
                        className='px-3 py-2 resize-none rounded-md border bg-white caret-indigo-500 font-medium text-black outline-none focus:ring-2 focus:ring-violet-500 w-full'
                    />
                </div>
                <div className='md:col-span-2 w-full my-4 flex items-center justify-center'>
                    <button type='submit' className='capitalize hover:shadow-lg w-full hover:shadow-purple-500/40 bg-gradient-to-l to-violet-500 via-purple-500 from-fuchsia-500 text-white px-4 py-2 font-normal hover:font-medium rounded-md relative transition-all duration-300 hover:scale-105 active:scale-95 ease-in-out flex items-center justify-center gap-4'>
                        Submit Post
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost
