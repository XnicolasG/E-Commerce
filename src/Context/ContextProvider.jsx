import React from 'react'
import { createContext, useState } from "react";

export const CartContext = createContext()

 const ContextProvider = ({children}) => {
  const [count, setCount] = useState(0)
  return (
    <CartContext.Provider
      value={{
        count,
        setCount
      }}
    >
    {children}
    </CartContext.Provider>
  )
}

export default ContextProvider