import { useContext, useState } from 'react'
import { CartContext } from '../../Context/ContextProvider'

const OrdersCards = () => {
    const { state, updateState } = useContext(CartContext)
    const orders = state?.Order.slice().reverse()
    // if Order is empty state will be '' if not, with the the first element id
    const [selectOrderById, setSelectOrderById] = useState(orders[0]?.id || '');

    const handleClick = (orderId) => {
        setSelectOrderById(orderId);
        updateState({
            // finding the specific order by it's id.
            productDetail: orders.find(order => order.id === orderId)
        })
    }
    return (
        <div className={`text-white bg-black flex flex-col text-center rounded shadow-md h-auto shadow-black p-2 w-full sm:w-96`}>
            <p className='font-bold text-lg'>All orders</p>
            {state.Order.length <= 1 && (
                <hr className="h-[2px] w-full border-t-0 my-2 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent" />
            )}

            <>
                {state.Order.length > 1 && (
                    <hr className="h-[2px] w-full border-t-0 my-2 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent" />

                )}
                {
                    orders.map(prod => (
                        <section
                            key={prod.id}
                            onClick={() => handleClick(prod.id)}
                            // if the current id in the map is the same as the one with catch on the state text color will change
                            className={`w-full mb-2 flex justify-around p-2 gap-2 mx-auto bg-transparent transition-all ${prod.id === selectOrderById ? 'text-cyan-500' : ''
                                }`}
                        >
                            <div className='flex flex-col w-2/3'>
                                <p className='flex gap-x-1'>
                                    <span >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                            <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                        </svg>

                                    </span>
                                    {prod.id}</p>
                                <p className='flex gap-x-1'>
                                    <span >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                                        </svg>
                                    </span>
                                    Total articles: {prod.totalProducts}
                                </p>
                            </div>
                            <div className='flex w-1/3 justify-center items-center'>
                                <p className='font-bold md:text-lg'>${prod.totalAmount}</p>
                                <span className={`${prod.id === selectOrderById ? 'flex' : 'hidden'} transtion-all duration-200`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </div>

                        </section>
                    ))}
            </>
            <hr className="h-[2px] w-full border-t-0 my-2 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>
    )
}

export default OrdersCards