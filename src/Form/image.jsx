import React from 'react'

const Image = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='border-8 border-blue-500 w-44 h-[198px] relative'>
            <img className='absolute top-[-20px] left-4 h-48' src="/images/fignewq.jpeg" alt="photo" />
        </div>
    </div>
  )
}

export default Image