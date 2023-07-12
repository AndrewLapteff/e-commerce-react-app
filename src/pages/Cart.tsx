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
          <div className={s['order-summary']}>
            <div className={s['wrapper-summary']}>
              <h2 className={s.title}>ORDER SUMMARY</h2>
              <p>
                Amount: <span>$ 40</span>
              </p>
              <p>
                Fee (0.5%): <span>$ 0.2</span>
              </p>
              <p>
                Total: <span>$ 40.2</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart
