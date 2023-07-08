import React, { FC } from 'react'
import ProductCard from './ProductCard'
import s from '../../assets/stylesheets/products.module.scss'
import { IProduct } from '../../types/product'

interface Props {
  products: IProduct[]
}

const Products: FC<Props> = ({ products }) => {
  return (
    <div className={s.container}>
      {products.map((product) => {
        return <ProductCard key={product.id} img={product.img} />
      })}
    </div>
  )
}

export default Products
