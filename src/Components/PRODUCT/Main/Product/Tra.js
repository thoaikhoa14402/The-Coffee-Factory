import '../AllProduct/AllProduct.css'
import Card from './Card/Card'
import FrameTra from '../FrameProduct/FrameTra/FrameTra'

import t1 from '../../../../Image/products/3/3.1.1.jpg'
import t2 from '../../../../Image/products/3/3.1.1.jpg'
import t3 from '../../../../Image/products/3/3.1.2.jpg'
import t4 from '../../../../Image/products/3/3.1.3.jpg'
import t5 from '../../../../Image/products/3/3.1.4.jpg'
import t6 from '../../../../Image/products/3/3.1.5.jpg'
import t7 from '../../../../Image/products/3/3.1.1.jpg'
import t8 from '../../../../Image/products/3/3.1.1.jpg'
import { useState } from 'react'

export default function Tra(props) {
  const t = [
    {
      src: t1,
      name: 'Trà Oloong Xoài',
      price: '42.000'
    }, {
      src: t2,
      name: 'Trà Oloong Thơm',
      price: '42.000'
    }, {
      src: t3,
      name: 'Trà Hibicus Lựu Đỏ',
      price: '42.000'
    }, {
      src: t4,
      name: 'Trà Dưa Hấu Vải',
      price: '42.000'
    }, {
      src: t5,
      name: 'Trà Đào',
      price: '42.000'
    },
    {
      src: t6,
      name: 'Trà Táo',
      price: '42.000'
    },
    {
      src: t7,
      name: 'Trà Vải',
      price: '42.000'
    },
    {
      src: t8,
      name: 'Trà Nha Đam Vải',
      price: '42.000'
    }
  ]

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

  return <div className='Tra'>
    <p className='title'>Trà</p>
    <div className='tag t'>
      {t.map((item, index) => (
        <Card key={index} src={item.src} name={item.name} price={item.price} callBack={handleClick} />
      ))}
    </div>
    {(hidden === 1 && information.length !== 0) && <div className='overlay' onClick={() => handleHidden(0)} />}
    {(hidden === 1 && information.length !== 0) && <div className='floatFrame'>
      <FrameTra callBack={handleCallBack} src={information[0]} name={information[1]} price={information[2]} />
    </div>}
  </div>
}