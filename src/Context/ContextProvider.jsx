import React, { useEffect } from 'react'
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
    productDetail: [],
    searchProduct: null,
    searchByCategory: null,
    filteredItems: null
  })
  console.log(state.searchByCategory);
  const apiUrl = 'https://fakestoreapi.com/products'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        updateState({
          items: data
        })
        console.log(state.items);
      } catch (error) {
        throw new Error(error)
      }
    };
    fetchData();
  }, [])

  // Update state function
  const updateState = (updates) => {
    setState((prevState) => ({
      ...prevState,
      ...updates
    }))
  }

  // filter function
  const filteredProducts = (items, searchProduct) => {
    return items?.filter(item => 
      item.title.toLowerCase().includes(searchProduct.toLowerCase())
      );
  }
  // Filter category
  const filteredCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, searchproduct, searchByCategory) =>{
    if (searchType === 'ByTitle'){
      return filteredProducts(items, searchproduct)
    }else if (searchType === 'ByCategory'){
      return filteredCategory(items, searchByCategory)
    }else if (searchType === 'ByBoth'){
      return filteredCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(state.searchProduct.toLowerCase()))
    } else{
      return state.items;
    }
  }

  useEffect(() => {
    if (state.searchProduct && !state.searchByCategory) {
      updateState({
        filteredItems: filterBy('ByTitle',state.items, state.searchProduct, state.searchByCategory)
      })
    } 
    if (!state.searchProduct && state.searchByCategory) {
      updateState({
        filteredItems: filterBy('ByCategory',state.items, state.searchProduct, state.searchByCategory)
      })
    }
    if (state.searchProduct && state.searchByCategory) {
      updateState({
        filteredItems: filterBy('ByBoth',state.items, state.searchProduct, state.searchByCategory)
      })
    }
    if (!state.searchProduct && !state.searchByCategory) {
      updateState({
        filteredItems: filterBy(null,state.items, state.searchProduct, state.searchByCategory)
      })
    }
  }, [state.items, state.searchProduct,state.searchByCategory]) 

  console.log(state.filteredItems);
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
        filteredProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default ContextProvider

