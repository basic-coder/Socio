import React from 'react'
import styles from './Home.module.css'
import {FaRegHandshake} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';
import Gstyles from '../../App.module.css'

const Home = () => {
  const navigate = useNavigate()
  const startRegister = () =>{
    navigate('/authenticate')
  }
  return (
    <div className={Gstyles.cardWrapper}>
      <Card title="Welcome to Socio" icon={<FaRegHandshake />} >
      
          <p className={styles.text}>
          We 're working hard to get Socio ready for everyone. 
              While we wrap up the finishing vouchers. 
          We 're adding people gratually to make sure nothing breaks
          </p>
          <div >
          <Button onClick={startRegister} text="Lets Go"/>
        </div>
      <div className={styles.signinWrapper}>
        <span className={styles.hasInvite}>Have an invite text ? </span>
        <Link className={styles.signinLink} to="/login">Sign In</Link> 
      </div>
      </Card>
    </div>
  )
}

export default Home