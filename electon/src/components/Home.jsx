import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import LoadMoreComp from './LoadMoreComp'
import PopularProducts from './PopularProducts'

const Home = () => {
  return (
    <div>
          <Header/>
          <Navbar/>
          <LoadMoreComp/>
          <PopularProducts/>
    </div>
  )
}

export default Home
