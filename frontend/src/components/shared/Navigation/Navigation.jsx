import React from 'react'
import { Link } from 'react-router-dom'
import {IoShareSocialOutline} from "react-icons/io5"
import styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav className={`${styles.navbar} container`}>
        <Link className={styles.logo} to="/" >
            <IoShareSocialOutline /> 
            <span className={styles.logoText}>Socio</span>
        </Link>
    </nav>
  )
}

export default Navigation