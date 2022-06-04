import '../AllProduct/AllProduct.css'
import Card from './Card/Card'
import { useState } from 'react'
import Frame from '../FrameProduct/Frame/Frame'

import bm1 from '../../../../Image/products/7/7.1.1.jpg'
import bm2 from '../../../../Image/products/7/7.1.2.jpg'

import bn1 from '../../../../Image/products/7/7.2.1.jpg'
import bn2 from '../../../../Image/products/7/7.2.2.jpg'

import c1 from '../../../../Image/products/7/7.3.1.jpg'
import c2 from '../../../../Image/products/7/7.3.2.jpg'
import c3 from '../../../../Image/products/7/7.3.3.jpg'
import c4 from '../../../../Image/products/7/7.3.4.jpg'
import c5 from '../../../../Image/products/7/7.3.5.jpg'
import c6 from '../../../../Image/products/7/7.3.6.jpg'
import c7 from '../../../../Image/products/7/7.3.7.jpg'
import c8 from '../../../../Image/products/7/7.3.8.jpg'

import f1 from '../../../../Image/products/7/7.4.1.jpg'
import f2 from '../../../../Image/products/7/7.4.2.jpg'
import f3 from '../../../../Image/products/7/7.4.3.jpg'
import f4 from '../../../../Image/products/7/7.4.4.jpg'

export default function TCFCake(props) {

  const bm = [{
    src: bm1,
    name: 'Bánh Mì Thịt Nguội Phô Mai',
    price: '39.000'
  }, {
    src: bm2,
    name: 'Bánh Mì Kẹp Cá Ngừ',
    price: '39.000'
  }
  ]

  const bn = [{
    src: bn1,
    name: 'Bánh Bắp',
    price: '20.000'
  }, {
    src: bn2,
    name: 'Bánh Chuối',
    price: '20.000'
  }]

  const c = [
    {
      src: c1,
      name: 'Passion Cheesecake',
      price: '29.000'
    },
    {
      src: c2,
      name: 'Japanese Cheesecake',
      price: '29.000'
    }, {
      src: c3,
      name: 'Chocomint Cake',
      price: '29.000'
    }, {
      src: c4,
      name: 'Opera Cake',
      price: '29.000'
    }, {
      src: c5,
      name: 'Blueberry Cheesecake',
      price: '29.000'
    }, {
      src: c6,
      name: 'Oreo Cheesecake',
      price: '29.000'
    }, {
      src: c7,
      name: 'Matcha Cheesecake',
      price: '29.000'
    }, {
      src: c8,
      name: 'Tiramisu',
      price: '29.000'
    }
  ]

  const f = [{
    src: f1,
    name: 'Flan Gateau',
    price: '29.000'
  }, {
    src: f2,
    name: 'Flan Caramel',
    price: '20.000'
  }, {
    src: f3,
    name: 'Yogurt Nếp Cẩm',
    price: '20.000'
  }, {
    src: f4,
    name: 'Yogurt',
    price: '15.000'
  }]

  const [information, setInformation] = useState([])

  const handleClick = (data) => {
    setInformation(data)
    setHidden(1)
  }

  const [hidden, setHidden] = useState(1)
  const handleHidden = (a) => {
    setHidden(a)
  }

  // ======================================
  const handleCallBack = (data) => {
    setHidden(0)
    props.callBack([...data, information[0], information[1], information[2]])
  }
  // ======================================

  return <div className='TCFCake'>
    <p className='title'>Bánh Mì</p>
    <div className='tag bm'>
      {bm.map((item, index) => (
        <Card key={index} src={item.src} name={item.name} price={item.price} callBack={handleClick} />
      ))}
    </div>
    <p className='title'>Bánh Ngọt</p>
    <div className='tag bn'>
      {bn.map((item, index) => (
        <Card key={index} src={item.src} name={item.name} price={item.price} callBack={handleClick} />
      ))}
    </div>
    <p className='title'>Cheesecake</p>
    <div className='tag c'>
      {c.map((item, index) => (
        <Card key={index} src={item.src} name={item.name} price={item.price} callBack={handleClick} />
      ))}
    </div>
    <p className='title'>Flan & Yogurt</p>
    <div className='f'>
      {f.map((item, index) => (
        <Card key={index} src={item.src} name={item.name} price={item.price} callBack={handleClick} />
      ))}
    </div>
    {(hidden === 1 && information.length !== 0) && <div className='overlay' onClick={() => handleHidden(0)} />}
    {(hidden === 1 && information.length !== 0) && <div className='floatFrame'>
      <Frame callBack={handleCallBack} src={information[0]} name={information[1]} price={information[2]} />
    </div>}
  </div>
}