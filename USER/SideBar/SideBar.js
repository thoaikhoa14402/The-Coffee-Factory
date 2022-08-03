import React, { useState } from 'react'
import './SideBar.css'

function SideBar(props) {
  const [menu, setMenu] = useState(1)
  const handleMenu = (page) => {
    setMenu(page)
    props.callback(page)
  }
  return (
    <div className='SideBar'>
      <div className={'m1' + {}}>
        <div className='menu' onClick={() => handleMenu(1)}>
          <svg width="17" height="20" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_945_973)">
              <path className={`${(menu === 1) && 'choose'}`} d="M6.22255 7.11111C4.26255 7.11111 2.66699 5.51556 2.66699 3.55556C2.66699 1.59556 4.26255 0 6.22255 0C8.18255 0 9.7781 1.59556 9.7781 3.55556C9.7781 5.51556 8.18255 7.11111 6.22255 7.11111ZM6.22255 1.77778C5.24255 1.77778 4.44477 2.57556 4.44477 3.55556C4.44477 4.53556 5.24255 5.33333 6.22255 5.33333C7.20255 5.33333 8.00033 4.53556 8.00033 3.55556C8.00033 2.57556 7.20255 1.77778 6.22255 1.77778Z" fill="black" />
              <path className={`${(menu === 1) && 'choose'}`} d="M11.5556 16H0.888889C0.397778 16 0 15.6022 0 15.1111V12.4444C0 9.99333 1.99333 8 4.44444 8H8C10.4511 8 12.4444 9.99333 12.4444 12.4444V15.1111C12.4444 15.6022 12.0467 16 11.5556 16ZM1.77778 14.2222H10.6667V12.4444C10.6667 10.9733 9.47111 9.77778 8 9.77778H4.44444C2.97333 9.77778 1.77778 10.9733 1.77778 12.4444V14.2222Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_945_973">
                <rect width="12.4444" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className={`titlee ${(menu === 1) && 'choose'}`}>thông tin tài khoản</p>
        </div>
        <p className={`title-min  ${(menu === 2) && 'choose'}`} onClick={() => handleMenu(2)}>Đổi mật khẩu</p>
      </div>
      <div className='menu m2' onClick={() => handleMenu(3)}>
        <svg width="19" height="21" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_949_587)">
            <path className={`${(menu === 3) && 'choose'}`} d="M14 14H3C2.4475 14 2 13.5525 2 13V5C2 4.4475 2.4475 4 3 4H17C17.3275 4 17.635 4.16 17.8225 4.43C18.01 4.7 18.0525 5.0425 17.9375 5.35L14.9375 13.35C14.7925 13.74 14.4175 14 14 14ZM4 12H13.3075L15.5575 6H4V12Z" fill="black" />
            <path className={`${(menu === 3) && 'choose'}`} d="M4 5H2V2H0V0H3C3.5525 0 4 0.4475 4 1V5Z" fill="black" />
            <path className={`${(menu === 3) && 'choose'}`} d="M15 18H3C2.4475 18 2 17.5525 2 17V13H4V16H15V18Z" fill="black" />
            <path className={`${(menu === 3) && 'choose'}`} d="M9 17H7V20H9V17Z" fill="black" />
            <path className={`${(menu === 3) && 'choose'}`} d="M13 17H11V20H13V17Z" fill="black" />
          </g>
          <defs>
            <clipPath id="clip0_949_587">
              <rect width="18" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p className={`titlee ${(menu === 3) && 'choose'}`}>lịch sử đơn hàng</p>
      </div>
      <div className='menu m3' onClick={() => handleMenu(4)}>
        <svg width="17" height="17" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={`${(menu === 4) && 'choose'}`} d="M15.1111 16H0.888889C0.397778 16 0 15.6022 0 15.1111V5.33335C0 4.84224 0.397778 4.44446 0.888889 4.44446H15.1111C15.6022 4.44446 16 4.84224 16 5.33335V15.1111C16 15.6022 15.6022 16 15.1111 16ZM1.77778 14.2222H14.2222V6.22224H1.77778V14.2222Z" fill="black" />
          <path className={`${(menu === 4) && 'choose'}`} d="M8.00033 6.22222H5.7781C4.06255 6.22222 2.66699 4.82667 2.66699 3.11111C2.66699 1.39556 4.06255 0 5.7781 0C7.49366 0 8.88921 1.39556 8.88921 3.11111V5.33333C8.88921 5.82444 8.49144 6.22222 8.00033 6.22222ZM5.7781 1.77778C5.04255 1.77778 4.44477 2.37556 4.44477 3.11111C4.44477 3.84667 5.04255 4.44444 5.7781 4.44444H7.11144V3.11111C7.11144 2.37556 6.51366 1.77778 5.7781 1.77778Z" fill="black" />
          <path className={`${(menu === 4) && 'choose'}`} d="M10.2224 6.22222H8.00022C7.50911 6.22222 7.11133 5.82444 7.11133 5.33333V3.11111C7.11133 1.39556 8.50688 0 10.2224 0C11.938 0 13.3336 1.39556 13.3336 3.11111C13.3336 4.82667 11.938 6.22222 10.2224 6.22222ZM8.88911 4.44444H10.2224C10.958 4.44444 11.5558 3.84667 11.5558 3.11111C11.5558 2.37556 10.958 1.77778 10.2224 1.77778C9.48688 1.77778 8.88911 2.37556 8.88911 3.11111V4.44444Z" fill="black" />
          <path className={`${(menu === 4) && 'choose'}`} d="M8.88911 4.44446H7.11133V15.1111H8.88911V4.44446Z" fill="black" />
        </svg>

        <p className={`titlee ${(menu === 4) && 'choose'}`}>mã khuyến mãi</p>
      </div>
      <div className='menu m4' onClick={() => handleMenu(5)}>
        <svg width="17" height="17" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={`${(menu === 5) && 'choose'}`} d="M15.1111 16H0.888889C0.397778 16 0 15.6022 0 15.1111V11.5556H1.77778V14.2222H14.2222V1.77778H1.77778V4.44444H0V0.888889C0 0.397778 0.397778 0 0.888889 0H15.1111C15.6022 0 16 0.397778 16 0.888889V15.1111C16 15.6022 15.6022 16 15.1111 16Z" fill="black" />
          <path className={`${(menu === 5) && 'choose'}`} d="M10.6667 7.11108H0V8.88886H10.6667V7.11108Z" fill="black" />
          <path className={`${(menu === 5) && 'choose'}`} d="M7.7402 12.1844L6.48242 10.9267L9.40909 8L6.48242 5.07333L7.7402 3.81555L11.2958 7.37111C11.6424 7.71777 11.6424 8.28 11.2958 8.62889L7.7402 12.1844Z" fill="black" />
        </svg>
        <p className={`titlee ${(menu === 5) && 'choose'}`}>đăng xuất</p>
      </div>
    </div>
  )
}

export default SideBar