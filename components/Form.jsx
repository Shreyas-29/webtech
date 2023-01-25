import React, { useEffect, useRef, useState } from 'react';
import { submitComment } from '../services/graphql';

function Form({ slug }) {

    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [success, setSuccess] = useState(false);

    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();

    useEffect(() => {
        setLocalStorage(window.localStorage);
        nameEl.current.value = window.localStorage.getItem('name');
        emailEl.current.value = window.localStorage.getItem('email');
    }, []);

    const handleSubmitComment = () => {
        setError(false);

        const { value: comment } = commentEl.current;
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current;
        const { checked: storeData } = storeDataEl.current;

        if (!comment || !name || !email) {
            setError(true);
            return;
        }
        const commentObj = { name, email, comment, slug };
        if (storeData) {
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
        } else {
            window.localStorage.removeItem('email', email);
            window.localStorage.removeItem('email', email);
        }

        submitComment(commentObj).then((res) => {
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 10000);
        });

    };

    return (
        <div className='rounded-xl p-4 sm:p-8 pb-12 mb-8 bg-white w-full' id='comment'>
            <h2 className='text-xl font-semibold text-gray-900 border-b pb-4'>Leave a reply</h2>
            <div className='grid grid-cols-1 gap-4 my-4'>
                <textarea
                    name="comment"
                    id="comment"
                    cols={30} rows={5}
                    ref={commentEl}
                    placeholder='Add a discussion'
                    className='p-4 outline-none w-full rounded-md focus:ring-2 ring-indigo-500 bg-slate-100 resize-none'
                />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
                <input
                    type="text"
                    ref={nameEl}
                    name='name'
                    placeholder='Name'
                    className='py-2 px-4 outline-none w-full rounded-md focus:ring-2 ring-indigo-500 bg-slate-100'
                />
                <input
                    type="email"
                    ref={emailEl}
                    name='email'
                    placeholder='Email'
                    className='py-2 px-4 outline-none w-full rounded-md focus:ring-2 ring-indigo-500 bg-slate-100'
                />
            </div>

            <div className='grid grid-cols-1 gap-4 mb-4'>
                <div className='flex items-center justify-start gap-2 px-1'>
                    <input
                        ref={storeDataEl}
                        id='storeData'
                        name='storeData'
                        value='true'
                        type='checkbox'
                        className='cursor-pointer'
                    /> <label className='text-sm font-normal cursor-pointer text-gray-600' htmlFor='storeData'>
                        Save my email and name for next time I comment.
                    </label>
                </div>
            </div>

            {error && <p className='text-sm text-red-500 font-medium'>All fields are required!</p>}
            <div className='mt-8 flex items-center gap-2'>
                <button type='button' onClick={handleSubmitComment} className='submit bg-indigo-500 font-medium text-white px-5 py-2 rounded-md hover:bg-indigo-600 transition'>
                    Post Comment
                </button>
                {success && <p className='text-sm font-medium text-green-500'>
                    Comment submited for review.
                </p>}
            </div>
        </div>
    )
}

export default Form
