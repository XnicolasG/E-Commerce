import React, { useContext } from 'react'
import Layout from '../../Components/Layout/Layout'
import { CartContext } from '../../Context/ContextProvider'
import newBanner from '../../img/newBanner.png'
import menBanner from '../../img/menBanner.jpeg'
import womenBanner from '../../img/womenBanner.jpeg'
import jewelery from '../../img/jewelery.jpeg'
import { NavLink } from 'react-router-dom'

const Main = () => {
    const { state, updateState } = useContext(CartContext)

    const banners = [
        {
            name: `Men's clothing`,
            image: menBanner,
            link: '/men',
            category: `men's clothing`
        },
        {
            name: `Women's clothing`,
            image: womenBanner,
            link: '/women',
            category: `Women's clothing`
            
        },
        {
            name: `Jewelery`,
            image: jewelery,
            link: '/jewelery',
            category: 'jewelery'

        },
        {
            name: `Electronics`,
            image: 'https://images.pexels.com/photos/326509/pexels-photo-326509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            link: '/electronics',
            category: 'electronics'

        }
    ]
    return (
        <Layout>
            <section className='flex w-[95%] justify-around h-62 sm:h-68 p-2 bg-gradient-to-br from-cyan-300 to-cyan-50'>
                <div className='flex flex-col text-sm md:text-md lg:text-lg font-semibold text-green-950 items-start justify-center '>
                    <h1 className='mb-20 text-2xl sm:text-4xl md:text-6xl font-bold text-green-800'>SmartShop</h1>
                    <p>Your next great deal is waiting. Get started now</p>
                    <p className='mt-4'> <span className='mx-1 bg-red-700 p-1 px-2 rounded text-white'>Hot Sale 🔥</span> all products at <span className='italic md:text-lg'>20% off !</span></p>
                </div>
                <div className='flex justify-center items-center w-2/3 sm:w-1/2 md:w-96'>
                    <img className='w-full relative ' src={newBanner} alt='banner' />
                </div>
            </section>
            <section className='mt-4 w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                {
                    banners.map((art) => (
                        <NavLink
                        key={art.name}
                        className='flex' 
                        to={art.link}
                        onClick={() => updateState({
                            searchByCategory: art.category
                        }) }
                        >
                            <div className='flex text-xs sm:text-md md:text-xl font-semibold text-white relative overflow-hidden'>
                                <img className='w-full hover:scale-110 transition-all' src={art.image} alt={art.name} />
                                <p className='absolute bg-black/60 h-1/3 md:h-1/4 w-full bottom-1 px-2 '>{art.name}</p>
                            </div>
                        </NavLink>
                    ))
                }
            </section>
        </Layout>
    )
}

export default Main