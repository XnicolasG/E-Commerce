import React, { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { CartContext } from '../../Context/ContextProvider'
import CardCart from './CardCart'

const CartDetail = () => {
  const { state, closeCartDetail } = useContext(CartContext)
  return (
    <aside className={`${state.openCart ? 'flex' : 'hidden'} flex-col w-full  sm:w-80 lg:w-[500px] h-screen fixed top-10 sm:top-12 right-0 border-4 border-black rounded-lg backdrop-blur-2xl z-30`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-semibold text-2xl'>Cart details</h2>
        <p
          onClick={closeCartDetail}
        > <XMarkIcon className='h-7 w-7 border-2 border-transparent cursor-pointer hover:border-2 hover:bg-black hover:text-white rounded-full transition-all duration-300'></XMarkIcon> </p>
      </div>
      {
        state.cartProducts?.map((prod) => (
          <CardCart
            key={prod.id}
            {...prod}
          />
        ))
      }
    </aside>
  )
}

export default CartDetail