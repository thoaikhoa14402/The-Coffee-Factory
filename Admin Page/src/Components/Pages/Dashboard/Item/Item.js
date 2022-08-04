import './Item.css'

import React, { useState } from 'react'

export default function Item(props) {

  const handleSendStage = (data) => {
    props.callback(data)
  }

  return (
    <div className='Item'>
      <p className='id'>{props.id}</p>
      <p className='paymentMethod'>{props.paymentMethod}</p>
      <p className='date'>{props.date}</p>
      <div className='status'>
        {<button className={props.stage}>{props.stage}</button>}
      </div>
      <p className='total'>{props.total}.000đ</p>
      <div className='action'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
        </svg>
        <button className='nextStage' onClick={() => { handleSendStage({ _id: props.id, status: props.stage }) }} >
          Next Stage
        </button>
        <svg onClick={() => { handleSendStage({ _id: props.id, status: 'Cancel' }) }} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
  )
}
