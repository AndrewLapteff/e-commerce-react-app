import React from 'react'
import sendIcon from '../assets/images/svg/send-icon.svg'
import s from '../assets/stylesheets/newsletter.module.scss'

const Newsletter = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Newsletter</h2>
      <div className={s.description}>
        Get timely updates from you favotite products
      </div>
      <div className={s.controls}>
        <input placeholder="Your email" type="text" />
        <button>
          <img width={30} src={sendIcon} alt="send" />
        </button>
      </div>
    </div>
  )
}

export default Newsletter
