import style from './Frame.module.css'

import React, { useState } from 'react'


function Frame(props) {

  const [amount, setAmount] = useState(1)
  const [feeInt, setFeeInt] = useState(amount * props.price.slice(0, -1))
  const [note,setNote] = useState('')

  const handleEnteredNote = (event) =>{
    setNote(event.target.value)
  }

  const handleAdd = () => {
    setAmount(amount + 1)
    setFeeInt((amount + 1) * props.price.slice(0, -1))
  }
  const handleSub = () => {
    if (amount > 1) {
      setAmount(amount - 1)
      setFeeInt(feeInt - props.price.slice(0, -1))
    }
  }

  const pay = (v) => {
    props.callBack(v)
  }

  return <div className={style.Frame}>
    <div className={style.image}>
      <img src={props.src} alt='' />
    </div>
    <div className={style.information}>
      <div className={style.section1}>
        {props.name}
      </div>
      <div className={style.section2}>
        <p style={{ color: 'red' }} className={style.price}>{props.price}</p>
        <svg onClick={handleSub} style={{ cursor: 'pointer' }} width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.875 19.25C15.0527 19.25 19.25 15.0527 19.25 9.875C19.25 4.69733 15.0527 0.5 9.875 0.5C4.69733 0.5 0.5 4.69733 0.5 9.875C0.5 15.0527 4.69733 19.25 9.875 19.25Z" fill="#BFBFBF" />
          <path d="M10 20C4.485 20 0 15.515 0 10C0 4.485 4.485 0 10 0C15.515 0 20 4.485 20 10C20 15.515 15.515 20 10 20ZM10 2C5.5875 2 2 5.59 2 10C2 14.41 5.5875 18 10 18C14.4125 18 18 14.41 18 10C18 5.59 14.4125 2 10 2Z" fill="#BFBFBF" />
          <path d="M15 9H5V11H15V9Z" fill="white" />
        </svg>
        <p className={style.amount}>{amount}</p>
        <svg onClick={handleAdd} style={{ cursor: 'pointer' }} width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.25 19.25C15.3586 19.25 19.5 15.1086 19.5 10C19.5 4.89137 15.3586 0.75 10.25 0.75C5.14137 0.75 1 4.89137 1 10C1 15.1086 5.14137 19.25 10.25 19.25Z" fill="#FF0000" />
          <path d="M10 20C4.485 20 0 15.515 0 10C0 4.485 4.485 0 10 0C15.515 0 20 4.485 20 10C20 15.515 15.515 20 10 20ZM10 2C5.5875 2 2 5.59 2 10C2 14.41 5.5875 18 10 18C14.4125 18 18 14.41 18 10C18 5.59 14.4125 2 10 2Z" fill="#FF0000" />
          <path d="M15 9H5V11H15V9Z" fill="white" />
          <path d="M11 5H9V15H11V5Z" fill="white" />
        </svg>

      </div>
      <div className={style.section3}>
        <div className={style.note}>
          <div className={style.title}>
            <p>ghi chú</p>
          </div>
          <textarea onChange={handleEnteredNote} placeholder={"Ghi chú......."} className={style.mainNote} spellCheck={false}></textarea>
        </div>
      </div>
      <div className={style.section4}>
        <button onClick={() => pay([feeInt, amount, '',note])} className={style.pay}>{feeInt + '.000'}đ - Thêm vào giỏ hàng</button>
      </div>
    </div>
  </div>
}

export default Frame