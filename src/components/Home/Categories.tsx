import React from 'react'
import s from '../../assets/stylesheets/categiries.module.scss'
import { categories } from '../../data'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className={s['categiries-container']}>
      {categories.map((category) => {
        return <CategoryItem key={category.id} item={category} />
      })}
    </div>
  )
}

export default Categories
