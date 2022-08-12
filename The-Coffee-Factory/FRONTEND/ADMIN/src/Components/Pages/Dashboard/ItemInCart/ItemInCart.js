import { useEffect, useState } from 'react'
import style from './ItemInCart.module.css'

export default function TagInCart(props) {
  const sendAdd = (v) => {
    props.callBack1(v)
  }

  const sendMinus = (v) => {
    props.callBack2(v)
  }
  return <div className={style.ItemInCart}>
    <p className={style.amount}>x {props.amount}</p>

    <div className={style.image}>
      <img src={props.src} alt='' />
    </div>
    <div className={style.information}>
      <p className={style.p} style={{ fontWeight: '600' }}>{props.name}</p>
      {props.topping !== '' && <p style={{ fontSize: '8px', marginTop: '-6px' }}>x1 {props.topping}</p>}
      <p style={{ color: 'red', marginTop: '-5px' }}>
        {props.topping !== '' ? (props.topping === 'Hương Vani' || props.topping === 'Hương Hạt Dẻ'
          ? props.price.slice(0, -1) * 1 + 10 : props.price.slice(0, -1) * 1 + 7)
          : props.price.slice(0, -1) * 1
        }.000đ
      </p>
    </div>

    {!props.state && <svg onClick={() => sendAdd(props.i)} className={style.add} width="21" height="21" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect className={style.background} x="0.25" y="0.159058" width="24.4091" height="24.4091" rx="12.2045" fill="#FF0000" />
      <rect className={style.ver} x="11.0986" y="5.58325" width="2.71212" height="13.5606" fill="white" />
      <rect className={style.hor} x="19.2349" y="11.0075" width="2.71212" height="13.5606" transform="rotate(90 19.2349 11.0075)" fill="white" />
    </svg>}
    {!props.state && <svg onClick={() => sendMinus(props.i)} className={style.reduce} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.875 19.25C15.0527 19.25 19.25 15.0527 19.25 9.875C19.25 4.69733 15.0527 0.5 9.875 0.5C4.69733 0.5 0.5 4.69733 0.5 9.875C0.5 15.0527 4.69733 19.25 9.875 19.25Z" fill="#BFBFBF" />
      <path d="M10 20C4.485 20 0 15.515 0 10C0 4.485 4.485 0 10 0C15.515 0 20 4.485 20 10C20 15.515 15.515 20 10 20ZM10 2C5.5875 2 2 5.59 2 10C2 14.41 5.5875 18 10 18C14.4125 18 18 14.41 18 10C18 5.59 14.4125 2 10 2Z" fill="#BFBFBF" />
      <path d="M15 9H5V11H15V9Z" fill="white" />
    </svg>}
    {!props.state && <svg className={style.note} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.855068 15.9998C0.630559 15.9998 0.412465 15.9121 0.249963 15.7496C0.0382835 15.5379 -0.0472436 15.2279 0.0254545 14.9371L0.880726 11.516C0.919214 11.3663 0.996188 11.2274 1.10524 11.1183L9.65795 2.5656C9.99151 2.23204 10.5325 2.23204 10.8682 2.5656L13.434 5.13141C13.7675 5.46497 13.7675 6.00593 13.434 6.34162L4.88126 14.8943C4.77221 15.0034 4.63323 15.0825 4.48356 15.1188L1.06247 15.9741C0.99405 15.9912 0.92349 15.9998 0.855068 15.9998ZM2.48222 12.1596L2.03107 13.9685L3.83997 13.5152L11.6187 5.73652L10.2631 4.38091L2.48222 12.1596Z" fill="black" />
      <path d="M12.5787 -6.44937e-05L11.3691 1.20947L14.7906 4.63095L16.0002 3.42141L12.5787 -6.44937e-05Z" fill="black" />
    </svg>}
  </div>
}