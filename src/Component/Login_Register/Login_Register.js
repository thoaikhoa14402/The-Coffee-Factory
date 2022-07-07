import React, { useEffect, useState } from 'react'
import './Login_Register.css'
import Login from './Login/Login'
import Register from './Register/Register'
import ForgetPassword from './ForgetPassword/ForgetPassword'
import Navbar from '../Home/Header/Navbar/Navbar'
import { useNavigate } from "react-router-dom";
import Home from '../Home/Home'

function Login_Register({callBacks}) {
  const [option, setOption] = useState(2)

  const getOption = (data, data2) => {
    // callBacks(data2)
    setOption(data)
  }

  const navigate = useNavigate();

  return (
    <div className='LOGIN_REGISTER'>
      <Navbar/>
      {option === 0 && 
        navigate('/home')
      }
      {option === 1 && <Login callBacks={getOption} />}
      {option === 2 && <Register callBacks={getOption} />}
      {option === 3 && <ForgetPassword callBacks={getOption} />}
      <div className='overlay' />
    </div>
  )
}

export default Login_Register