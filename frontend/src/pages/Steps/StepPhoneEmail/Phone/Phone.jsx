import React from 'react'
import Card from '../../../../components/shared/Card/Card'
import {FiPhone} from 'react-icons/fi'
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import { useState } from 'react'
import styles from '../StepPhoneEmail.module.css'
import Gstyles from '../../../../App.module.css'

const Phone = ({onNext}) => {
    const [phoneNumber,setPhoneNumber] = useState('')

  return (
    <Card title="Enter your Phone No" icon={<FiPhone />} >  
    <TextInput value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />   
    <div className={styles.actionButtonWrap}>
        <Button text="Next" onClick={onNext}/>
    </div>
    <p className={Gstyles.bottomParagraph}>
        By entering your number, you're agreeing to our Terms of Service and Privacy Policy. Thanks!
    </p>
    </Card>
  )
}

export default Phone