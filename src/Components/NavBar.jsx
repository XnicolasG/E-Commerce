import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../Context/ContextProvider';




const NavBar = () => {
    const {state, openCartDetail} = useContext(CartContext)
    const navPaths1 = [
        { name: 'SmartShop', path: '/' },
        { name: 'All', path: '/All' },
        { name: 'Clothes', path: '/Clothes' },
        { name: 'Electronics', path: '/Electronics' },
        { name: 'Fornitures', path: '/Fornitures' },
        { name: 'Others', path: '/Others' },
    ];
    const navPaths2 = [
        { name: 'Orders', path: '/Orders' },
        { name: 'My Account', path: '/MyAccount' },
        { name: 'Sing in', path: '/SingIn' },
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
                                className={({ isActive }) => isActive ? activeStyle : {} }
                            >
                                {item.name}
                            </NavLink>

                        ))
                    }
                </li>
            </ul>
            <ul className='flex items-center'>
                <li className='flex gap-3'>
                    {
                        navPaths2.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) => isActive ? activeStyle : {} }
                                onClick={() => {
                                    if (item.name === `🛒 ${state.count}`) {
                                        openCartDetail()
                                    }
                                }}
                            >
                                {item.name}
                            </NavLink>
                        ))
                    }
                </li>
            </ul>
        </nav>
    )
}


export default NavBar