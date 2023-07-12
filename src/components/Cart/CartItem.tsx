import React, { FC } from 'react'
import s from '../../assets/stylesheets/cartItem.module.scss'
import Counter from '../UI/Counter'
interface Props {
  img: string
}

const CartItem: FC<Props> = ({ img }) => {
  return (
    <div className={s.container}>
      <div className={s['image-wrapper']}>
        <img src={img} alt="product item" />
      </div>
      <div className={s.info}>
        <div className={s.left}>
          <span className={s.title}>
            Lorem ipsum dolor sit amet consectetur
          </span>
          <span className={s.id}>
            <b>ID: </b>938547395797
          </span>
          <span className={s.size}>
            <b>Size: </b>M
          </span>
        </div>
        <div className={s.right}>
          <Counter />
          <span className={s.price}>$ 10</span>
        </div>
      </div>
    </div>
  )
}

export default CartItem
