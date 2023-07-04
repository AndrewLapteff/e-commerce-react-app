import React from 'react'
import { popularProducts } from '../data'
import Product from './Product'
import s from '../assets/stylesheets/products.module.scss'

const Products = () => {
  return (
    <div className={s.container}>
      {popularProducts.map((product) => {
        return <Product key={product.id} img={product.img} />
      })}
    </div>
  )
}

export default Products
