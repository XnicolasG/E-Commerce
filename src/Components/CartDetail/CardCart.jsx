import { TrashIcon } from '@heroicons/react/24/solid'
import React from 'react'

const CardCart = ({ id, price, image, title,quantity}) => {
    return (
        <section className='mx-auto my-2 flex gap-x-4 justify-around items-center pr-2  bg-black w-[80%] text-white rounded-lg '>
            <main className='flex gap-x-4 bg-stone-200 text-black rounded-lg overflow-hidden'>
            <div className='w-24 p-2 rounded-sm overflow-hidden'>
                <img className='max-w-full' src={image} alt="product" />
            </div>
            <section className='flex flex-col text-pretty'>
                <p>{title}</p>
                <p className='font-semibold text-lg'>$ {price}</p>
                <p>Quantity: {quantity}</p>
            </section>
            </main>
            <div className='flex items-center mx-auto hover:text-red-500 cursor-pointer transition-all'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                </svg>

            </div>
        </section>
    )
}

export default CardCart