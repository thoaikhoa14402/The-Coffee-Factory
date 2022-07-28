import './Products.css'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ItemProduct from './ItemProducts/ItemProducts'
import cafe from '../../../Images/cafe.png'
import tea from '../../../Images/tea.png'
import ice from '../../../Images/ice.png'
import soda from '../../../Images/soda.png'
import cake from '../../../Images/cake.png'
import Cookie from 'universal-cookie'

const cookie = new Cookie()
export default function Products() {
  let stt = 0
  const [dataS, setData] = useState('')
  useEffect(() => {
    if (cookie.get("JWT")) {
      const headers = {
        'Authorization': `Bearer ${cookie.get("JWT")}`
      }
      axios.get(process.env.REACT_APP_IPADDRESS + '/tcf/v1/products/get-products', { headers: headers }).then((res) => {
        setData(JSON.parse(res.data.data.productData))
        console.log(JSON.parse(res.data.data.productData))
        setProductsAmount(JSON.parse(res.data.data.productData))
      }).catch(error => {
        console.log(error)
      })
    }
  }, [])


  const [coffeeAmount, setCoffeeAmount] = useState(0)
  const [iceAmount, setIceAmount] = useState(0)
  const [teaAmount, setTeaAmount] = useState(0)
  const [sodaAmount, setSodaAmount] = useState(0)
  const [cakeAmount, setCakeAmount] = useState(0)

  const setProductsAmount = (data) => {
    setCoffeeAmount(data[0].content.length + data[1].content.length)
    setIceAmount(data[2].content.length + data[4].content.length)
    setTeaAmount(data[3].content.length)
    setSodaAmount(data[5].content.length + data[6].content.length)
    setCakeAmount(data[7].content.length + data[8].content.length + data[10].content.length + data[9].content.length + data[11].content.length)
  }

  return (
    <div className='Products'>
      <div className='productsTitle'>Products Management</div>
      <div className='productsInformation'>

        <div className='pi pi-1'>
          <p className='piTitle'>coffee</p>
          <p className='piAmount'>{coffeeAmount}</p>
          <div className='piIcon'>
            <img src={cafe} alt='' />
          </div>
        </div>
        <div className='pi pi-2'>
          <p className='piTitle'>ice blended</p>
          <p className='piAmount'>{iceAmount}</p>
          <div className='piIcon'>
            <img src={ice} alt='' />
          </div>
        </div>
        <div className='pi pi-3'>
          <p className='piTitle'>tea</p>
          <p className='piAmount'>{teaAmount}</p>
          <div className='piIcon'>
            <img src={tea} alt='' />
          </div>
        </div>
        <div className='pi pi-4'>
          <p className='piTitle'>soda</p>
          <p className='piAmount'>{sodaAmount}</p>
          <div className='piIcon'>
            <img src={soda} alt='' />
          </div>
        </div>

        <div className='pi pi-5'>
          <p className='piTitle'>cake</p>
          <p className='piAmount'>{cakeAmount}</p>
          <div className='piIcon'>
            <img src={cake} alt='' />
          </div>
        </div>
      </div>
      <div className='recentOrdersProducts'>
        <div className='recentOrdersTitleProducts'>
          <p>Products</p>
          <button>Add New</button>
        </div>
        <div className='recentOrdersNameProduct'>
          <p className='stt'>STT</p>
          <p className='image'>Image</p>
          <p className='productName'>Product Name</p>
          <p className='type'>Type</p>
          <p className='topping'>Topping</p>
          <p className='price'>Price</p>
          <p className='action'>Action</p>
        </div>
        <div className='mainProduct'>
          {dataS.length > 0 && dataS.map((value, indexs) => (
            value.content.map((values, index) => (
              <ItemProduct key={index}
                // stt={indexs > 0 ? (dataS[indexs - 1].content.length + index + 1) : index + 1}
                stt={++stt}
                image={value.img[index]}
                productName={value.content[index]}
                type={value.title}
                topping={value.topping[index]}
                price={value.price[index]}
              />
            ))
          ))}
        </div>
      </div>
    </div>
  )
}
