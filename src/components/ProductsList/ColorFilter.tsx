import React from 'react'
import s from '../../assets/stylesheets/filterItem.module.scss'

const ColorFilter = () => {
  return (
    <select className={s.select} name="filter" id="filter">
      <option disabled selected value="color">
        Color
      </option>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </select>
  )
}

export default ColorFilter
