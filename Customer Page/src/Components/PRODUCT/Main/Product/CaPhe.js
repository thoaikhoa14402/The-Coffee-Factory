import '../AllProduct/AllProduct.css'
import { useEffect, useState } from 'react'

import Card from './Card/Card'
import FrameLatte from '../FrameProduct/FrameLatte/FrameLatte'
import Frame from '../FrameProduct/Frame/Frame'

export default function CaPhe(props) {

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
  const [object, setObject] = useState('')
  const [object2, setObject2] = useState('')
  useEffect(() => {
    // if (props.length <= 0) {
    setObject('')
    setObject2('')
    // }
    // else {
    for (let i = 0; i < props.dataS.length; i++) {
      if (props.dataS[i].title === "Cà Phê Việt") {
        setObject(props.dataS[i])
      }
      if (props.dataS[i].title === "Cà Phê Ý") {
        setObject2(props.dataS[i])
      }
      // }
    }
  }, [props.dataS]);
  console.log(object, object2)
  // if (object || object2)
  return <div className='CaPhe'>
    <p className='title'>{object.title}</p>
    {object && object.content.length > 0 && <div className='tag cpv'>
      {object.content.map((item, index) => (
        <Card key={index} src={object.img[index]} name={object.content[index]} price={object.price[index]} callBack={handleClick} />
      ))}
    </div>}
    <p className='title'>{object2.title}</p>
    {object2 && object2.content.length > 0 && <div className='tag cpy'>
      {object2.content.map((item, index) => (
        <Card key={index} src={object2.img[index]} name={object2.content[index]} price={object2.price[index]} callBack={handleClick} />
      ))}
    </div>}
    {(hidden === 1 && information.length !== 0) && <div className='overlay' onClick={() => handleHidden(0)} />}
    {(hidden === 1 && information.length !== 0) && <div className='floatFrame'>
      {(information[1] === 'Mocha' || information[1] === 'Café Latte') &&
        <FrameLatte callBack={handleCallBack} src={information[0]} name={information[1]} price={information[2]} />}
      {(information[1] !== 'Mocha' && information[1] !== 'Café Latte') &&
        <Frame callBack={handleCallBack} src={information[0]} name={information[1]} price={information[2]} />}

    </div>}
  </div>
}