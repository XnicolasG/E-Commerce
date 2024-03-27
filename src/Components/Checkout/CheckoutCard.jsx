import React, { useContext } from 'react'
import { CartContext } from '../../Context/ContextProvider';

const CheckoutCard = () => {
    const { state } = useContext(CartContext)
    console.log(state.order);
    return (
        <div>
            {
                state.order?.slice(-1)[0].products.map(prod => (
                    <>
                        {/* <hr className='h-[2px] w-full border-t-0  bg-gradient-to-r from-transparent via-black/80 to-transparent' /> */}
                        <section
                            key={prod.id}
                            className='w-96 mb-4 flex p-2 gap-4 mx-auto rounded shadow-md shadow-black text-white bg-black '
                        >
                            <div className='w-1/6 p-1 bg-white rounded-sm overflow-hidden'>
                                <img
                                    className='w-full'
                                    src={prod.image}
                                    alt={prod.title} />
                            </div>
                            <div className='flex flex-col' >
                                <p className='text-pretty flex-1 '>{prod.title}</p>
                                <div className='flex gap-x-10'>
                                    <p>Quantity: {prod.quantity}</p>
                                    <p className='p-0.5 px-2 font-semibold bg-white text-black rounded'>${prod.price}</p>
                                </div>
                            </div>
                        </section>
                    </>
                ))
            }
        </div>
    )
}

export default CheckoutCard