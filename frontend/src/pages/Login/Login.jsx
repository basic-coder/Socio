import React from 'react'
import styles from './Login.module.css'
import StepOtp from '../Steps/StepOtp/StepOtp';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'
import { useState } from 'react';

const steps ={
    1: StepPhoneEmail,
    2: StepOtp,
}

const Login = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step]

  const onNext = () => {
      setStep(step + 1)
  }
  return (
    <div>
      <Step onNext={onNext} />
    </div>
  )
}

export default Login