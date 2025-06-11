import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/ContextProvider';

const CheckoutCard = () => {
    const { state } = useContext(CartContext)
    const [displayedProducts, setDisplayedProducts] = useState(null);

    console.warn(state);

    useEffect(() => {
        const currentProfile = state.user.profile.name;

        if (!state.orders?.[currentProfile].some(order => order.id === state.productDetail?.id)) {
            setDisplayedProducts(state.orders?.[currentProfile]?.slice(-1)[0] || null);
        } else {
            setDisplayedProducts(state.productDetail);
        }
    }, [state.orders, state.user.profile.name, state.productDetail]);

    return (
        <div className='flex flex-col text-white justify-center items-center'>
            {
                displayedProducts && displayedProducts.products ? (
                    <>
                        {displayedProducts.products.map(prod => (
                            <section
                                key={prod.id}
                                className='w-full sm:w-72 lg:w-96  mb-4 flex p-2 gap-4 mx-auto rounded shadow-md shadow-black  bg-black '
                            >
                                <div className='flex items-center w-1/6 p-1 bg-white rounded-sm overflow-hidden'>
                                    <img
                                        className='w-full'
                                        src={prod.image}
                                        alt={prod.title} />
                                </div>
                                <div className='flex flex-col w-full' >
                                    <p className='text-pretty flex-1 '>{prod.title}</p>
                                    <hr className="h-[1px] w-full border-t-0 my-4 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent" />
                                    <div className='flex gap-x-10 '>
                                        <p className='font-semibold'>Quantity: {prod.quantity}</p>
                                        <p className='p-0.5 px-2 font-semibold bg-white text-black rounded'>${prod.price}</p>
                                    </div>
                                </div>
                            </section>
                        ))
                        }
                        <p className='uppercase font-semibold text-lg bg-black  px-4 text-center rounded shadow shadow-black '>Total: ${displayedProducts.totalAmount}</p>
                    </>
                ) : (
                    <p>No products to display</p>
                )}
        </div>
    )
}

export default CheckoutCard