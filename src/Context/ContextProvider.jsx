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


  return (
    <CartContext.Provider
      value={{
        state,
        setState,
        updateState,
        openCartDetail,
        closeCartDetail
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default ContextProvider