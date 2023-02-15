import React from 'react'
import styles from './Navbar.module.scss';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const user = useSelector((state) => state.user.currentUser);

  const quantity = useSelector(state=>state.cart.quantity)

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        
        <div className={styles.left}>
          <span className={styles.language}>EN</span>
          <div className={styles.container_search}>
            <input className={styles.input_search} placeholder="Search"></input>
            <Search className={styles.icon_search} />
          </div>
        </div>
        
        <div className={styles.center}>
          <h1 className={styles.logo}>RUNNER.</h1>
        </div>
        
        <div className={styles.right}>

          {!user ? 
            <>
              <div className={styles.menu_item}>REGISTER</div>    
              <div className={styles.menu_item}>SIGN IN</div>
            </>
            :
            <div className={styles.menu_item}>LOGOUT</div>
          }

          <Link to="/cart">
            <div className={styles.menu_item}>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>    
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Navbar
