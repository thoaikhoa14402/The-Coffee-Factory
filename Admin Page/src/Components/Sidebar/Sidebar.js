import React, { useEffect, useState } from 'react'
import style from './Sidebar.module.css'
import logo from '../../Images/logo.jpg'
import { useNavigate, useLocation } from 'react-router-dom';

import Cookies from 'universal-cookie'

const cookie = new Cookies()

function Sidebar() {
  const [click, setClick] = useState(1)
  const handleClick = (page) => {
    setClick(page)
    if (page === 1) navigate('/dashboard')
    else if (page === 2) navigate('/products')
    else navigate('/users')
  }

  const navigate = useNavigate()
  const [sidebarHidden, setSidebarHidden] = useState(true)

  useEffect(() => {
    if (cookie.get("JWT")) {
      setSidebarHidden(false)
    }
  }, [cookie.get("JWT")])


  const handleLogout = () => {
    cookie.remove('JWT')
    navigate('/')
  }

  const state = useLocation();
  useEffect(() => {
    setSidebarHidden(false)
    if (state.pathname === '/' || state.pathname === '/forget') setSidebarHidden(true)
    else if (state.pathname === '/dashboard') setClick(1)
    else if (state.pathname === '/products') setClick(2)
    else if (state.pathname === '/users') setClick(3)
  }, [state])


  return (
    !sidebarHidden && <div className={style.Sidebar}>
      <div className={style.Logo}>
        <img src={logo} alt='' />
      </div>
      <div className={style.Feature}>
        <div className={style.feature + ' ' + (click === 1 && style.choose)} onClick={() => handleClick(1)}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <p>Dashboard</p>
        </div>
        <div onClick={() => handleClick(2)} className={style.feature + ' ' + (click === 2 && style.choose)}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
          <p>Products</p>
        </div>
        <div className={style.feature + ' ' + (click === 3 && style.choose)} onClick={() => handleClick(3)}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
          </svg>
          <p>User</p>
        </div>
      </div>
      <div onClick={handleLogout} className={style.logout}>
        <svg height={'28px'} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
        </svg>
        <p>Logout</p>
      </div>
    </div>
  )
}

export default Sidebar