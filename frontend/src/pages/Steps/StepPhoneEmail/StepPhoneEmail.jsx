import React from 'react'
import Phone from './Phone/Phone';
import Email from './Email/Email';
import { useState } from 'react';
import {GiSmartphone} from 'react-icons/gi'
import styles from './StepPhoneEmail.module.css';
import { AiOutlineMail } from 'react-icons/ai';
import Gstyles from '../../../App.module.css'

const phoneEmailMap = {
  phone: Phone,
  email: Email
}
const StepPhoneEmail = ({onNext}) => {
  const [type, setType] = useState('phone');
  const Component = phoneEmailMap[type]

  return (
    <>
    <div className={Gstyles.cardWrapper}>
      <div>
      <div className={styles.buttonWrap}>
        <button className={`${styles.tabButton} ${type === 'phone' ? styles.active : ''}`} onClick={()=> setType('phone')}><GiSmartphone /></button>
        <button className={`${styles.tabButton} ${type === 'email' ? styles.active : ''}`} onClick={()=> setType('email')} onClick={()=> setType('email')}><AiOutlineMail /></button>
      </div>
      <Component onNext={onNext} />
      </div>
    </div>    
    </>
  )
}

export default StepPhoneEmail