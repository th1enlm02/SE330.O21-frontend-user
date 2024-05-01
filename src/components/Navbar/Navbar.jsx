import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/icons/logo.svg'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Link to="/" className={styles.navbar__link}>
            <img
                src={Logo}
                alt="yoom logo"
                className={styles.navbarlink__logo}
            />
            <p className={styles.navbarlink__p}>
                YOOM
            </p>
        </Link>
        <div>
          Sign-In
        </div>
    </nav>
  )
}

export default Navbar
