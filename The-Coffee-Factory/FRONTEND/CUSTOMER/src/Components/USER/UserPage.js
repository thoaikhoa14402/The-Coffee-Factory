import React, { useState } from 'react'
import './UserPage.css'
import SideBar from './SideBar/SideBar'
import Main from './Main/Main'


function UserPage(props) {
  const [page, setPage] = useState(1)
  const handleCallback = (data) => {
    setPage(data)
    // console.log(data)
  }

  return <div className='UserPage'>
    <SideBar callback={handleCallback} />
    <Main page={page} />
  </div>
}

export default UserPage