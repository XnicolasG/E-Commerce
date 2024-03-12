import { createContext } from "react";

const CartContext = createContext()
import React from 'react'

const ContextProvider = ({children}) => {
  return (
    <CartContext.Provider>
    {children}
    </CartContext.Provider>
  )
}

export default ContextProvider