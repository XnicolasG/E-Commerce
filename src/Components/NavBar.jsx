import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../Context/ContextProvider';




const NavBar = () => {
    const { state, openCartDetail, updateState } = useContext(CartContext)
    const navPaths1 = [
        { name: 'SmartShop', path: '/', },
        { name: 'men', path: '/men', category: `men's clothing` }, //men's clothing
        { name: 'jewelery', path: '/jewelery', category: 'jewelery' }, //jewelery
        { name: 'Electronics', path: '/electronics', category: 'electronics' }, //electronics
        { name: 'Women', path: '/women', category: `Women's clothing` }, //women's clothing
    ];
    const navPaths2 = [
        { name: 'Orders', path: '/MyOrder' },
        { name: `🛒 ${state.count}`, path: '/' },
    ]
    const activeStyle = ' font-semibold'
    return (
        <nav className='flex justify-between items-center p-3 bg-black backdrop-blur-sm text-white fixed z-30 top-0 w-full text-xs md:text-lg '>
            <ul className='flex items-center'>
                <li className='flex gap-3 '>
                    {
                        navPaths1.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={() => updateState({
                                    searchByCategory: item.category
                                })}
                                className={({ isActive }) => isActive ? activeStyle : {}}
                            >
                                <p>
                                    {item.name}
                                </p>

                            </NavLink>

                        ))
                    }
                </li>
            </ul>
            <ul className='flex items-center'>
                <li className='flex gap-3 items-center'>
                    {
                        navPaths2.map((item) => {
                            const isCartItem = item.name === `🛒 ${state.count}`;
                            const cartWithItems = `${isCartItem && state.count > 0 ? 'bg-emerald-400 rounded-full ' : ''}p-1`;

                            return (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    className={({ isActive }) => isActive ? activeStyle : {}}
                                    onClick={() => {
                                        if (item.name === `🛒 ${state.count}`) {
                                            openCartDetail()
                                        }
                                    }}
                                >
                                    <p
                                        className={cartWithItems}
                                    >
                                        {item.name}
                                    </p>
                                </NavLink>
                            )
                        })
                    }
                </li>
            </ul>
        </nav>
    )
}


export default NavBar