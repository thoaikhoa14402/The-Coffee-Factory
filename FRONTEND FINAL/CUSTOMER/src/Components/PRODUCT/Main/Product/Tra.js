import '../AllProduct/AllProduct.css'
import Card from './Card/Card'
import FrameTra from '../FrameProduct/FrameTra/FrameTra'
import { useState, useEffect } from 'react'

export default function Tra(props) {

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
  useEffect(() => {
    setObject('')
    for (let i = 0; i < props.dataS.length; i++) {
      if (props.dataS[i].title === "Trà") {
        setObject(props.dataS[i])
      }
    }
  }, [props.dataS])

  if (object)
    return <div className='Tra'>
      <p className='title'>{object.title}</p>
      {object && object.content.length > 0 && <div className='tag t'>
        {object.content.map((item, index) => (
          <Card key={index} src={object.img[index]} name={object.content[index]} price={object.price[index]} callBack={handleClick} />
        ))}
      </div>}
      {(hidden === 1 && information.length !== 0) && <div className='overlay' onClick={() => handleHidden(0)} />}
      {(hidden === 1 && information.length !== 0) && <div className='floatFrame'>
        <FrameTra callBack={handleCallBack} src={information[0]} name={information[1]} price={information[2]} />
      </div>}
    </div>
}