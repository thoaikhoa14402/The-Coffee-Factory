import React, { useEffect, useState } from 'react'
import './Frame.css'
import ToppingItem from './ToppingItem/ToppingItem'
import axios from 'axios'
import Cookie from 'universal-cookie'

const cookie = new Cookie()

export default function FrameEdit(props) {
  const toppings = [
    'Trân Châu Trắng',
    'Thạch Cà Phê',
    'Hương Vani',
    'Hương Hạt Dẻ',
  ]
  const [topping, setTopping] = useState(toppings)

  const arrTemp = []
  for (let i = 0; i < props.data[3].length; i++) {
    arrTemp.push(props.data[3][i])
  }
  const [productName, setProductName] = useState(props.data[0])
  const [type, setType] = useState(props.data[1])
  const [price, setPrice] = useState(props.data[2])
  const [toppingChoose, setToppingChoose] = useState(arrTemp)
  const [img, setImg] = useState(props.data[4]);
  const [imgApi, setImgApi] = useState(props.data[4])
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
    convertToBase64(file).then((data) => {
      // console.log(data)
      setImgApi(data)
    })
  };

  useEffect(() => {
    for (let i in toppingChoose) {
      if (!topping.includes(toppingChoose[i])) {
        setTopping([toppingChoose[i], ...topping])
      }
    }

  }, [])

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

  const handleSetProductName = (e) => {
    setProductName(e.target.value)
  }
  const handleSetType = (e) => {
    setType(e.target.value)
  }
  const handleSetPrice = (e) => {
    setPrice(e.target.value)
  }

  const [newTopping, setNewTopping] = useState('')
  const handleSetTopping = (event) => {
    setNewTopping(event.target.value)
    console.log(toppingChoose)
  }

  const handleAddTopping = (event) => {
    event.preventDefault()
    if (!topping.includes(newTopping)) setTopping([newTopping, ...topping])
  }

  const AddTopping = (data) => {
    if (!toppingChoose.includes(data)) setToppingChoose([...toppingChoose, data])
  }
  const RemoveTopping = (data) => {
    toppingChoose.splice(toppingChoose.indexOf(data), 1)
    setToppingChoose(toppingChoose)
  }



  const [success, setSuccess] = useState(0)
  const [notifi, setNotifi] = useState('')
  const handleSave = () => {
    if (cookie.get("TWJ")) {
      const headers = {
        'Authorization': `Bearer ${cookie.get("TWJ")}`
      }
      const object = {
        title: props.data[1],
        nameProduct: props.data[0],

        nameUpdate: productName,
        priceUpdate: price,
        toppingUpdate: toppingChoose,
        imgUpdate: imgApi
      }
      axios.post(process.env.REACT_APP_ipAddress + '/tcf/v1/admin/update-product', object, { headers: headers }).then((res) => {
        console.log(object)
        res.data.status === 'Success' ? setSuccess(1) : setSuccess(2)
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
      <div className='titleFrame'>Edit Product</div>
      <div className='titlesFrame'>
        <p>Product name</p>
        <p>Type</p>
        <p>Price</p>
        <p>Topping</p>
      </div>
      <input className='input input-1' onChange={handleSetProductName} value={productName} spellCheck='false'></input>
      <input className='input input-2' onChange={handleSetType} value={type} spellCheck='false' ></input>
      <input className='input input-3' onChange={handleSetPrice} value={price} spellCheck='false' ></input>
      <form onSubmit={handleAddTopping} className='toppingFrame'>
        <div className='showTopping'>
          {topping.length > 0 && topping.map((values, index) => (
            (values.length > 0 && <ToppingItem key={`topping_${values}_${index}`} values={values} choose={toppingChoose.includes(values)} callbackAdd={AddTopping} callbackRemove={RemoveTopping} />)
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
      <button className='clear' >Clear</button>
      <button className='save' onClick={handleSave} >Save</button>
      <div onClick={handleExit} className='closeIcon'>
        <svg height={'32px'} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
  )
}
