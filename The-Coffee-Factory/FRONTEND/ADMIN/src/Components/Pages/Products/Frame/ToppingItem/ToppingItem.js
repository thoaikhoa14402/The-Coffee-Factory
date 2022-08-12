import React, { useState, useEffect } from 'react'
import './ToppingItem.css'

export default function ToppingItem(props) {
  const [add, setAdd] = useState(props.choose)
  console.log(props.values, props.choose)
  const handleSetAdd = () => {
    // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    if (!add) props.callbackAdd(props.values)
    else props.callbackRemove(props.values)
    setAdd(!add)
  }

  return (
    (props.values.length > 0) && <div className={`toppingsItem ${props.index % 2 === 0 && 'toppingsItems'}`}>
      <span>{props.values}</span>
      {!add && <svg onClick={handleSetAdd} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.25 19.25C15.3586 19.25 19.5 15.1086 19.5 10C19.5 4.89137 15.3586 0.75 10.25 0.75C5.14137 0.75 1 4.89137 1 10C1 15.1086 5.14137 19.25 10.25 19.25Z" fill="#000000" />
        <path d="M10 20C4.485 20 0 15.515 0 10C0 4.485 4.485 0 10 0C15.515 0 20 4.485 20 10C20 15.515 15.515 20 10 20ZM10 2C5.5875 2 2 5.59 2 10C2 14.41 5.5875 18 10 18C14.4125 18 18 14.41 18 10C18 5.59 14.4125 2 10 2Z" fill="#000000" />
        <path d="M15 9H5V11H15V9Z" fill="white" />
        <path d="M11 5H9V15H11V5Z" fill="white" />
      </svg>}
      {add && <svg onClick={handleSetAdd} width="20" height="20" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 80C17.94 80 0 62.06 0 40C0 17.94 17.94 0 40 0C62.06 0 80 17.94 80 40C80 62.06 62.06 80 40 80ZM40 8C22.35 8 8 22.36 8 40C8 57.64 22.35 72 40 72C57.65 72 72 57.64 72 40C72 22.36 57.65 8 40 8Z" fill="#000000" />
        <path d="M35.9999 56C34.9799 56 33.9499 55.61 33.1699 54.83L21.1699 42.83L26.8299 37.17L35.9999 46.34L57.1699 25.17L62.8299 30.83L38.8299 54.83C38.0499 55.61 37.0299 56 35.9999 56Z" fill="#000000" />
      </svg>}
    </div>
  )
}
