import style from './FrameLatte.module.css'
import React, { useState } from 'react'


function FrameLatte(props) {
  const [amount, setAmount] = useState(1)
  const [amount1, setAmount1] = useState(0)
  const [amount2, setAmount2] = useState(0)
  const [topping, setTopping] = useState('')
  const [feeInt, setFeeInt] = useState(amount * props.price.slice(0, -1))

  const [note, setNote] = useState('')

  const handleEnteredNote = (event) => {
    setNote(event.target.value)
  }

  const handleAdd = () => {
    setAmount(amount + 1)
    if (amount1 > 0 || amount2 > 0) {
      setFeeInt((amount + 1) * 10 + (amount + 1) * props.price.slice(0, -1))
    }
    else {
      setFeeInt((amount + 1) * props.price.slice(0, -1))
    }
  }
  const handleSub = () => {
    if (amount > 1) {
      setAmount(amount - 1)
      if (amount1 > 0 || amount2 > 0) {
        setFeeInt(feeInt - props.price.slice(0, -1) - 10)
      }
      else {
        setFeeInt(feeInt - props.price.slice(0, -1))
      }
    }
  }
  const handleAdd1 = () => {
    if (amount1 === 0 && amount2 === 0) setFeeInt(feeInt + 10 * amount)
    setAmount1(1)
    setAmount2(0)
    setTopping('Hương Vani')
  }

  const handleAdd2 = () => {
    if (amount1 === 0 && amount2 === 0) setFeeInt(feeInt + 10 * amount)
    setAmount2(1)
    setAmount1(0)
    setTopping('Hương Hạt Dẻ')
  }


  const pay = (v) => {
    props.callBack(v)
  }

  return <div className={style.FrameLatte}>
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
        <div className={style.choose}>
          <div className={style.title}>
            <p>chọn topping</p>
          </div>
          <div onClick={handleAdd1} style={{ cursor: 'pointer' }} className={(amount1 === 0) ? style.topping : style.toppingAdd}>
            <div className={style.infor}>
              <p className={style.name}>Hương Vani</p>
              <p style={{ fontWeight: '700' }}>+ 10.000đ</p>
            </div>
            <div className={style.add1}>
              <p>1</p>
              {(amount1 === 0) ? <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15C3.36375 15 0 11.6362 0 7.5C0 3.36375 3.36375 0 7.5 0C11.6362 0 15 3.36375 15 7.5C15 11.6362 11.6362 15 7.5 15ZM7.5 1.5C4.19063 1.5 1.5 4.1925 1.5 7.5C1.5 10.8075 4.19063 13.5 7.5 13.5C10.8094 13.5 13.5 10.8075 13.5 7.5C13.5 4.1925 10.8094 1.5 7.5 1.5Z" fill="#BFBFBF" />
                <path d="M11.25 6.75H3.75V8.25H11.25V6.75Z" fill="#BFBFBF" />
                <path d="M8.25 3.75H6.75V11.25H8.25V3.75Z" fill="#BFBFBF" />
              </svg> :
                <svg onClick={handleAdd} style={{ cursor: 'pointer' }} width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.25 19.25C15.3586 19.25 19.5 15.1086 19.5 10C19.5 4.89137 15.3586 0.75 10.25 0.75C5.14137 0.75 1 4.89137 1 10C1 15.1086 5.14137 19.25 10.25 19.25Z" fill="#FF0000" />
                  <path d="M10 20C4.485 20 0 15.515 0 10C0 4.485 4.485 0 10 0C15.515 0 20 4.485 20 10C20 15.515 15.515 20 10 20ZM10 2C5.5875 2 2 5.59 2 10C2 14.41 5.5875 18 10 18C14.4125 18 18 14.41 18 10C18 5.59 14.4125 2 10 2Z" fill="#FF0000" />
                  <path d="M15 9H5V11H15V9Z" fill="white" />
                  <path d="M11 5H9V15H11V5Z" fill="white" />
                </svg>}
            </div>
          </div>

          <div onClick={handleAdd2} style={{ cursor: 'pointer' }} className={(amount2 === 0) ? style.topping : style.toppingAdd}>
            <div className={style.infor}>
              <p className={style.name}>Hương Hạt Dẻ</p>
              <p style={{ fontWeight: '700' }}>+ 10.000đ</p>
            </div>
            <div className={style.add2}>
              <p>1</p>
              {(amount2 === 0) ? <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15C3.36375 15 0 11.6362 0 7.5C0 3.36375 3.36375 0 7.5 0C11.6362 0 15 3.36375 15 7.5C15 11.6362 11.6362 15 7.5 15ZM7.5 1.5C4.19063 1.5 1.5 4.1925 1.5 7.5C1.5 10.8075 4.19063 13.5 7.5 13.5C10.8094 13.5 13.5 10.8075 13.5 7.5C13.5 4.1925 10.8094 1.5 7.5 1.5Z" fill="#BFBFBF" />
                <path d="M11.25 6.75H3.75V8.25H11.25V6.75Z" fill="#BFBFBF" />
                <path d="M8.25 3.75H6.75V11.25H8.25V3.75Z" fill="#BFBFBF" />
              </svg> :
                <svg onClick={handleAdd} style={{ cursor: 'pointer' }} width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.25 19.25C15.3586 19.25 19.5 15.1086 19.5 10C19.5 4.89137 15.3586 0.75 10.25 0.75C5.14137 0.75 1 4.89137 1 10C1 15.1086 5.14137 19.25 10.25 19.25Z" fill="#FF0000" />
                  <path d="M10 20C4.485 20 0 15.515 0 10C0 4.485 4.485 0 10 0C15.515 0 20 4.485 20 10C20 15.515 15.515 20 10 20ZM10 2C5.5875 2 2 5.59 2 10C2 14.41 5.5875 18 10 18C14.4125 18 18 14.41 18 10C18 5.59 14.4125 2 10 2Z" fill="#FF0000" />
                  <path d="M15 9H5V11H15V9Z" fill="white" />
                  <path d="M11 5H9V15H11V5Z" fill="white" />
                </svg>}
            </div>
          </div>
        </div>
        <div className={style.note}>
          <div className={style.title}>
            <p>ghi chú</p>
          </div>
          <textarea onChange={handleEnteredNote} placeholder={"Ghi chú......."} className={style.mainNote}></textarea>
        </div>
      </div>
      <div className={style.section4}>
        <button className={style.pay} onClick={() => pay([feeInt, amount, topping, note])}>{feeInt + '.000'}đ - Thêm vào giỏ hàng</button>
      </div>
    </div>
  </div>
}

export default FrameLatte