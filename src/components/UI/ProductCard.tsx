import React from 'react'
import s from '../../assets/stylesheets/productCard.module.scss'
import shoppingCart from '../../assets/images/svg/shopping-cart.svg'
import heartIcon from '../../assets/images/svg/heart.svg'
import magnifyingGlass from '../../assets/images/svg/magnifying-glass.svg'

const ProductCard = ({ img }: { img: string }) => {
  return (
    <div className={s.container}>
      <div className={s.background}></div>
      <div className={s.circle}></div>
      <img src={img} alt="product icon" />
      <div className={s.info}>
        <img width={30} src={heartIcon} alt="" />
        <img width={30} src={shoppingCart} alt="" />
        <img width={30} src={magnifyingGlass} alt="" />
      </div>
    </div>
  )
}

export default ProductCard
