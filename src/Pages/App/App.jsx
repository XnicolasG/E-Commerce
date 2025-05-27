// import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import MyAccount from '../MyAccount/MyAccount.jsx'
import Orders from '../Orders/Orders.jsx'
import SingIn from '../SingIn/SingIn.jsx'
import NotFound from '../NotFound/NotFound.jsx'
import NavBar from '../../Components/navbar/NavBar.jsx';
import './../../App.css'
import ContextProvider from '../../Context/ContextProvider.jsx';
import ProductDetail from '../ProductDetail/ProductDetail.jsx';
import CartDetail from '../../Components/CartDetail/CartDetail.jsx';
import MyOrder from '../Myorder/MyOrder.jsx';
import Main from '../Main/Main.jsx';
import Checkout from '../CheckOut/Checkout.jsx';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Main />, },
    { path: '/products/:category', element: <Home />, },
    { path: '/men', element: <Home />, },
    { path: '/jewelery', element: <Home />, },
    { path: '/electronics', element: <Home />, },
    { path: '/women', element: <Home />, },
    { path: '/ProductDetail/:id', element: <ProductDetail /> },
    { path: '/MyAccount', element: <MyAccount />, },
    { path: '/Orders', element: <Orders />, },
    { path: '/SingIn', element: <SingIn />, },
    { path: '/MyOrder', element: <MyOrder />, },
    {path: '/Checkout', element: <Checkout /> },

    { path: '/*', element: <NotFound />, },

  ])
  return routes
}

export const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <NavBar />
        <CartDetail />
        <AppRoutes />
      </BrowserRouter>
    </ContextProvider>
  )
}

