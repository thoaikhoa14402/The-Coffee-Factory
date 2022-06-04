import { useState } from 'react'
import style from './SideBar.module.css'

export default function SideBar(props) {
  const CaPhe = ['Cà Phê Việt', 'Cà Phê Ý']
  const DaXay = ['Đá Xay', 'Yogurt Đá Xay']
  const Tra = ['Trà', 'Trà Sữa', 'TCF Kem Muối']
  // const SodaMojito = ['Soda', 'Mojito']
  const MonKhac = ['Detox', 'Nước Ép', 'Cacao']
  const TCFCake = ['Bánh Mì', 'Bánh Ngọt', 'Cheesecake & Tiramisu', 'FLan & Yogurt']

  const [click, setClick] = useState(0)
  const sendData = (v) => {
    props.callBack(v)
    setClick(v)
  }

  return <div className={style.SideBar + ' ' + props.className}>
    <div onClick={() => sendData(1)} className={style.section + ' ' + ((click === 1) && style.choose)} >
      <h3 className={style.title} >Cà Phê</h3>
      {CaPhe.map((item, index) => (
        <p key={index} className={style.item}>{item}</p>
      ))}
    </div>

    <div className={style.section + ' ' + ((click === 2) && style.choose)} onClick={() => sendData(2)}>
      <h3 className={style.title} >Đá Xay</h3>
      {DaXay.map((item, index) => (
        <p key={index} className={style.item}>{item}</p>
      ))}
    </div>

    <div className={style.section + ' ' + ((click === 3) && style.choose)} onClick={() => sendData(3)}>
      <h3 className={style.title} >Trà</h3>
      {Tra.map((item, index) => (
        <p key={index} className={style.item}>{item}</p>
      ))}
    </div>

    <div className={style.section + ' ' + ((click === 4) && style.choose)} onClick={() => sendData(4)}>
      <h3 className={style.title4} >Soda & Mojito</h3>
      {/* {SodaMojito.map((item, index) => (
      <p key={index} className={style.item}>{item}</p>
    ))} */}
    </div>

    <div className={style.section + ' ' + ((click === 5) && style.choose)} onClick={() => sendData(5)}>
      <h3 className={style.title4} >Matcha</h3>
    </div>

    <div className={style.section + ' ' + ((click === 6) && style.choose)} onClick={() => sendData(6)}>
      <h3 className={style.title} >Món Khác</h3>
      {MonKhac.map((item, index) => (
        <p key={index} className={style.item}>{item}</p>
      ))}
    </div>

    <div className={style.section + ' ' + ((click === 7) && style.choose)} onClick={() => sendData(7)}>
      <h3 className={style.title} >TCF Cake</h3>
      {TCFCake.map((item, index) => (
        <p key={index} className={style.item}>{item}</p>
      ))}
    </div>
  </div>
}