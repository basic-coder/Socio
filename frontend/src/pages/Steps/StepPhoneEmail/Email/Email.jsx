import React from 'react'
import { FiMail } from 'react-icons/fi'
import Button from '../../../../components/shared/Button/Button'
import Card from '../../../../components/shared/Card/Card'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import { useState } from 'react'
import styles from '../StepPhoneEmail.module.css'
import Gstyles from '../../../../App.module.css'

const Email = ({onNext}) => {
  const [emailNumber,setEmailNumber] = useState('')

  return (
    <Card title="Enter your Email" icon={<FiMail />} >     
    <TextInput value={emailNumber} onChange={(e)=>setEmailNumber(e.target.value)} />   
    <div className={styles.actionButtonWrap}>
        <Button text="Next" onClick={onNext}/>
    </div>
    <p className={Gstyles.bottomParagraph}>
        By entering your number, you're agreeing to our Terms of Service and Privacy Policy. Thanks!
    </p>
    </Card>
  )
}

export default Email