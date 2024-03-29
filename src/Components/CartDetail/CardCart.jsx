import { TrashIcon } from '@heroicons/react/24/solid'
import React, { useContext } from 'react'
import { CartContext } from '../../Context/ContextProvider'
import '../../App.css'

const CardCart = ({ id, price, image, title, quantity }) => {
    const { state, updateState } = useContext(CartContext)
    
   
    const handleDelete = () => {
        // creating new array by filter all the products that id is different
        const filteredProducts = state.cartProducts.filter(prod => prod.id != id);
        
        const findProduct = state.cartProducts.find(prod => prod.id === id);
        if (!findProduct) return;
        const newCount  = state.count - findProduct.quantity;
        updateState({
            count: newCount >= 0 ? newCount : 0,
            cartProducts: filteredProducts,
        })
    }
    const onIncrease = () => {
        const increaseQuantity = state.cartProducts.map(prod => {
            if (prod.id === id) {
                return { ...prod ,quantity: prod.quantity + 1 }
            } else {
                return prod
            }
        });
        updateState({
            count: state.count + 1,
            cartProducts: increaseQuantity,
        })
    }

    const onDecrease = () => {
        const increaseQuantity = state.cartProducts.map(prod => {
            if (prod.id === id) {
                if (prod.quantity === 1) {
                    handleDelete();
                    return null
                }else{
                    console.log(prod.price);
                    return { ...prod , quantity: prod.quantity - 1 }
                }
            } else {
                return prod
            }
        }).filter(Boolean)
        updateState({
            count: state.count - 1,
            cartProducts: increaseQuantity,
        })
    }
    return (
        <section className='mx-auto my-2 flex gap-x-4 justify-around items-center pr-2 w-[90%] md:w-[70%] bg-black text-white rounded-lg '>
            <main className='flex gap-x-4 w-[90%] md:w-80 bg-stone-200 text-black rounded-lg overflow-hidden'>
                <div className='w-52 justify-center items-center p-2 rounded-sm overflow-hidden'>
                    <img className='w-full'  src={image} alt="product" />
                </div>
                <section className='flex flex-col text-pretty'>
                    <p className='title max-h-20 overflow-auto '>{title}</p>
                    <p className='font-semibold text-lg'>$ {price}</p>
                    <p className='flex gap-x-1 justify-around items-center rounded-md border-2 bg-stone-300 overflow-hidden w-24 mb-2'>
                        <button
                        onClick={onDecrease}
                            className='  font-bold text-center transition-all hover:text-rose-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                            </svg>

                        </button>
                        <span className='mx-2 text-lg font-semibold'>
                            {quantity}
                        </span>
                        <button
                            onClick={onIncrease}
                            className=' text-md font-bold text-center transition-all hover:text-blue-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                            </svg>

                        </button>
                    </p>
                </section>
            </main>
            <div className='flex items-center mx-auto ml-0 hover:text-red-500 cursor-pointer hover:ml-2 transition-all duration-200 '>
                <button
                    onClick={handleDelete}
                    type='button'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default CardCart