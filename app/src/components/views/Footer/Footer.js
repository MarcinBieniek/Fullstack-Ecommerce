import styles from './Footer.module.scss'

import React from 'react'
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'

const Footer = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.left}>
        <h1 className={styles.logo}>RUNNER.</h1>
        <p className={styles.desc}>Lorem impsum hopsem mipsum. Lorem impsum hopsem mipsum. Lorem impsum hopsem mipsum. Lorem impsum hopsem mipsum. </p>
        <div className={styles.container_socialmedia}>
          <div className={styles.social_icon}>
            <Facebook />
          </div>
          <div className={styles.social_icon}>
            <Instagram />
          </div>
          <div className={styles.social_icon}>
            <Twitter />
          </div>
          <div className={styles.social_icon}>
            <Pinterest  />
          </div>
        </div>
      </div>

      <div className={styles.center}>
        <h3 className={styles.title}>Useful links</h3>
        <ul className={styles.list}>
            <li className={styles.list_item}>Home</li>
            <li className={styles.list_item}>Cart</li>
            <li className={styles.list_item}>Man</li>
            <li className={styles.list_item}>Woman</li>
            <li className={styles.list_item}>Accessories</li>
            <li className={styles.list_item}>My Account</li>
            <li className={styles.list_item}>Order Tracking</li>
            <li className={styles.list_item}>Orders</li>
            <li className={styles.list_item}>Wishlist</li>
            <li className={styles.list_item}>Terms</li>
        </ul>
      </div>

      <div className={styles.right}>
        <h3 className={styles.title}>Contact</h3>
        <div className={styles.contact_item}>
          <Room />
          <p>1530 3rd Ave, Seattle, WA 98101</p>
        </div>
        <div className={styles.contact_item}>
          <Phone />
          <p>+1 206-957-2295</p>
        </div>
        <div className={styles.contact_item}>
          <MailOutline /> 
          <p>contact@runner.go</p>
        </div>
        <img 
          className={styles.payment}
          src="https://www.ttequipment.co.uk/wp-content/uploads/2018/03/AM_SbyPP_mc_vs_ms_ae_UK-300x103.png"
        />
      </div>
    </div>
  )
}

export default Footer
