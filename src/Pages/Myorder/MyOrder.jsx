import Layout from '../../Components/Layout/Layout'
import CheckoutCard from '../../Components/Checkout/CheckoutCard'
import OrdersCards from '../../Components/Orders/OrdersCards'

const MyOrder = () => {    return (
        <Layout>
            <div className='flex flex-col w-full px-10 items-center'>
                <h1 className='mb-4'>My Order</h1>
                <section className="flex flex-col justify-center items-center md:items-start sm:justify-around gap-4 sm:flex-row w-full lg:w-5/6 ">
                    <OrdersCards />
                    <CheckoutCard />
                </section>
            </div>
        </Layout>
    )
}

export default MyOrder