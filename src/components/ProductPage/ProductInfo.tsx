import React from 'react'
import s from '../../assets/stylesheets/productInfo.module.scss'
import ColorFilter from '../ProductsList/ColorFilter'
import SizeFilter from '../ProductsList/SizeFilter'

const ProductInfo = () => {
  return (
    <div className={s.container}>
      <div className={s.image}>
        <img
          src="https://freepngimg.com/save/13471-jacket-transparent/477x480"
          alt=""
        />
      </div>
      <div className={s.info}>
        <h2 className={s.title}>Jacket</h2>
        <p className={s.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
          aperiam dignissimos natus
        </p>
        <div className={s.pricings}>
          <span className={s.price}>$20</span>
          <div className={s.filters}>
            <div className={s.colors}>
              Color:
              <div style={{ backgroundColor: 'red' }} className={s.color}></div>
              <div
                style={{ backgroundColor: 'blue' }}
                className={s.color}
              ></div>
              <div
                style={{ backgroundColor: 'gray' }}
                className={s.color}
              ></div>
            </div>
            <SizeFilter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
