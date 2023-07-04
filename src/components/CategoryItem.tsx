import React from 'react'
import s from '../assets/stylesheets/categoryItem.module.scss'
import Category from '../types/category'

const CategoryItem = ({ item }: { item: Category }) => {
  return (
    <div className={s['category-item']}>
      <img src={item.img} alt="category image" />
      <div className={s.info}>
        <h3>{item.title}</h3>
        <button>SHOP NOW</button>
      </div>
    </div>
  )
}

export default CategoryItem
