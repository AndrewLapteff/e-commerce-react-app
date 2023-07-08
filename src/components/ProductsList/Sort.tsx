import React from 'react'
import s from '../../assets/stylesheets/filterItem.module.scss'

const Sort = () => {
  return (
    <select className={s.select} name="sort" id="sort">
      <option value="color">Newest</option>
      <option value="color">Price (asc)</option>
      <option value="color">Price (desc)</option>
    </select>
  )
}

export default Sort
