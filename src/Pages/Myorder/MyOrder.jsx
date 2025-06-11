import Layout from '../../Components/Layout/Layout'
import CheckoutCard from '../../Components/Checkout/CheckoutCard'
import Orders from '../../Components/Orders/Orders'
import { useContext } from 'react'
import { CartContext } from '../../Context/ContextProvider'

const MyOrder = () => {
    const { state } = useContext(CartContext)
    const profile = state.user.profile.name
    return (
        <Layout>
            <div className='flex flex-col w-full px-10 items-center'>
                <h1 className='mb-4 font-semibold text-xl'>{state.user.profile.name}'s orders</h1>
                {
                    state.orders[profile].length < 1
                    ?
                    <p className="text-xl">There are no any orders yet</p>
                    :
                    <section className="flex flex-col justify-center items-center md:items-start sm:justify-around gap-4 sm:flex-row w-full lg:w-5/6 ">
                        <Orders />
                        <CheckoutCard />
                    </section>
                }
            </div>
        </Layout>
    )
}

export default MyOrder