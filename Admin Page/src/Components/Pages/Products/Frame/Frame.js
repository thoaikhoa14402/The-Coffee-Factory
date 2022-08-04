import React, { useState, useEffect } from 'react'
import './Frame.css'
import ToppingItem from './ToppingItem/ToppingItem'
import axios from 'axios'
import Cookie from 'universal-cookie'

const cookie = new Cookie()
export default function Frame(props) {

  const toppings = [
    'Trân Châu Trắng',
    'Thạch Cà Phê',
    'Hương Vani',
    'Hạt Dẻ',
  ]

  const [productName, setProductName] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const [topping, setTopping] = useState(toppings)
  const [img, setImg] = useState();
  const [imgApi, setImgApi] = useState('')
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
    convertToBase64(file).then((data) => {
      // console.log(data)
      setImgApi(data)
    })
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const [newTopping, setNewTopping] = useState('')
  const handleSetTopping = (event) => {
    setNewTopping(event.target.value)
  }

  const handleAddTopping = (event) => {
    event.preventDefault()
    setTopping([newTopping, ...topping])
  }

  const [toppingChoose, setToppingChoose] = useState([])
  const AddTopping = (data) => {
    if (!toppingChoose.includes(data)) setToppingChoose([...toppingChoose, data])
  }
  const RemoveTopping = (data) => {
    toppingChoose.splice(toppingChoose.indexOf(data), 1)
    setToppingChoose(toppingChoose)
  }

  const handleClear = () => {
    setToppingChoose([])
    setProductName('')
    setType('')
    setPrice('')
    setImg('')
  }
  const handleSetProductName = (e) => {
    setProductName(e.target.value)
  }
  const handleSetType = (e) => {
    setType(e.target.value)
  }
  const handleSetPrice = (e) => {
    setPrice(e.target.value)
  }

  const [success, setSuccess] = useState(0)
  const [notifi, setNotifi] = useState('')
  const handleSave = () => {
    if (cookie.get("JWT")) {
      const headers = {
        'Authorization': `Bearer ${cookie.get("JWT")}`
      }

      const object = {
        nameProduct: productName,
        title: type,
        priceProduct: price,
        topping: toppingChoose,
        img: imgApi
      }
      axios.post(process.env.REACT_APP_ipAddress + '/tcf/v1/admin/create-product', object, { headers: headers }).then((res) => {
        res.data.status === 'Product has been added' ? setSuccess(1) : setSuccess(2)
        setNotifi(res.data.status)
        props.callback(JSON.parse(res.data.data.productData))
      }).catch(error => {
        console.log(error)
      })
    }
  }

  const handleExit = () => {
    props.callExit(1)
  }

  return (
    <div className='Frame'>
      <div className='titleFrame'>Add Product</div>
      <div className='titlesFrame'>
        <p>Product name</p>
        <p>Type</p>
        <p>Price</p>
        <p>Topping</p>
      </div>
      <input className='input input-1' onChange={handleSetProductName} spellCheck='false' value={productName} />
      <input className='input input-2' onChange={handleSetType} spellCheck='false' value={type} />
      <input className='input input-3' onChange={handleSetPrice} spellCheck='false' value={price} />
      <form onSubmit={handleAddTopping} className='toppingFrame'>
        <div className='showTopping'>
          {topping.map((values, index) => (
            <ToppingItem values={values} index={index} clear={toppingChoose} callbackAdd={AddTopping} callbackRemove={RemoveTopping} />
          ))}
        </div>
        <input onChange={handleSetTopping} className='addNewInput' placeholder='Add new topping' spellCheck='false'></input>
      </form>
      <div className='imageProduct'>
        <div className='images'>
          <img src={img} alt='' />
        </div>
        <label for='choosefile' className='chooseFile'>Choose file</label>
        <input hidden id='choosefile' type='file' onChange={onImageChange} />
      </div>
      {(success === 1 || success === 2) && <p className={`notifi ${success === 2 && 'notifib'}`}>{notifi}</p>}
      <button className='clear' onClick={handleClear}>Clear</button>
      <button className='save' onClick={handleSave}>Save</button>
      <div onClick={handleExit} className='closeIcon'>
        <svg height={'32px'} xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
  )
}
