import React from 'react'
import styles from './Button.module.css'
import {AiOutlineArrowRight} from 'react-icons/ai';

const Button = ({text,onClick}) => {
  return (
    <button onClick={onClick} className={styles.button}>
        <span>{text}</span><AiOutlineArrowRight className={styles.arrow}/>
    </button>
  )
}

export default Button