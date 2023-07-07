import React from 'react'
import s from '../assets/stylesheets/footer.module.scss'
import facebookLogo from '../assets/images/svg/icons8-facebook.svg'
import instagramLogo from '../assets/images/svg/icons8-instagram.svg'
import twitterLogo from '../assets/images/svg/icons8-twitter.svg'
import youtubeLogo from '../assets/images/svg/icons8-youtube.svg'

const Footer = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.contact}>
          <h4>Contact</h4>
          <ul>
            <li>Street: 2017 Harron Drive</li>
            <li>City: Baltimore</li>
            <li>State: Maryland</li>
            <li>Zip Code: 212021</li>
            <li>Phone Number: 123-456-7890</li>
          </ul>
        </div>
        <div className={s.menu}>
          <h4>Menu</h4>
          <a href="/">Home</a>
          <a href="/">About</a>
        </div>
        <div className={s.follow}>
          <h4>Follow us</h4>
          <ul>
            <li>
              <img width={30} src={instagramLogo} alt="Instargram logo" />
            </li>
            <li>
              <img width={30} src={youtubeLogo} alt="Youtube logo" />
            </li>
            <li>
              <img width={30} src={twitterLogo} alt="Twitter logo" />
            </li>
            <li>
              <img width={30} src={facebookLogo} alt="Facebook logo" />
            </li>
          </ul>
        </div>
      </div>
      <div className={s.copyright}>© 2023 Built not using WordPress.</div>
    </div>
  )
}

export default Footer
