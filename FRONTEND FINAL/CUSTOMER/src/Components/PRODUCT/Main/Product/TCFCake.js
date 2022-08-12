import '../AllProduct/AllProduct.css'
import Card from './Card/Card'
import { useState, useEffect } from 'react'
import Frame from '../FrameProduct/Frame/Frame'

export default function TCFCake(props) {

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
  const [object3, setObject3] = useState('')
  const [object4, setObject4] = useState('')
  const [object5, setObject5] = useState('')
  useEffect(() => {
    // if (props.dataS.length <= 0) {
    setObject('')
    setObject2('')
    setObject3('')
    setObject4('')
    setObject5('')
    // }
    for (let i = 0; i < props.dataS.length; i++) {
      if (props.dataS[i].title === "Bánh Mì") {
        setObject(props.dataS[i])
      }
      if (props.dataS[i].title === "Bánh Ngọt") {
        setObject2(props.dataS[i])
      }
      if (props.dataS[i].title === "Cheesecake") {
        setObject3(props.dataS[i])
      }
      if (props.dataS[i].title === "Flan & Yogurt" && props.dataS[i].hiddenTitle == 'false') {
        setObject4(props.dataS[i])
      }
      if (props.dataS[i].title === "Flan & Yogurt " && props.dataS[i].hiddenTitle == 'true') {
        setObject5(props.dataS[i])
      }
    }
  }, [props.dataS])

  // if (object || object2 || object3 || object4 || object5)
  return <div className='TCFCake'>
    <p className='title'>{object.title}</p>
    {object && object.content.length > 0 && <div className='tag bm'>
      {object.content.map((item, index) => (
        <Card key={index} src={object.img[index]} name={object.content[index]} price={object.price[index]} callBack={handleClick} />
      ))}
    </div>}

    <p className='title'>{object2.title}</p>
    {object2 && object2.content.length > 0 && <div className='tag bn'>
      {object2.content.map((item, index) => (
        <Card key={index} src={object2.img[index]} name={object2.content[index]} price={object2.price[index]} callBack={handleClick} />
      ))}
    </div>}

    <p className='title'>{object3.title}</p>
    {object3 && object3.content.length > 0 && <div className='tag c'>
      {object3.content.map((item, index) => (
        <Card key={index} src={object3.img[index]} name={object3.content[index]} price={object3.price[index]} callBack={handleClick} />
      ))}
    </div>}

    <p className='title'>{object4.title}</p>
    {object4 && object4.content.length > 0 && <div className='tag f'>
      {object4.content.map((item, index) => (
        <Card key={index} src={object4.img[index]} name={object4.content[index]} price={object4.price[index]} callBack={handleClick} />
      ))}
    </div>}

    {object5 && object5.content.length > 0 && <div className='tag y'>
      {object5.content.map((item, index) => (
        <Card key={index} src={object5.img[index]} name={object5.content[index]} price={object5.price[index]} callBack={handleClick} />
      ))}
    </div>
    }
    {(hidden === 1 && information.length !== 0) && <div className='overlay' onClick={() => handleHidden(0)} />}
    {(hidden === 1 && information.length !== 0) && <div className='floatFrame'>
      <Frame callBack={handleCallBack} src={information[0]} name={information[1]} price={information[2]} />
    </div>}
  </div>
}