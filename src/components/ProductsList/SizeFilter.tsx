import React from 'react'
import s from '../../assets/stylesheets/filterItem.module.scss'

const SizeFilter = () => {
  return (
    <select className={s.select} name="sort" id="sort">
      <option disabled selected value="size">
        Size
      </option>
      <option value="xs">XS</option>
      <option value="s">S</option>
      <option value="m">M</option>
      <option value="l">L</option>
      <option value="xl">XL</option>
    </select>
  )
}

export default SizeFilter
