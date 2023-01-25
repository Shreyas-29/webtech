import React from 'react'

function CategoryWidget({ blogs }: any) {

    const blog = blogs.map((item: any) => item.node);
    const tags = blog.map((tag: any) => tag.tag);
    const t = tags.map((a: any) => a);


    return (
        <div className='rounded-xl border py-5'>
            <div className='flex items-start justify-between w-full mb-4 pt-2 pb-4 border-b px-4'>
                <h4 className='text-lg font-semibold'>🏷️ Discover more tags</h4>
                <button className='text-indigo-500 hover:text-indigo-500'>
                    view all
                </button>
            </div>
            <div className='flex flex-wrap gap-x-2 w-full px-4'>
                {t.map((a: any, index: any) => (
                    <>
                        <p className='px-3 py-1 rounded-md border text-gray-700 my-2 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white transition duration-300 text-sm cursor-pointer grow font-normal'key={index}>
                            #{a[0]} ({a.length})
                        </p>
                        <p className='px-3 py-1 rounded-md border text-gray-700 my-2 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white transition duration-300 text-sm cursor-pointer grow font-normal'>
                            #{a[1]} ({a.length})
                        </p>
                        <p className='px-3 py-1 rounded-md border text-gray-700 my-2 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white transition duration-300 text-sm cursor-pointer grow font-normal'>
                            #{a[2]} ({a.length})
                        </p>
                        <p className='px-3 py-1 rounded-md border text-gray-700 my-2 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white transition duration-300 text-sm cursor-pointer grow font-normal'>
                            #{a[3] || a[4] || a[5]} ({t.length})
                        </p>
                    </>
                ))}
            </div>
        </div>
    )
}

export default CategoryWidget
