import React from 'react'
import Navbar from '../components/Layout/Navbar'
import FilterBar from '../components/ProductsList/FilterBar'
import Footer from '../components/Layout/Footer'
import Products from '../components/UI/Products'
import { popularProducts } from '../data'

const ProductsList = () => {
  return (
    <>
      <Navbar />
      <FilterBar />
      <Products products={popularProducts} />
      <Footer />
    </>
  )
}

export default ProductsList
