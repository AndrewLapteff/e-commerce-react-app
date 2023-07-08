import React from 'react'
import s from '../../assets/stylesheets/filter.module.scss'
import ColorFilter from './ColorFilter'
import SizeFilter from './SizeFilter'
import Sort from './Sort'

const FilterBar = () => {
  return (
    <div className={s['filter-container']}>
      <div>
        <span className={s.filter}>Filter</span>
        <ColorFilter />
        <SizeFilter />
      </div>
      <div>
        <span className={s.filter}>Sort</span>
        <Sort />
      </div>
    </div>
  )
}

export default FilterBar
