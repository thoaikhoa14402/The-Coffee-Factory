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

const socket = io.connect(process.env.REACT_APP_ipAddress)
export default function Dashboard() {

  const [dataS, setData] = useState('')

  useEffect(() => {
    if (cookie.get("JWT")) {
      const headers = {
        'Authorization': `Bearer ${cookie.get("JWT")}`
      }
      axios.get(process.env.REACT_APP_ipAddress + '/tcf/v1/admin/history-ad', { headers: headers }).then((res) => {
        setData(res.data.History)
      }).catch(error => {
        console.log(error)
      })
    }
  }, [])

  const sendStage = (object) => {
    if (cookie.get("JWT")) {
      const headers = {
        'Authorization': `Bearer ${cookie.get("JWT")}`
      }
      axios.post(process.env.REACT_APP_ipAddress + '/tcf/v1/admin/update-status', object, { headers: headers }).then((res) => {

        setData((prevData) => prevData.map((element) => (element._id === res.data.update._id) ? res.data.update : element))
      }).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    socket.on("order", (data) => {
      setData((prevData) => [...prevData, data])
      calculateAmount((prevData) => [...prevData, data])
    });
  }, [])

  const [orderProcessAmount, setOrderProcessAmount] = useState(0)
  const [orderDeliveredAmount, setOrderDeliveredAmount] = useState(0)
  const [orderCancelAmount, setOrderCancelAmount] = useState(0)
  const [todayIncome, setTodayIncome] = useState(0)

  const calculateAmount = (data) => {
    let sum1 = 0
    let sum2 = 0
    let sum3 = 0
    let sum4 = 0
    for (let i in data) {
      if (data[i].status === 'Processing' || data[i].status === 'Shipping') sum1++
      else if (data[i].status === 'Delivered') sum2++
      else sum3++
      if (data[i].status === 'Delivered') sum4 += data[i].totalPrice
    }
    setOrderProcessAmount(sum1)
    setOrderDeliveredAmount(sum2)
    setOrderCancelAmount(sum3)
    setTodayIncome(sum4)
  }
  useEffect(() => {
    calculateAmount(dataS)
  }, [dataS])


  return (
    <div className='Dashboard'>
      <div className='dashboardTitle'>Dashboard</div>
      <div className='dashboardInformation'>
        <div className='di di-3'>
          <p className='diTitle'>order process</p>
          <p className='diAmount'>{orderProcessAmount}</p>
          <div className='diIcon'>
            <img src={process} alt='' />
          </div>
        </div>
        <div className='di di-1'>
          <p className='diTitle'>order delivered</p>
          <p className='diAmount'>{orderDeliveredAmount}</p>
          <div className='diIcon'>
            <img src={waiting} alt='' />
          </div>
        </div>
        <div className='di di-2'>
          <p className='diTitle'>order cancel</p>
          <p className='diAmount'>{orderCancelAmount}</p>
          <div className='diIcon'>
            <img src={cancel} alt='' />

          </div>
        </div>

        <div className='di di-4'>
          <p className='diTitle'>today income</p>
          <p className='diAmount'>{todayIncome}.000 vnđ</p>
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
          <p className='statuss'>Status</p>
          <p className='total'>Total</p>
          <p className='actionCC'>Action</p>
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