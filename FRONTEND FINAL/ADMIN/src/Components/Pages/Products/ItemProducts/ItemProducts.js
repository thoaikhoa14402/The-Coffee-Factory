import './ItemProducts.css'

import React, { useState } from 'react'

export default function ItemProduct(props) {
  const handleEdit = () => {
    props.callback([props.productName, props.type, props.price, props.topping, props.image])
  }

  const handleDelete = () => {
    props.callbackDelete([props.productName, props.type])
  }
  return (
    <div className='ItemProducts'>
      <p className='stt'>{props.stt}</p>
      <div className='img'>
        <img alt='' src={props.image}></img>
      </div>
      <p className='name'>{props.productName}</p>
      <p className='type'>{props.type}</p>
      <div className='topping'>
        {props.topping.length > 0 && props.topping.map((values, index) => (
          <span key={index} className='toppingItem'>{values}</span>
        ))}
      </div>
      <p className='price'>{props.price}</p>
      <div className='action'>
        <svg onClick={handleEdit} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        <svg onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </div>
    </div>
  )
}
