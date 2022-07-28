import React, { useEffect, useState } from 'react'
import './Login_Register.css'
import Login from './Login/Login'
import Register from './Register/Register'
import ForgetPassword from './ForgetPassword/ForgetPassword'
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'

function Login_Register(props) {
  const [option, setOption] = useState(+props.control)
  useEffect(() => {
    if (props.control === 2)
      setOption(2)

  }, [])

  const getOption = (data) => {
    // callBacks(data2)
    setOption(data)
  }

  const navigate = useNavigate();
  console.log(option);

  return (
    <div className='LOGIN_REGISTER'>
      <Navbar />
      {option === 0 && navigate('/home')}
      {option === 1 && <Login callBacks={getOption} />}
      {option === 2 && <Register callBacks={getOption} />}
      {option === 3 && <ForgetPassword callBacks={getOption} />}
      <div className='overlay' />
    </div>
  )
}

export default Login_Register