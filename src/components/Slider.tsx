import React, { useEffect, useRef, useState } from 'react'
import s from '../assets/stylesheets/slider.module.scss'
import leftArrow from '../assets/images/left-arrow.svg'
import righttArrow from '../assets/images/right-arrow.svg'

const Slider = () => {
  const [slide, setSlide] = useState(0)
  const [slidesCount, setSlidesCount] = useState(0)
  const sliderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (sliderRef.current)
      setSlidesCount(
        Math.round(sliderRef.current?.clientWidth / window.innerWidth)
      )
  }, [])

  const slideHandler = (direction: string): void => {
    console.log(slidesCount) // TODO
    if (direction === 'left') {
      if (slide === 0) {
        setSlide(slidesCount - 1)
      } else {
        setSlide((prev) => prev - 1)
      }
    } else {
      if (slide === slidesCount - 1) {
        setSlide(0)
      } else {
        setSlide((prev) => prev + 1)
      }
    }
  }

  return (
    <div className={s['slider-container']}>
      <div onClick={() => slideHandler('left')} className={s['left-arrow']}>
        <img src={leftArrow} alt="left-arrow" />
      </div>
      <div onClick={() => slideHandler('right')} className={s['right-arrow']}>
        <img src={righttArrow} alt="right-arrow" />
      </div>
      <div
        ref={sliderRef}
        style={{ transform: `translateX(${slide * -100}vw)` }}
        className={s['slide-wrapper']}
      >
        <div className={s.slide}>
          <div className={s['image-container']}>
            <img
              className={s.image}
              src="https://st2.depositphotos.com/2053359/9481/i/950/depositphotos_94815728-stock-photo-teenage-girl-white-background.jpg"
              alt=""
            />
          </div>
          <div className={s['info-container']}>
            <h1>Chanel</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              qui delectus, omnis accusantium numquam tenetur iusto minima alias
              similique vero perferendis? Cupiditate provident corrupti ipsum
              odio nostrum quam, harum voluptatem?
            </p>
            <button className={s['shop-button']}>Shop now</button>
          </div>
        </div>
        <div className={s.slide}>
          <div className={s['image-container']}>
            <img
              className={s.image}
              src="https://st2.depositphotos.com/2053359/9481/i/950/depositphotos_94815728-stock-photo-teenage-girl-white-background.jpg"
              alt=""
            />
          </div>
          <div className={s['info-container']}>
            <h1>Lui</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              qui delectus, omnis accusantium numquam tenetur iusto minima alias
              similique vero perferendis? Cupiditate provident corrupti ipsum
              odio nostrum quam, harum voluptatem?
            </p>
            <button className={s['shop-button']}>Shop now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
