import React, { useState, useEffect } from 'react'
import './ForgetPassword.css'
import axios from 'axios'
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from '../../Navbar/Navbar';


function ForgetPassword(props) {
  const [step, setStep] = useState(1)

  const handleSetStep = (data) => {
    setStep(data)
  }

  const navigate = useNavigate()

  const [confirmGmail, setConfirmGmail] = useState(false)
  const [pinWrong, setPinWrong] = useState(false)
  const [passwordWrong, setPasswordWrong] = useState(false)
  const [confirmPasswordWrong, setConfirmPasswordWrong] = useState(false)

  const [emailConfirm, setEmailConfirm] = useState('')
  const [pinConfirm, setPinConfirm] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('')

  const emailChangeHandler = event => {
    setEmailConfirm(event.target.value)
  }

  const pinChangeHandler = event => {
    setPinConfirm(event.target.value)
  }

  const passwordChangeHandler = event => {
    setEnteredPassword(event.target.value)
  }

  const confirmPasswordChangeHandler = event => {
    setEnteredConfirmPassword(event.target.value)
  }

  const [token, setToken] = useState('')
  
  const handleEmailConfirm = (event) => {
    event.preventDefault()
    setConfirmGmail(false)
    const object = {
      email: emailConfirm,
    };
    axios.post('http://192.168.1.96:3000/tcf/v1/users/forgotPassword', object).then((res) => {
      handleSetStep(2)
      setToken(res.data.token)
    }).catch(error => {
      let a = error.response.data.message.split('. ')
      if (a.includes('There is no user with that email address')) setConfirmGmail(true)
    })
  }

  const handlePinConfirm = (event) => {
    event.preventDefault()

    setPinWrong(false)
    const object = {
      token: token,
      email: emailConfirm,
      verificationCode: pinConfirm,
    };
    axios.post('http://192.168.1.96:3000/tcf/v1/users/validateCode', object).then((res) => {
      handleSetStep(3)
      setToken(res.data.token)
    }).catch(error => {
      setPinWrong(true)
    })
  }

  const handlePasswordConfirm = (event) => {
    event.preventDefault()

    setPasswordWrong(false)
    setConfirmPasswordWrong(false)
    const object = {
      token: token,
      password: enteredPassword,
      passwordConfirm: enteredConfirmPassword
    };
    axios.patch('http://192.168.1.96:3000/tcf/v1/users/resetPassword', object).then((res) => {
      setStep(4)
    }).catch(error => {
      let a = error.response.data.message.split('. ')
      if (a.includes('Password length must be greater or equal to 8') || a.includes('Please provide a password')) setPasswordWrong(true)
      if (a.includes('Passwords are not the same') || a.includes('PLease confirm your password')) setConfirmPasswordWrong(true)
    })
  }


  return (
    <div className='LOGIN_REGISTER'>
      <Navbar/>
      <div className='ForgetPassword'>
        {step === 1 && <form onSubmit={handleEmailConfirm} className='step1'>
          <div className='logo'>
            <img src="../../../../public/img/Logo.png" alt='' />
          </div>
          <div className={`input ${confirmGmail && 'inputWrong'}`}>
            <input onChange={emailChangeHandler} placeholder='Nhập gmail của bạn' spellCheck='false' />
            {confirmGmail && <svg className='wrongIcon' width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_915_635)">
                <path d="M7.7786 20.8596C11.3909 24.472 17.2477 24.472 20.8601 20.8596C24.4724 17.2473 24.4724 11.3905 20.8601 7.77816C17.2477 4.16581 11.3909 4.16581 7.7786 7.77816C4.16625 11.3905 4.16625 17.2473 7.7786 20.8596Z" fill="#FF0000" />
                <path d="M7.07151 21.2132C3.17182 17.3135 3.17182 10.9708 7.07151 7.07107C10.9712 3.17137 17.314 3.17137 21.2136 7.07107C25.1133 10.9708 25.1133 17.3135 21.2136 21.2132C17.314 25.1129 10.9712 25.1129 7.07151 21.2132ZM19.7994 8.48528C16.6793 5.36517 11.6041 5.36694 8.48572 8.48528C5.36738 11.6036 5.36562 16.6789 8.48572 19.799C11.6058 22.9191 16.6811 22.9173 19.7994 19.799C22.9178 16.6806 22.9195 11.6054 19.7994 8.48528Z" fill="#FF0000" />
                <path d="M18.3855 16.9705L11.3145 9.89948L9.90024 11.3137L16.9713 18.3848L18.3855 16.9705Z" fill="white" />
                <path d="M18.3849 11.3137L16.9707 9.89948L9.89964 16.9705L11.3138 18.3848L18.3849 11.3137Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_915_635">
                  <rect width="20" height="20" fill="white" transform="translate(14.1426) rotate(45)" />
                </clipPath>
              </defs>
            </svg>}
          </div>
          <button className='confirmButton'>xác nhận</button>
          <div className='optionsAccount' style={{ marginTop: '-25px' }}>
            <p style={{ color: 'red', fontWeight: '700', cursor: 'pointer' }} onClick={() => navigate('/register')}>Đăng ký</p>
            <p style={{ color: 'red', fontWeight: '700', cursor: 'pointer' }} onClick={() => navigate('/login')}>Đăng nhập</p>
          </div>
          <div className='backIcon' onClick={() => navigate('/login')}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_915_610)">
                <path d="M9.11602 1.03746e-06L10.8848 1.83588L3.01914 10L10.8848 18.1641L9.11601 20L0.366014 10.9179C-0.121486 10.4119 -0.121486 9.59131 0.366014 9.08206L9.11602 1.03746e-06Z" fill="black" />
                <path d="M1.25 11.2974L20 11.2974L20 8.70256L1.25 8.70256L1.25 11.2974Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_915_610">
                  <rect width="20" height="20" fill="white" transform="translate(20 20) rotate(-180)" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {confirmGmail && <div className='wrongInputGmail'>Gmail của bạn không hợp lệ.</div>}
        </form>}

        {step === 2 && <form onSubmit={handlePinConfirm} className='step2'>
          <div className='logo'>
            <img src="../../../../public/img/Logo.png" alt='' />
          </div>
          <div className='message'>Thư xác nhận lại mật khẩu đã được chuyển đến gmail của bạn.</div>
          <div className='pinConfirm'>
            <h1>Nhập mã xác nhận</h1>
            <input onChange={pinChangeHandler} autoFocus className={`pinInput ${pinWrong && 'pinWrong'}`} />
          </div>
          <button className='confirmButton'>tiếp theo</button>
          <div className='optionsAccount' style={{ marginTop: '-5px' }}>
            <p style={{ color: 'red', fontWeight: '700', cursor: 'pointer' }} onClick={() => navigate('/register')}>Đăng ký</p>
            <p style={{ color: 'red', fontWeight: '700', cursor: 'pointer' }} onClick={() => navigate('/login')}>Đăng nhập</p>
          </div>
          <div className='backIcon' onClick={() => handleSetStep(1)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_915_610)">
                <path d="M9.11602 1.03746e-06L10.8848 1.83588L3.01914 10L10.8848 18.1641L9.11601 20L0.366014 10.9179C-0.121486 10.4119 -0.121486 9.59131 0.366014 9.08206L9.11602 1.03746e-06Z" fill="black" />
                <path d="M1.25 11.2974L20 11.2974L20 8.70256L1.25 8.70256L1.25 11.2974Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_915_610">
                  <rect width="20" height="20" fill="white" transform="translate(20 20) rotate(-180)" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {pinWrong && <div className='wrongPin'>Mã xác nhận không đúng. Vui lòng kiểm tra lại.</div>}
        </form>}
        {step === 3 && <form onSubmit={handlePasswordConfirm} className='step3'>
          <div className='logo'>
            <img src="../../../../public/img/Logo.png" alt='' />
          </div>
          <div className={`input ${passwordWrong && 'inputWrong'}`}>
            <input onChange={passwordChangeHandler} type="password" placeholder='Mật khẩu mới' spellCheck='false' />
            {passwordWrong && <svg className='wrongIcon' width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_915_635)">
                <path d="M7.7786 20.8596C11.3909 24.472 17.2477 24.472 20.8601 20.8596C24.4724 17.2473 24.4724 11.3905 20.8601 7.77816C17.2477 4.16581 11.3909 4.16581 7.7786 7.77816C4.16625 11.3905 4.16625 17.2473 7.7786 20.8596Z" fill="#FF0000" />
                <path d="M7.07151 21.2132C3.17182 17.3135 3.17182 10.9708 7.07151 7.07107C10.9712 3.17137 17.314 3.17137 21.2136 7.07107C25.1133 10.9708 25.1133 17.3135 21.2136 21.2132C17.314 25.1129 10.9712 25.1129 7.07151 21.2132ZM19.7994 8.48528C16.6793 5.36517 11.6041 5.36694 8.48572 8.48528C5.36738 11.6036 5.36562 16.6789 8.48572 19.799C11.6058 22.9191 16.6811 22.9173 19.7994 19.799C22.9178 16.6806 22.9195 11.6054 19.7994 8.48528Z" fill="#FF0000" />
                <path d="M18.3855 16.9705L11.3145 9.89948L9.90024 11.3137L16.9713 18.3848L18.3855 16.9705Z" fill="white" />
                <path d="M18.3849 11.3137L16.9707 9.89948L9.89964 16.9705L11.3138 18.3848L18.3849 11.3137Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_915_635">
                  <rect width="20" height="20" fill="white" transform="translate(14.1426) rotate(45)" />
                </clipPath>
              </defs>
            </svg>}
          </div>
          <div className={`input ${confirmPasswordWrong && 'inputWrong'}`}>
            <input onChange={confirmPasswordChangeHandler} type="password" placeholder='Xác nhận mật khẩu' spellCheck='false' />
            {confirmPasswordWrong && <svg className='wrongIcon' width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_915_635)">
                <path d="M7.7786 20.8596C11.3909 24.472 17.2477 24.472 20.8601 20.8596C24.4724 17.2473 24.4724 11.3905 20.8601 7.77816C17.2477 4.16581 11.3909 4.16581 7.7786 7.77816C4.16625 11.3905 4.16625 17.2473 7.7786 20.8596Z" fill="#FF0000" />
                <path d="M7.07151 21.2132C3.17182 17.3135 3.17182 10.9708 7.07151 7.07107C10.9712 3.17137 17.314 3.17137 21.2136 7.07107C25.1133 10.9708 25.1133 17.3135 21.2136 21.2132C17.314 25.1129 10.9712 25.1129 7.07151 21.2132ZM19.7994 8.48528C16.6793 5.36517 11.6041 5.36694 8.48572 8.48528C5.36738 11.6036 5.36562 16.6789 8.48572 19.799C11.6058 22.9191 16.6811 22.9173 19.7994 19.799C22.9178 16.6806 22.9195 11.6054 19.7994 8.48528Z" fill="#FF0000" />
                <path d="M18.3855 16.9705L11.3145 9.89948L9.90024 11.3137L16.9713 18.3848L18.3855 16.9705Z" fill="white" />
                <path d="M18.3849 11.3137L16.9707 9.89948L9.89964 16.9705L11.3138 18.3848L18.3849 11.3137Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_915_635">
                  <rect width="20" height="20" fill="white" transform="translate(14.1426) rotate(45)" />
                </clipPath>
              </defs>
            </svg>}
          </div>
          <button className='confirmButton' >xác nhận</button>
          {passwordWrong && <div className='wrongPassword'>Mật khẩu của bạn không đúng.</div>}
          {confirmPasswordWrong && <div className='wrongConfirm'>Mật khẩu của bạn không trùng khớp.</div>}
          <div className='backIcon' onClick={() => handleSetStep(2)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_915_610)">
                <path d="M9.11602 1.03746e-06L10.8848 1.83588L3.01914 10L10.8848 18.1641L9.11601 20L0.366014 10.9179C-0.121486 10.4119 -0.121486 9.59131 0.366014 9.08206L9.11602 1.03746e-06Z" fill="black" />
                <path d="M1.25 11.2974L20 11.2974L20 8.70256L1.25 8.70256L1.25 11.2974Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_915_610">
                  <rect width="20" height="20" fill="white" transform="translate(20 20) rotate(-180)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </form>}
        {step === 4 && <div className='step4'>
          <div className='logo'>
            <img src="../../../../public/img/Logo.png" alt='' />
          </div>
          <div className='logined'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1>Đổi mật khẩu thành công.</h1>
          </div>
          <div className='returnPage'>
            <p onClick={()=> navigate('/login')}>Đăng nhập</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>}

      </div>
      <div className='overlay' />
    </div>
  )
}

export default ForgetPassword