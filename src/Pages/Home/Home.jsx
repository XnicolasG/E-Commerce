import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import Card from '../../Components/Card/Card'
import { CartContext } from '../../Context/ContextProvider'
import Search from '../../Components/Search/Search'



const Home = () => {
  const { state, updateState } = useContext(CartContext)

  const renderView = () => {
    if (state.searchProduct?.length > 0) {
      if (state.filteredItems?.length === 0) {
        return (
          <div className='flex justify-center w-96 mt-4 '>
            Can't find anything related to '{state.searchProduct}'
          </div>
        )
      }
      return (
        <section className='grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center max-w-screen-2xl transition-all'>
          {state.filteredItems?.map((prod) => (
            <Card
              key={prod.id}
              {...prod}
            />
          ))}
        </section>
      )
    } else {
      return (
        <section className='grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center max-w-screen-2xl transition-all'>
          {state.items?.map((prod) => (
            <Card
              key={prod.id}
              {...prod}
            />
          ))}
        </section>
      )
    }
  }
  return (
    <Layout>
      <Search />
        {renderView()}
    </Layout>
  )
}

export default Home