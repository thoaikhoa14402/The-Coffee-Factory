import './Dashboard.css'
import waiting from '../../../Images/waiting.png'
import process from '../../../Images/process.png'
import cancel from '../../../Images/cancel.png'
import money from '../../../Images/money.png'
import Item from './Item/Item'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import { Socket } from 'socket.io'
import io from 'socket.io-client'
import Cookie from 'universal-cookie'

const cookie = new Cookie()

const socket = io.connect(process.env.REACT_APP_IPADDRESS)
export default function Dashboard() {

  const [dataS, setData] = useState('')


  useEffect(() => {
    if (cookie.get("JWT")) {
      const headers = {
        'Authorization': `Bearer ${cookie.get("JWT")}`
      }
      axios.get(process.env.REACT_APP_IPADDRESS + '/tcf/v1/admin/history-ad', { headers: headers }).then((res) => {
        setData(res.data.History)
      }).catch(error => {
        console.log(error)
      })
    }
  }, [])

  const sendStage = (object) => {
    const headers = {
      'Authorization': `Bearer ${cookie.get("JWT")}`
    }
    axios.post(process.env.REACT_APP_IPADDRESS + '/tcf/v1/admin/update-status', object, { headers: headers }).then((res) => {
      setData((prevData) => prevData.map((element) => (element._id === res.data.update._id) ? res.data.update : element))
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    socket.on("order", (data) => {
      setData((prevData) => [...prevData, data])
    });
  }, [])


  return (
    <div className='Dashboard'>
      <div className='dashboardTitle'>Dashboard</div>
      <div className='dashboardInformation'>
        <div className='di di-3'>
          <p className='diTitle'>order process</p>
          <p className='diAmount'>5</p>
          <div className='diIcon'>
            <img src={process} alt='' />
          </div>
        </div>
        <div className='di di-1'>
          <p className='diTitle'>order delivered</p>
          <p className='diAmount'>3</p>
          <div className='diIcon'>
            <img src={waiting} alt='' />
          </div>
        </div>
        <div className='di di-2'>
          <p className='diTitle'>order cancel</p>
          <p className='diAmount'>2</p>
          <div className='diIcon'>
            <img src={cancel} alt='' />

          </div>
        </div>

        <div className='di di-4'>
          <p className='diTitle'>today income</p>
          <p className='diAmount'>$9568.00</p>
          <div className='diIcon'>
            <img src={money} alt='' />
          </div>
        </div>
      </div>
      <div className='recentOrders'>
        <div className='recentOrdersTitle'>
          <p>Recent Orders</p>
          {/* <button>View All</button> */}
        </div>
        <div className='recentOrdersName'>
          <p className='id'>Order ID</p>
          <p className='paymentMethod'>Payment Method</p>
          <p className='date'>Order Date</p>
          <p className='status'>Status</p>
          <p className='total'>Total</p>
          <p className='actionC'>Action</p>
        </div>
        <div className='main'>
          {dataS.length > 0 && dataS.map((values, index) => (
            <Item key={index}
              id={values._id}
              paymentMethod={values.methodDelivery}
              date={values.dateOrder}
              total={values.totalPrice}
              stage={values.status}
              callback={sendStage}
            />
          ))}
        </div>
      </div>
    </div>
  )
}