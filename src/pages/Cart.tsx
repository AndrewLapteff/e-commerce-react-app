import React from 'react'
import Navbar from '../components/Layout/Navbar'
import s from '../assets/stylesheets/cart.module.scss'
import Footer from '../components/Layout/Footer'
import CartItem from '../components/Cart/CartItem'
import { popularProducts } from '../data'

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className={s.container}>
        <p className={s.title}>YOUR BAG</p>
        <div className={s['products-wrapper']}>
          <div className={s['products-list']}>
            {popularProducts.map((el, i) => {
              return (
                <>
                  <CartItem img={el.img} key={el.id} />
                  {i !== popularProducts.length - 1 ? <hr /> : null}
                </>
              )
            })}
          </div>
          <div className={s['order-summary']}></div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart
