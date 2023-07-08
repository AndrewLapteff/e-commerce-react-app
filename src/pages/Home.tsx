import React from 'react'
import Navbar from '../components/Layout/Navbar'
import Slider from '../components/Home/Slider'
import Categories from '../components/Home/Categories'
import Products from '../components/UI/Products'
import Newsletter from '../components/Home/Newsletter'
import Footer from '../components/Layout/Footer'
import { popularProducts } from '../data'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Products products={popularProducts} />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
