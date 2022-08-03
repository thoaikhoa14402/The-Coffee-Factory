import React, { useEffect, useState } from 'react'
import './Orders.css'
import Item from './Item/Item'
// import background from '../../../../Images/background.jpg'
import axios from 'axios'
import Cookie from 'universal-cookie'

const cookie = new Cookie()
function Orders() {
  const [data, setData] = useState([])

  useEffect(() => {
    if (cookie.get("JWT")) {
      const headers = {
        'Authorization': `Bearer ${cookie.get("JWT")}`
      }
      axios.post(process.env.REACT_APP_ipAddress + '/tcf/v1/admin/history-user', {}, { headers: headers }).then((res) => {
        console.log(res.data.History)
        setData(res.data.History)
      }).catch(error => {
        console.log(error)
      })
    }
  }, [])

  let stt = 0
  return (
    <div className='Orders'>
      <h1 className='Title'>Lịch sử đơn hàng</h1>
      <div className='list'>
        <div className='listTitle'>
          <p className='stt'>STT</p>
          <p className='method'>Phương thức thanh toán</p>
          <p className='name'>Tên sản phẩm</p>
          <p className='amount'>Số lượng</p>
          <p className='time'>Thời gian</p>
          <p className='total'>Tổng tiền</p>
        </div>
        <div className='main'>
          {data.length > 0 && data.map((values, index) => (
            <Item key={index}
              stt={++stt}
              method={values.methodDelivery}
              name={values.products}
              quantity={values.products.length}
              date={values.dateOrder}
              total={values.totalPrice}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Orders