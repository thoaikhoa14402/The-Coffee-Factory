import '../AllProduct/AllProduct.css'
import Card from './Card/Card'
import { useState } from 'react'
import Frame from '../FrameProduct/Frame/Frame'

import dx1 from '../../../../Image/products/2/2.1.1.jpg'
import dx2 from '../../../../Image/products/2/2.1.1.jpg'
import dx3 from '../../../../Image/products/2/2.1.1.jpg'
import dx4 from '../../../../Image/products/2/2.1.1.jpg'
import dx5 from '../../../../Image/products/2/2.1.2.jpg'
import dx6 from '../../../../Image/products/2/2.1.3.jpg'
import dx7 from '../../../../Image/products/2/2.1.4.jpg'
import dx8 from '../../../../Image/products/2/2.1.4.jpg'
import dx9 from '../../../../Image/products/2/2.1.5.jpg'
import dx10 from '../../../../Image/products/2/2.1.4.jpg'
import dx11 from '../../../../Image/products/2/2.1.6.jpg'

import ydx1 from '../../../../Image/products/2/2.2.1.jpg'
import ydx2 from '../../../../Image/products/2/2.2.2.jpg'
import ydx3 from '../../../../Image/products/2/2.2.3.jpg'

export default function DaXay(props) {
  const dx = [
    {
      src: dx1,
      name: 'Caramel',
      price: '45.000'
    },
    {
      src: dx2,
      name: 'Hạt Dẻ',
      price: '45.000'
    },
    {
      src: dx3,
      name: 'Vanalia',
      price: '45.000'
    }, {
      src: dx4,
      name: 'Mocha',
      price: '45.000'
    }, {
      src: dx5,
      name: 'Socola',
      price: '45.000'
    }, {
      src: dx6,
      name: 'Oreo Cookie',
      price: '52.000'
    },
    {
      src: dx7,
      name: 'Chocolate Caramel',
      price: '52.000'
    },
    {
      src: dx8,
      name: 'Chocolate Mint',
      price: '52.000'
    },
    {
      src: dx9,
      name: 'Chanh Đá Xay',
      price: '39.000'
    }, {
      src: dx10,
      name: 'Cacao Đá Xay',
      price: '59.000'
    }, {
      src: dx11,
      name: 'Christmas Pie',
      price: '45.000'
    }
  ]

  const ydx = [
    {
      src: ydx1,
      name: 'Dâu',
      price: '49.000'
    },
    {
      src: ydx2,
      name: 'Dâu Việt Quất',
      price: '49.000'
    },
    {
      src: ydx3,
      name: 'Việt Quất',
      price: '49.000'
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

  return <div className='DaXay'>
    <p className='title'>Đá Xay</p>
    <div className='tag dx'>
      {dx.map((item, index) => (
        <Card key={index} src={item.src} name={item.name} price={item.price} callBack={handleClick} />
      ))}
    </div>
    <p className='title'>Yogurt Đá Xay</p>
    <div className='tag ydx'>
      {ydx.map((item, index) => (
        <Card key={index} src={item.src} name={item.name} price={item.price} callBack={handleClick} />
      ))}
    </div>
    {(hidden === 1 && information.length !== 0) && <div className='overlay' onClick={() => handleHidden(0)} />}
    {(hidden === 1 && information.length !== 0) && <div className='floatFrame'>
      <Frame callBack={handleCallBack} src={information[0]} name={information[1]} price={information[2]} />
    </div>}
  </div>
}