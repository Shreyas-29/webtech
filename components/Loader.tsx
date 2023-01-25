import React from 'react'
import { CgSpinner } from 'react-icons/cg';

function Loader() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <CgSpinner className='mr-2 transition-transform duration-150 animate-spin' /> Loading...
    </div>
  )
}

export default Loader
