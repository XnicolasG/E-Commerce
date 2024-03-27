import React, { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { CartContext } from '../../Context/ContextProvider'
import CardCart from './CardCart'
import { totalPrice } from '../../utils/reducer'
import { useNavigate } from 'react-router-dom'

const CartDetail = () => {
  const { state, closeCartDetail, updateState } = useContext(CartContext)
  let date = Date.now()
  const navigate = useNavigate();
  const onCheckout = () => {
    if (state.cartProducts.length === 0) {
      console.log('add some products');
    } else {

      const today = new Date(date)
      const formattedDate = today.toString().slice(0, 24)
      const orderToAdd = {
        id: formattedDate,
        products: state.cartProducts,
        totalAmount: totalPrice(state.cartProducts).toFixed(2),
        totalProducts: state.count,
      }
      updateState({
        order: [orderToAdd],
        cartProducts: [],
        count: 0
      })
      closeCartDetail()
      navigate('/MyOrder')
      console.log(formattedDate);
    }
  }

  return (
    <aside className={`${state.openCart ? 'flex' : 'hidden'} flex-col pb-20 w-full sm:w-80 lg:w-[500px] h-[100lvh] fixed top-10 sm:top-12 right-0 border-4 border-black rounded-lg backdrop-blur-2xl z-30`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-semibold text-2xl'>Cart details</h2>
        <p
          onClick={closeCartDetail}
        > <XMarkIcon className='h-7 w-7 border-2 border-transparent cursor-pointer hover:border-2 hover:bg-black hover:text-white rounded-full transition-all duration-300'></XMarkIcon> </p>
      </div>
      <div className='flex-1 overflow-auto'>
        {

          state.cartProducts?.map((prod) => (
            <CardCart
              key={prod.id}
              {...prod}
            />
          ))
        }
      </div>
      <section className='flex flex-col items-center text-xl'>
        <p>Total: <span className=' font-semibold'>$ {totalPrice(state.cartProducts).toFixed(2)}</span></p>
        <button
          onClick={onCheckout}
          className={`bg-black w-52 py-2 mt-2 font-bold  text-white rounded `}
          type='button'>
          Checkout
        </button>
      </section>
    </aside>
  )
}

export default CartDetail