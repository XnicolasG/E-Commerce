import React from 'react'
import { createContext, useState } from "react";

export const CartContext = createContext()

const ContextProvider = ({ children }) => {
  // grouped state
  const [state, setState] = useState({
    count: 0,
    items: null,
    loading: true,
    openCart: false,
    cartProducts: [],
    Order: [],
    productDetail:[]
  })

  // Update state function
  const updateState = (updates) => {
    setState((prevState) => ({
      ...prevState,
      ...updates
    }))
  }
  // Function to open the cart detail
  const openCartDetail = () => {
    updateState({
      openCart: true
    })
  }
  // Function to close the cart detail

  const closeCartDetail = () => {
    updateState({
      openCart: false
    })
  }

  const catchProduct = ({ id, price, image, title, category }) => {
    const productIndex = state.cartProducts.findIndex((product) => product.id === id);
    if (productIndex === -1) {
      updateState({
        cartProducts: [
          ...state.cartProducts,
          { id, price, image, title, category, quantity: 1 }
        ]
      });
    } else {
      const updatedCartProducts = [...state.cartProducts];
      updatedCartProducts[productIndex].quantity++;
      updateState({ cartProducts: updatedCartProducts });
    }
    console.log(id);
  };

  const onAddToCart = ({ id, price, image, title, category }) => {
    updateState({
      count: state.count + 1
    })
    catchProduct({ id, price, image, title, category })
    console.log('funciona onAddToCart');
  }

  return (
    <CartContext.Provider
      value={{
        state,
        setState,
        updateState,
        openCartDetail,
        closeCartDetail,
        onAddToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default ContextProvider