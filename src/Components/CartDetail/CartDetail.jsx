import  { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { CartContext } from '../../Context/ContextProvider'
import CardCart from './CardCart'
import { useCreateOrder } from '../../Hooks/Checkout/useCreateOrder.js'
import { useNavigate } from 'react-router-dom'

const CartDetail = () => {
  const { state, closeCartDetail } = useContext(CartContext)
  const { formattedTotal } = useCreateOrder()
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/Checkout')
    closeCartDetail()
  }

  return (
   <aside className={`${state.openCart ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out flex flex-col pb-20 w-full sm:w-80 lg:w-[500px] h-[100lvh] fixed sm:top-16 right-0 border-4 border-black overflow-hidden backdrop-blur-2xl z-30`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-semibold text-2xl'>Cart details</h2>
        <p
          onClick={closeCartDetail}
        > <XMarkIcon className='h-7 w-7 border-2 border-transparent cursor-pointer hover:border-2 hover:bg-black hover:text-white rounded-full transition-all duration-300'></XMarkIcon> </p>
      </div>
      <div className='overflow-auto'>
        {

          state.cartProducts?.map((prod) => (
            <CardCart
              key={prod.id}
              {...prod}
            />
          ))
        }
      </div>
      {
        state.cartProducts.length === 0
          ? <p className='text-center text-lg font-bold mt-10'>Your cart is empty</p>
          : <section className='flex flex-col items-center mt-6 text-xl'>
            <p>Total: <span className=' font-semibold'>$ {formattedTotal}</span></p>
            <button
              onClick={handleCheckout}
              className={`bg-black w-52 py-2 mt-2 font-bold  text-white rounded `}
              type='button'>
              Checkout
            </button>
          </section>
      }
    </aside>
  )
}

export default CartDetail