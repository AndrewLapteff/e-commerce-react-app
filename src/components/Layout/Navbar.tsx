import React from 'react'
import s from '../../assets/stylesheets/navbar.module.scss'
import magnifyingGlass from '../../assets/images/svg/magnifying-glass.svg'
import shoppingCart from '../../assets/images/svg/shopping-cart.svg'

const Navbar = () => {
  return (
    <div className={s['navbar-container']}>
      <div className={s.wrapper}>
        <div className={s.left}>Name</div>
        <div className={s.center}>
          <img width={25} src={magnifyingGlass} alt="search icon" />
          <input type="text" />
        </div>
        <div className={s.right}>
          <div className={s.cart}>
            <img width={25} src={shoppingCart} alt="cart icon" />
            <div className={s.price}>3</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
