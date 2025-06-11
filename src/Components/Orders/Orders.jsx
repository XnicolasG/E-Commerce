import { useContext } from 'react'
import { CartContext } from '../../Context/ContextProvider'
import { OrderCards } from '../../Pages/Orders/OrderCards'

const Orders = () => {
    const { state } = useContext(CartContext)
    const profile = state.user.profile.name

    return (
        <section>
            {
                state.orders[profile].length < 1
                ?
                <p className="text-xl">{state.user.profile.name}</p>
                :
                <div className={`text-white bg-black flex flex-col text-center rounded shadow-md h-auto shadow-black p-2 w-full sm:w-96`}>
                    <p className='font-bold text-lg'>All orders</p>
                    {state.orders[profile].length <= 1 && (
                        <hr className="h-[2px] w-full border-t-0 my-2 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent" />
                    )}
                    <OrderCards profile={profile} />
                    <hr className="h-[2px] w-full border-t-0 my-2 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent" />
                </div>
            }
        </section>
    )
}

export default Orders