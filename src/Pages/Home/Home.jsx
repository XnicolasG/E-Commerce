import React, { useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import Card from '../../Components/Card/Card'

 const Home = () => {
  const [items, setItems] = useState();
  return (
    <Layout>
      Home
      <Card />
    </Layout>
  )
}

export default Home