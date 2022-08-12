import React, { useEffect, useState } from 'react'
import './Account.css'
import background from '../../../../../Image/background.jpg'
import avatar from '../../../../../Image/avatar.jpg'
import axios from 'axios'
import Cookie from 'universal-cookie'

const cookie = new Cookie()
function Account(props) {
  const [name, setName] = useState('')
  const [birthDay, setBirthDay] = useState('')
  const [numberPhone, setNumberPhone] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [address, setAddress] = useState('')
  useEffect(() => {
    if (cookie.get("JWT")) {
      const headers = {
        'Authorization': `Bearer ${cookie.get("JWT")}`
      }
      axios.get(process.env.REACT_APP_ipAddress + '/tcf/v1/users/userProfile', { headers: headers }).then((res) => {
        // console.log('Successfully!!!')
        setName(res.data.data.user.name)
        setBirthDay(res.data.data.user.birthday)
        setNumberPhone(res.data.data.user.phoneNumber)
        setEmail(res.data.data.user.email)
        setGender(res.data.data.user.gender)
        setAddress(res.data.data.user.address)
      }).catch(error => {
        console.log(error)
      })
    }
  }, [])




  const handleChangeName = event => setName(event.target.value)
  const handleChangeBirthDay = event => setBirthDay(event.target.value)
  const handleChangePhone = event => setNumberPhone(event.target.value)
  const handleChangeEmail = event => setEmail(event.target.value)
  const handleChangeGender = event => setGender(event.target.value)
  const handleChangeAddress = event => setAddress(event.target.value)

  const [resetSuc, setResetSuc] = useState(false)
  const handleResetInformation = (event) => {
    event.preventDefault()
    if (cookie.get("JWT")) {
      const headers = {
        'Authorization': `Bearer ${cookie.get("JWT")}`
      }
      let newBirth = birthDay.split('-').reverse().join('/')
      const object = {
        name: name,
        email: email,
        phoneNumber: numberPhone,
        address: address,
        gender: gender,
        birthday: newBirth,
        photo: ''
      };
      console.log(object)
      axios.patch(process.env.REACT_APP_ipAddress + '/tcf/v1/users/updateMe', object, { headers: headers }).then((res) => {
        console.log('Successfully!!!')
        setResetSuc(true)
        setTimeout(function () {
          setResetSuc(false)
        }, 2000);
      }).catch(error => {
        console.log(error)
        if (error.response.data.message === 'User recently changed password! Please log in again.') {
          setResetSuc(true)
        }
        else
        {
          let errors = error.response.data.message;
          if (error.response.data.message === 'Invalid input data. Please provide a valid email')
            errors = 'Gmail không tồn tại.'
          alert(errors);
        }
      })
    }
  }


  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  const handleChangeCurrentPassword = event => setCurrentPassword(event.target.value)
  const handleChangeNewPassword = event => setNewPassword(event.target.value)
  const handleChangeConfirmNewPassword = event => setConfirmNewPassword(event.target.value)

  const [wrongCurrentPassword, setWrongCurrentPassword] = useState(false)
  const [wrongNewPassword, setWrongNewPassword] = useState(false)
  const [wrongConfirmPassword, setWrongConfirmPassword] = useState(false)

  const [resetPassSuccess, setResetPassSuccess] = useState(false)
  const handleResetPassword = (event) => {
    setWrongCurrentPassword(false)
    setWrongNewPassword(false)
    setWrongConfirmPassword(false)
    event.preventDefault()
    if (cookie.get("JWT")) {
      const headers = {
        'Authorization': `Bearer ${cookie.get("JWT")}`
      }
      const object = {
        passwordCurrent: currentPassword,
        password: newPassword,
        passwordConfirm: confirmNewPassword
      };
      axios.patch(process.env.REACT_APP_ipAddress + '/tcf/v1/users/updateMyPassword', object, { headers: headers }).then((res) => {
        // console.log('Successfully cccccccccccccccc !!!')
        cookie.set('JWT', res.data.token, { path: '/' })
        // console.log(res.data.token)
        setResetPassSuccess(true)
      }).catch(error => {
        console.log(error)
        if (error.response.data.message === 'User recently changed password! Please log in again.') {
          setResetPassSuccess(true)
        }
        let a = error.response.data.message.split('. ')
        console.log(a)
        if (a.includes('Your current password is wrong')) setWrongCurrentPassword(true)
        if (a.includes('Password length must be greater or equal to 8') || a.includes('Please provide a password')) setWrongNewPassword(true)
        if (a.includes('Passwords are not the same') || a.includes('PLease confirm your password')) setWrongConfirmPassword(true)
      })
    }
  }

  useEffect(() => {
    if (props.page === 1) {
      setResetPassSuccess(false)
    }
  }, [props.page])



  return (
    <div className='Account'>
      <img className='background' src={background} alt='' />
      <div className='information' >
        {props.page === 1 && <form onSubmit={handleResetInformation} className='form1'>
          <div className='text'>
            <div className='form-title star'>
              <p>Họ và tên</p>
              <p style={{ color: 'red' }}>*</p>
            </div>
            <input onChange={handleChangeName} value={name} className='inputt' placeholder='Nhập họ và tên' />
          </div>
          <div className='text'>
            <div className='form-title star'>
              <p>Sinh nhật</p>
              <p style={{ color: 'red' }}>*</p>
            </div>
            <input type='date' onChange={handleChangeBirthDay} value={birthDay} className='inputt' placeholder='dd/mm/yyyy' />
          </div>
          <div className='text'>
            <div className='form-title star'>
              <p>Số điện thoại</p>
              <p style={{ color: 'red' }}>*</p>
            </div>
            <input type='phone' onChange={handleChangePhone} value={numberPhone} className='inputt' placeholder='Nhập số điện thoại' />
          </div>
          <div className='text'>
            <div className='form-title star'>
              <p>Email</p>
              <p style={{ color: 'red' }}>*</p>
            </div>
            <input type='email' required onChange={handleChangeEmail} value={email} className='inputt' placeholder='Nhập email' />
          </div>
          <div className='text'>
            <p className='form-title'>Giới tính</p>
            <input onChange={handleChangeGender} value={gender} className='inputt' placeholder='Nam/Nữ/Khác' />
          </div>
          <div className='text'>
            <div className='form-title star'>
              <p>Địa chỉ mặc định</p>
              <p style={{ color: 'red' }}>*</p>
            </div>
            <input onChange={handleChangeAddress} value={address} className='inputt' placeholder='Nhập địa chỉ' />
          </div>
          <button type='submit' className='save'>lưu thay đổi</button>
          {resetSuc && <button className='save Ssuc'>lưu thành công</button>}
        </form>}
        {props.page === 2 && !resetPassSuccess && <form onSubmit={handleResetPassword} className='form2'>
          <div className='form-title2 form-titlee'>Đổi mật khẩu</div>
          <div className='form2-main'>
            <p className='form-title form-title2'>Mật khẩu hiện tại</p>
            <input type="password" onChange={handleChangeCurrentPassword} className='inputt  input2' placeholder='Nhập mật khẩu hiện tại' />
            <p className='form-title form-title2 midle'>Mật khẩu mới</p>
            <input type="password" onChange={handleChangeNewPassword} className='inputt input2 midle' placeholder='Nhập mật khẩu mới' />
            <div className='form-title form-title2'>
              <p>Xác nhận mật khẩu</p>
              <p style={{ color: 'red' }}>*</p>
            </div>
            <input type="password" onChange={handleChangeConfirmNewPassword} className='inputt input2' placeholder='Xác nhận lại mật khẩu' />
          </div>
          {wrongCurrentPassword && <p className='wrongCurrentPassword'>Mật khẩu hiện tại của bạn không đúng</p>}
          {wrongNewPassword && <p className='wrongNewPassword'>Mật khẩu mới của bạn không hợp lệ.</p>}
          {wrongConfirmPassword && <p className='wrongConfirmPassword'>Mật khẩu xác nhận của bạn không trùng khớp</p>}
          {!resetPassSuccess && <button onClick={handleResetPassword} className='saveP'>lưu thay đổi</button>}
        </form>}
      </div>
      {resetPassSuccess && <div className='resetPasswordSuccess'>
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 80C17.94 80 0 62.06 0 40C0 17.94 17.94 0 40 0C62.06 0 80 17.94 80 40C80 62.06 62.06 80 40 80ZM40 8C22.35 8 8 22.36 8 40C8 57.64 22.35 72 40 72C57.65 72 72 57.64 72 40C72 22.36 57.65 8 40 8Z" fill="#00B512" />
          <path d="M35.9999 56C34.9799 56 33.9499 55.61 33.1699 54.83L21.1699 42.83L26.8299 37.17L35.9999 46.34L57.1699 25.17L62.8299 30.83L38.8299 54.83C38.0499 55.61 37.0299 56 35.9999 56Z" fill="#00B512" />
        </svg>
        <p>Bạn đã đổi mật khẩu thành công!</p>
      </div>}
      <div className='avatar'>
        <img className='background' src={avatar} alt='' />
      </div>
      <div className='shot'>
        <svg width="20" height="18" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.05 17H0.95C0.425125 17 0 16.5774 0 16.0556V2.83333C0 2.31153 0.425125 1.88889 0.95 1.88889H4.75V0.944444C4.75 0.422639 5.17513 0 5.7 0H13.3C13.8249 0 14.25 0.422639 14.25 0.944444V1.88889H18.05C18.5749 1.88889 19 2.31153 19 2.83333V16.0556C19 16.5774 18.5749 17 18.05 17ZM1.9 15.1111H17.1V3.77778H13.3C12.7751 3.77778 12.35 3.35514 12.35 2.83333V1.88889H6.65V2.83333C6.65 3.35514 6.22487 3.77778 5.7 3.77778H1.9V15.1111Z" fill="#969695" />
          <path d="M9.5 14.1666C6.88038 14.1666 4.75 12.0487 4.75 9.44439C4.75 6.84008 6.88038 4.72217 9.5 4.72217C12.1196 4.72217 14.25 6.84008 14.25 9.44439C14.25 12.0487 12.1196 14.1666 9.5 14.1666ZM9.5 6.61106C7.92775 6.61106 6.65 7.88133 6.65 9.44439C6.65 11.0074 7.92775 12.2777 9.5 12.2777C11.0722 12.2777 12.35 11.0074 12.35 9.44439C12.35 7.88133 11.0722 6.61106 9.5 6.61106Z" fill="#969695" />
        </svg>
      </div>

    </div>
  )
}

export default Account