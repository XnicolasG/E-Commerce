import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import Card from '../../Components/Card/Card'
import CartDetail from '../../Components/CartDetail/CartDetail'


const apiUrl = 'https://fakestoreapi.com/products'
const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    try {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => setItems(data))
    } catch (error) {
      throw new error
    }
  }, [])
  console.log(items);
  return (
    <Layout>
      Home
      <section className='grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center max-w-screen-2xl transition-all'>

        {
          items?.map((prod) => (
            <Card
              key={prod.id}
              {...prod}
            />
          ))
        }
      </section>
      <CartDetail />
    </Layout>
  )
}

export default Home