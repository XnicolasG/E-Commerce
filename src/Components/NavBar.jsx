import React from 'react'
import { NavLink } from 'react-router-dom'

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
    { name: '🛒 0', path: '/Cart' },
]

const NavBar = () => {
    const activeStyle = 'underline underline-offset-4 font-semibold'
    return (
        <nav className='flex justify-between items-center p-4 bg-black text-white  border-b-2 border-gray-400 fixed z-10 top-0 w-full'>
            <ul className='flex items-center'>
                <li className='flex gap-3'>
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