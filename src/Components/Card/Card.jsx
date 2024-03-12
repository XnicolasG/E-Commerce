import React from 'react'

const Card = () => {
    return (
        <div className='flex flex-col bg-blue-100/50  cursor-pointer rounded-md shadow-md shadow-black w-56 h-72 overflow-hidden'>
            <figure className='relative my-2 w-full h-1/2 overflow-hidden '>
                <span className='absolute bottom-0 m-1 px-2 rounded-md text-white bg-black/70'>Electronics</span>
                <img
                className='w-full h-full object-cover hover:transform hover:scale-110 hover:rotate-3 transition-transform duration-200 ' 
                src="https://cdn.cs.1worldsync.com/syndication/mediaserverredirect/6ba5c503482e48660fd691c185c9245c/original.png" alt="controller" />
            </figure>
            <section className='flex flex-col  text-white rounded-t-xl justify-center px-4 bg-black h-1/2'>
                <div className='flex justify-between mb-2'>

                <p>Xbox Controller</p>
                <p className='text-lg font-semibold'>$120</p>
                </div>
                <button 
                className='p-1 mt-2 w-22 text-white bg-blue-600 rounded-md hover:font-semibold hover:bg-blue-700 transition-all duration-200'
                type='button'>Add to cart</button>
            </section>
        </div>
    )
}

export default Card