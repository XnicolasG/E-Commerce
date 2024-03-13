import React from 'react'
import {XMarkIcon} from '@heroicons/react/24/solid'

const CartDetail = () => {
  return (
   <aside className='flex flex-col w-full  sm:w-80 h-full fixed top-12 right-0 border-l-4 border-black rounded-l-md bg-white z-30'>
    <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>detail</h2>
        <p> <XMarkIcon className='h-7 w-7 border-2 border-transparent hover:border-2 hover:border-black rounded-full transition-all duration-300'></XMarkIcon> </p>
    </div>
   </aside>
  )
}

export default CartDetail