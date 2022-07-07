import React, { useState, useEffect } from 'react'
import './Register.css'
// import logo from '../../../../public/img/logoTCF.png'
import axios from 'axios'


function Register({callBacks}) {
  const [accountWrong, setAccountWrong] = useState(false)
  const [accountExist, setAccountExist] = useState(false)
  const [passwordWrong, setPasswordWrong] = useState(false)
  const [confirmPasswordWrong, setConfirmPasswordWrong] = useState(false)

  const [enteredAccount, setEnteredAccount] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('')
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('')

  const accountChangeHandler = event => {
    setEnteredAccount(event.target.value);
  }
  const passwordChangeHander = event => {
    setEnteredPassword(event.target.value)
  }

  const confirmPasswordChangeHander = event => {
    setEnteredConfirmPassword(event.target.value)
  }


  const handleRegister = (event) => {
    event.preventDefault()

    setAccountWrong(false)
    setAccountExist(false)
    setPasswordWrong(false)
    setConfirmPasswordWrong(false)

    const object = {
      email: enteredAccount,
      password: enteredPassword,
      passwordConfirm: enteredConfirmPassword
    };
    axios.post('http://192.168.1.55:3000/tcf/v1/users/signup', object).then((res) => {
      setStep(2)
    }).catch(error => {
      let a = error.response.data.message.split('. ')
      for (let i in a) {
        if (a[i].includes('Duplicate field value')) setAccountExist(true)
        if (a[i] === 'Please provide a valid email') setAccountWrong(true)
        if (a[i] === 'Password length must be greater or equal to 8' || a[i] === 'Please provide a password') setPasswordWrong(true)
        if (a[i] === 'PLease confirm your password' || a[i] === 'Passwords are not the same') setConfirmPasswordWrong(true)

      }
    })
  }

  const handleReturn = () => {
    callBacks(1, 0)
  }

  const setClick = (data) => {
    callBacks(data, 0)
  }

  console.log(typeof(callBacks))

  const [step, setStep] = useState(1)

  return (
    <div className='Register'>
      {step === 1 && <form onSubmit={handleRegister} className='step1'>
        <div className='logo'>
          <img src="../../../../public/img/logoTCF.png" alt='' />
        </div>
        <div className={`input ${(accountWrong && 'inputWrongRegister') || (accountExist && 'inputWrongRegister')}`}>
          <input placeholder='Nhập gmail của bạn' spellCheck='false' onChange={accountChangeHandler} />
          {(accountWrong || accountExist) && <svg className='wrongIcon' width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <div className={`input ${passwordWrong && 'inputWrongRegister'}`}>
          <input onChange={passwordChangeHander} type="password" placeholder='Nhập mật khẩu của bạn' spellCheck='false' />
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
        <div className={`input ${confirmPasswordWrong && 'inputWrongRegister'}`}>
          <input onChange={confirmPasswordChangeHander} type="password" placeholder='Xác nhận mật khẩu của bạn' spellCheck='false' />
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
        <button className='registerButton' onClick={handleRegister}>Đăng ký</button>
        <div className='createAccount'>
          <p>Bạn đã có tài khoản? </p>
          <p style={{ color: 'red', fontWeight: '700' }} onClick={() => setClick(1)}>Đăng nhập</p>
        </div>
        <div className='iconBack' onClick={() => {setClick(0)}}>
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
        {accountWrong && <div className='wrongGmailRegister'>Gmail của bạn không hợp lệ.</div>}
        {accountExist && <div className='existGmailRegister'>Gmail đã tồn tại.</div>}
        {passwordWrong && <div className='wrongPasswordRegister'>Mật khẩu của bạn không hợp lệ</div>}
        {confirmPasswordWrong && <div className='wrongConfirmRegister'>Mật khẩu của bạn không trùng khớp</div>}
      </form>}
      {step === 2 && <div className='step2'>
        <div className='logo'>
          <img src= "../../../../public/img/logoTCF.png" alt='' />
        </div>
        <div className='logined'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1>Đăng kí thành công.</h1>
        </div>
        <div className='returnPage'>
          <p onClick={handleReturn}>Đăng nhập</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>}
    </div>
  )
}

export default Register