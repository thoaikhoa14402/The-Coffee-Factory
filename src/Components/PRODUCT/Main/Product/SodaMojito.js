import '../AllProduct/AllProduct.css'
import Card from './Card/Card'
import { useState } from 'react'
import Frame from '../FrameProduct/Frame/Frame'

import s1 from '../../../../Image/products/4/4.1.1.jpg'
import s2 from '../../../../Image/products/4/4.1.2.jpg'
import s3 from '../../../../Image/products/4/4.1.3.jpg'
import s4 from '../../../../Image/products/4/4.1.4.jpg'
import s5 from '../../../../Image/products/4/4.1.1.jpg'

import m1 from '../../../../Image/products/4/4.2.1.jpg'
import m2 from '../../../../Image/products/4/4.2.2.jpg'
import m3 from '../../../../Image/products/4/4.2.3.jpg'
import m4 from '../../../../Image/products/4/4.2.4.jpg'

export default function SodaMojito(props) {
  const s = [
    {
      src: s1,
      name: 'Sunset',
      price: '49.000'
    }, {
      src: s2,
      name: 'Purple',
      price: '49.000'
    }, {
      src: s3,
      name: 'Chanh',
      price: '49.000'
    },
    {
      src: s4,
      name: 'Bluesky',
      price: '49.000'
    }, {
      src: s5,
      name: 'Blueberry',
      price: '49.000'
    }
  ]

  const m = [
    {
      src: m1,
      name: 'Mojito Vải',
      price: '42.000'
    },
    {
      src: m2,
      name: 'Mojito Đào',
      price: '42.000'
    },
    {
      src: m3,
      name: 'Mojito Chanh Dây',
      price: '42.000'
    },
    {
      src: m4,
      name: 'Mojito Dâu',
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

  return <div className='SodaMojito'>
    <p className='title'>Soda</p>
    <div className='tag s'>
      {s.map((item, index) => (
        <Card key={index} src={item.src} name={item.name} price={item.price} callBack={handleClick} />
      ))}
    </div>
    <p className='title'>Mojito</p>
    <div className='tag m'>
      {m.map((item, index) => (
        <Card key={index} src={item.src} name={item.name} price={item.price} callBack={handleClick} />
      ))}
    </div>
    {(hidden === 1 && information.length !== 0) && <div className='overlay' onClick={() => handleHidden(0)} />}
    {(hidden === 1 && information.length !== 0) && <div className='floatFrame'>
      <Frame callBack={handleCallBack} src={information[0]} name={information[1]} price={information[2]} />
    </div>}
  </div>
}