import React, { useContext } from 'react'
import Layout from '../../Components/Layout/Layout'
import { CartContext } from '../../Context/ContextProvider'
import CheckoutCard from '../../Components/Checkout/CheckoutCard'

const MyOrder = () => {
    const { state } = useContext(CartContext)

    return (
        <Layout>
            <div className='flex flex-col justify-center'>
               <CheckoutCard />
            </div>
        </Layout>
    )
}

export default MyOrder