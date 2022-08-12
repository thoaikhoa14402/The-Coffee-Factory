import './Products.css'

import React, { useState, useEffect } from 'react'
import ItemProduct from './ItemProducts/ItemProducts'
import cafe from '../../../Images/cafe.png'
import tea from '../../../Images/tea.png'
import ice from '../../../Images/ice.png'
import soda from '../../../Images/soda.png'
import cake from '../../../Images/cake.png'
import Frame from './Frame/Frame'
import FrameEdit from './Frame/FrameEdit'
import axios from 'axios'
import Cookie from 'universal-cookie'

const cookie = new Cookie()
export default function Products() {
  let stt = 0
  const [dataS, setData] = useState('')
  useEffect(() => {
    if (cookie.get("TWJ")) {
      const headers = {
        'Authorization': `Bearer ${cookie.get("TWJ")}`
      }
      axios.get(process.env.REACT_APP_ipAddress + '/tcf/v1/products/get-products', { headers: headers }).then((res) => {
        setData(JSON.parse(res.data.data.productData))
        // console.log(JSON.parse(res.data.data.productData))
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


  const [frame, setFrame] = useState(false)
  const [frameEdit, setFrameEdit] = useState(false)
  const [frameItem, setFrameItem] = useState('')
  const handleEdit = (data) => {
    setFrameItem(data)
    setFrameEdit(true)
  }

  const setFrames = () => {
    setFrame(false)
    setFrameEdit(false)
  }

  const handleDelete = (data) => {
    if (cookie.get("TWJ")) {
      const headers = {
        'Authorization': `Bearer ${cookie.get("TWJ")}`
      }
      const object = {
        nameProduct: data[0],
        title: data[1]
      }
      axios.post(process.env.REACT_APP_ipAddress + '/tcf/v1/admin/delete-product', object, { headers: headers }).then((res) => {
        setData(JSON.parse(res.data.data.productData))
        setProductsAmount(JSON.parse(res.data.data.productData))
      }).catch(error => {
        console.log(error)
      })
    }
  }

  const handleAddNew = (data) => {
    setData(data)
    setProductsAmount(data)
  }

  const [dataC, setDataC] = useState('')
  const [all, setAll] = useState(true)
  const [prod, setProd] = useState(0)
  const handleCoffee = () => {
    if (dataS.length > 0) {
      setAll(false)
      setProd(1)
      setDataC([dataS[0], dataS[1]])
    }
  }
  const handleIce = () => {
    if (dataS.length > 0) {
      setAll(false)
      setProd(2)
      setDataC([dataS[2], dataS[4]])
    }
  }
  const handleTea = () => {
    if (dataS.length > 0) {
      setAll(false)
      setProd(3)
      setDataC([dataS[3]])
    }
  }
  const handleSoda = () => {
    if (dataS.length > 0) {
      setAll(false)
      setProd(4)
      setDataC([dataS[5], dataS[6]])
    }
  }
  const handleCake = () => {
    if (dataS.length > 0) {
      setAll(false)
      setProd(5)
      setDataC([dataS[7], dataS[8], dataS[9], dataS[10], dataS[11]])
    }
  }
  const handleAll = () => {
    if (dataS.length > 0) {
      setProd(0)
      setAll(true)
    }
  }

  useEffect(() => {
    if (prod === 0) handleAll()
    else if (prod === 1) handleCoffee()
    else if (prod === 2) handleIce()
    else if (prod === 3) handleTea()
    else if (prod === 4) handleSoda()
    else handleCake()
  }, [dataS])


  return (
    <div className='Products'>
      <div className='productsTitle' onClick={handleAll}>Products Management</div>
      <div className='productsInformation'>
        <div className='pi pi-1' onClick={handleCoffee}>
          <p className='piTitle'>coffee</p>
          <p className='piAmount'>{coffeeAmount}</p>
          <div className='piIcon'>
            <img src={cafe} alt='' />
          </div>
        </div>
        <div className='pi pi-2' onClick={handleIce}>
          <p className='piTitle'>ice blended</p>
          <p className='piAmount'>{iceAmount}</p>
          <div className='piIcon'>
            <img src={ice} alt='' />
          </div>
        </div>
        <div className='pi pi-3' onClick={handleTea}>
          <p className='piTitle'>tea</p>
          <p className='piAmount'>{teaAmount}</p>
          <div className='piIcon'>
            <img src={tea} alt='' />
          </div>
        </div>
        <div className='pi pi-4' onClick={handleSoda}>
          <p className='piTitle'>soda</p>
          <p className='piAmount'>{sodaAmount}</p>
          <div className='piIcon'>
            <img src={soda} alt='' />
          </div>
        </div>

        <div className='pi pi-5' onClick={handleCake}>
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
          <button onClick={() => setFrame(true)}>Add New</button>
        </div>
        <div className='recentOrdersNameProduct'>
          <p className='stt'>#</p>
          <p className='image'>Image</p>
          <p className='productName'>Name</p>
          <p className='type'>Type</p>
          <p className='topping'>Topping</p>
          <p className='price'>Price</p>
          <p className='action'>Action</p>
        </div>
        <div className='mainProduct'>
          {all && dataS.length > 0 && dataS.map((value, indexs) => (
            value.content.map((values, index) => (
              <ItemProduct
                key={index}
                stt={++stt}
                image={value.img[index]}
                productName={value.content[index]}
                type={value.title}
                topping={value.topping[index]}
                price={value.price[index]}
                callback={handleEdit}
                callbackDelete={handleDelete}
              />
            ))
          ))}
          {!all && dataC.length > 0 && dataC.map((value, indexs) => (
            value.content.map((values, index) => (
              <ItemProduct
                key={index}
                stt={++stt}
                image={value.img[index]}
                productName={value.content[index]}
                type={value.title}
                topping={value.topping[index]}
                price={value.price[index]}
                callback={handleEdit}
                callbackDelete={handleDelete}
              />
            ))
          ))}
        </div>
      </div>
      {frame && <div className='float-Frame'>
        <Frame callback={handleAddNew} callExit={setFrames} />
      </div>}
      {frameEdit && <div className='float-Frame'>
        <FrameEdit callback={handleAddNew} callExit={setFrames} data={frameItem} />
      </div>}
      {(frame || frameEdit) && <div onClick={setFrames} className='Overlays' />}

    </div>
  )
}
