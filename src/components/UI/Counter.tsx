import React, { useState } from 'react'
import s from '../../assets/stylesheets/counter.module.scss'

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleCount = (e: string) => {
    if (e == 'increment') {
      setCount((prev) => prev + 1)
    } else {
      if (count > 0) setCount((prev) => prev - 1)
    }
  }

  return (
    <div className={s.wrapper}>
      <button className={s.minus} onClick={() => handleCount('decrement')}>
        -
      </button>
      <div>{count}</div>
      <button className={s.plus} onClick={() => handleCount('increment')}>
        +
      </button>
    </div>
  )
}

export default Counter
