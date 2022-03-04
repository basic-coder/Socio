import React from 'react'
import Card from '../../../components/shared/Card/Card'
import TextInput from '../../../components/shared/TextInput/TextInput'
import Button from '../../../components/shared/Button/Button'
import { useState } from 'react'
import styles from './StepOtp.module.css'
import { FcLock } from 'react-icons/fc'
import Gstyles from '../../../App.module.css'


const StepOtp = ({onNext}) => {
  const [otp, setOtp] = useState('');
  return (
    <div className={Gstyles.cardWrapper}>
      <Card title="Enter your OTP" icon={<FcLock />} >  
    <TextInput value={otp} onChange={(e)=>setOtp(e.target.value)} />   
    <div className={styles.actionButtonWrap}>
        <Button text="Next" onClick={onNext}/>
    </div>
    <p className={Gstyles.bottomParagraph}>
        By entering your number, you're agreeing to our Terms of Service and Privacy Policy. Thanks!
    </p>
    </Card>
    </div>
  )
}

export default StepOtp