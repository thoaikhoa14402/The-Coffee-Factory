import './Item.css'

import React, { useState } from 'react'

export default function Item(props) {
  const [productN, setProductN] = useState(props.name)
  // console.log(props.name)
  return (
    <div className='Item'>
      <p className='sttItem'>{props.stt}</p>
      <p className='methodItem'>{props.method}</p>
      {/* <p className='nameItem'>{props.name}</p> */}
      <div className='nameItem'>
        {productN.map((values, index) => (
          <p>{values.productName}</p>
        ))}
      </div>
      <p className='amountItem'>{props.quantity}</p>
      <p className='timeItem'>{props.date}</p>
      <p className='totalItem'>{props.total}.000đ</p>
      {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
      </svg> */}
    </div>
  )
}
