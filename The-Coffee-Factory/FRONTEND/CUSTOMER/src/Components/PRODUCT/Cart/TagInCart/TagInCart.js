import { useEffect, useState } from 'react'
import style from './TagInCart.module.css'

export default function TagInCart(props) {
  const sendData1 = (v) => {
    props.callBack1(v)
    setAmount(amount + 1)
  }

  const sendData2 = (v) => {
    if (amount > 1) {
      setAmount(amount - 1)
    }
    props.callBack2(v)
  }

  const [amount, setAmount] = useState(props.amount)
  useEffect(() => {
    setAmount(props.amount)
  }, [props.amount])

  return <div className={style.TagInCart}>
    <p className={style.amount}>x {amount}</p>

    <div className={style.image}>
      <img src={props.src} alt='' />
    </div>
    <div className={style.information + ' ' + (props.topping !== '' && style.haveTopping)}>
      <p className={style.p} style={{ fontWeight: '600' }}>{props.name}</p>
      {props.topping !== '' && <p style={{ fontSize: '8px', marginBottom: '-6px' }}>x1 {props.topping}</p>}
      <p style={{ color: 'red' }}>
        {props.topping !== '' ? (props.topping === 'Hương Vani' || props.topping === 'Hương Hạt Dẻ'
          ? props.price.slice(0, -1) * 1 + 10 : props.price.slice(0, -1) * 1 + 7)
          : props.price.slice(0, -1) * 1
        }.000đ
      </p>
    </div>

    <svg onClick={() => sendData1(props.i)} className={style.add} width="21" height="21" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect className={style.background} x="0.25" y="0.159058" width="24.4091" height="24.4091" rx="12.2045" fill="#FF0000" />
      <rect className={style.ver} x="11.0986" y="5.58325" width="2.71212" height="13.5606" fill="white" />
      <rect className={style.hor} x="19.2349" y="11.0075" width="2.71212" height="13.5606" transform="rotate(90 19.2349 11.0075)" fill="white" />
    </svg>
    <svg onClick={() => sendData2(props.i)} className={style.trash} width="22" height="22" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect className={style.background} x="0.25" y="0.159058" width="24.4091" height="24.4091" rx="12.2045" fill="#BFBFBF" />
      <rect className={style.hor} x="19.2349" y="11.0075" width="2.71212" height="13.5606" transform="rotate(90 19.2349 11.0075)" fill="white" />
    </svg>
  </div>
}