import React from 'react'
import './Main.css'
import Account from './Pages/Account/Account'
// import Change from './Pages/Change/Change'
import Orders from './Pages/Orders/Orders'
import Promotion from './Pages/Promotion/Promotion'

function Main(props) {
  return (
    <div className='Mainn'>
      {(props.page === 1 || props.page === 2) && <Account page={props.page} />}
      {props.page === 3 && <Orders />}
      {props.page === 4 && <Promotion />}
    </div>
  )
}

export default Main