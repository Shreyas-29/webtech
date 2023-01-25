import React, { useEffect, useState } from 'react'
import { getComments } from '../services/graphql';
import moment from 'moment';
import parse from 'html-react-parser';
import { BsChatSquare } from 'react-icons/bs';

function Comments({ slug }: any) {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(slug)
            .then((result) => setComments(result));
    }, []);

    return (
        <div id='comments' className='bg-white rounded-xl p-4 sm:p-8 pb-12 mb-8'>
            <h3 className='font-semibold text-xl text-gray-900 pb-4'>
                {' '}
                Comments {comments.length > 0 && <> ({comments.length})</>}
            </h3>
            {comments.length > 0 ? (
                <>
                    {comments.map((comment: any) => (
                        <div key={comment.createdAt} className='w-full border rounded-lg border-neutral-200 my-4 p-4'>
                            <p className='mb-4 flex items-center justify-between'>
                                <span className='font-medium capitalize'>
                                    {comment.name}
                                </span>
                                <span className='font-normal text-gray-500 text-sm'>
                                    {moment(comment.createdAt).format('DD MMM, YYYY')}
                                </span>
                            </p>
                            <p className='whitespace-pre-line text-neutral-500 font-medium w-full'>
                                {parse(comment.comment)}
                            </p>
                        </div>
                    ))}
                </>
            ) : (
                    <div className='text-gray-600 font-medium flex flex-col items-center justify-center space-y-2 my-8'>
                        <BsChatSquare className='w-8 h-8 text-blue-600' />
                        <h5 className='text-lg sm:text-xl text-black font-semibold'>Start a conversation</h5>
                        <p className='text-gray-500 font-medium'>Your comments will show up here.</p>
                    </div>
            )}
        </div>
    )
}

export default Comments
