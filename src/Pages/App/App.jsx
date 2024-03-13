import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import MyAccount from '../MyAccount/MyAccount.jsx'
import Orders from '../Orders/Orders.jsx'
import SingIn from '../SingIn/SingIn.jsx'
import NotFound from '../NotFound/NotFound.jsx'
import NavBar from '../../Components/NavBar.jsx';
import './../../App.css'
import ContextProvider from '../../Context/ContextProvider.jsx';
import ProductDetail from '../ProductDetail/ProductDetail.jsx';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home />, },
    {path:'/ProductDetail/:id', element: <ProductDetail /> },
    { path: '/MyAccount', element: <MyAccount />, },
    { path: '/Orders', element: <Orders />, },
    { path: '/SingIn', element: <SingIn />, },
    { path: '/*', element: <NotFound />, },

  ])
  return routes
}

export const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </ContextProvider>
  )
}

