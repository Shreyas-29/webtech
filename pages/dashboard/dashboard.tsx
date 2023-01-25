import React from 'react';
import { useSession } from 'next-auth/react';

function Dashboard() {

    const { data: session } = useSession();

    return (
        <div className='w-full h-full'>
            <div className='rounded-xl h-full text-sm border border-neutral-100 p-6 md:text-base'>
                <span className='block font-normal text-gray-500 mb-2 text-base w-full'>
                    Hello
                    <span className='text-black px-2 text-lg font-semibold !capitalize'>
                        {session?.user?.name || 'User'}👋
                    </span>
                    <p className='text-gray-500 font-normal'>
                        From your account dashboard you can view your Dashboard, manage your Posts, Subscriptions, Products and edit profile.
                    </p>
                </span>
            </div>
        </div>
    )
}

export default Dashboard
