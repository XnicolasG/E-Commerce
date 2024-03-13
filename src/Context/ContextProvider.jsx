import React from 'react'
import { createContext, useState } from "react";

export const CartContext = createContext()

const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true)
  const [openCart, setOpenCart] = useState(false)

  const openCartDetail = () => setOpenCart(true)
  const closeCartDetail = () => setOpenCart(false)


  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        items,
        setItems,
        loading,
        setLoading,
        openCart,
        openCartDetail,
        closeCartDetail
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default ContextProvider