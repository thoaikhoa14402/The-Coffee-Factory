import './PAY_PAGE.css'
import React, { useState, useEffect } from 'react'
import ItemInCart from './ItemInCart/ItemInCart'
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

function PAY_PAGE(props) {
  const [options, setOptions] = useState(1)
  const [method, setMethod] = useState(1)

  const [listProducts, setListProducts] = useState('')
  const [emptyCart, setEmptyCart] = useState(true)

  useEffect(() => {
    if (cookie.get("JWT")) {
      const headers = {
        'Authorization': `Bearer ${cookie.get("JWT")}`
      }
      axios.get(process.env.REACT_APP_ipAddress + '/tcf/v1/cart/getcart', { headers: headers }).then((res) => {
        if (res.data.length > 0) {
          // console.log(res.data)
          localStorage.removeItem('shoppingCart');
          const temp = []
          let sum = 0
          for (let i in res.data[0].products) {
            const child = {
              quantity: res.data[0].products[i].quantity,
              topping: res.data[0].products[i].topping,
              productName: res.data[0].products[i].productName,
              note: res.data[0].products[i].note,
              image: res.data[0].products[i].image,
              price: res.data[0].products[i].price
            }
            temp.push(child)
            sum += temp[i].quantity
          }
          props.setLength(temp.length)
          if (res.data[0].totalPrice > 0) setEmptyCart(false)
          setTotal(res.data[0].totalPrice)
          setListProducts(temp)
          setAmountTotal(sum)
        }
      }).catch(error => {
        console.log(error)
      })
    }
    else {
      if (JSON.parse(localStorage.getItem('shoppingCart'))) {
        const temp = []
        let sum = 0
        for (let i in JSON.parse(localStorage.getItem('shoppingCart')).products) {
          const child = {
            quantity: JSON.parse(localStorage.getItem('shoppingCart')).products[i].quantity,
            topping: JSON.parse(localStorage.getItem('shoppingCart')).products[i].topping,
            productName: JSON.parse(localStorage.getItem('shoppingCart')).products[i].productName,
            note: JSON.parse(localStorage.getItem('shoppingCart')).products[i].note,
            image: JSON.parse(localStorage.getItem('shoppingCart')).products[i].image,
            price: JSON.parse(localStorage.getItem('shoppingCart')).products[i].price
          }
          temp.push(child)
          sum += temp[i].quantity
        }
        props.setLength(temp.length)
        if (JSON.parse(localStorage.getItem('shoppingCart')).totalPrice > 0) setEmptyCart(false)
        setTotal(JSON.parse(localStorage.getItem('shoppingCart')).totalPrice)
        setListProducts(temp)
        setAmountTotal(sum)
      }
    }
  }, [])

  const [total, setTotal] = useState(0)
  const [total2, setTotal2] = useState(0)

  useEffect(() => {
    if (total2 > 0) {
      // console.log(listProducts)
      sendCart(total2)
    }
  }, [total2])

  const [amountTotal, setAmountTotal] = useState(0)

  const handleCallBack1 = (data) => {
    if (!order) {
      setAmountTotal(amountTotal + 1)
      listProducts[data].quantity++
      let topping = 0
      if (listProducts[data].topping === 'Hương Vani' || listProducts[data].topping === 'Hương Hạt Dẻ') topping += 10
      else if (listProducts[data].topping === 'Trân Châu Trắng' || listProducts[data].topping === 'Thạch Cà Phê') topping += 7
      setTotal2((total + 1 * listProducts[data].price.slice(0, -1) + topping))
      setTotal((total + 1 * listProducts[data].price.slice(0, -1) + topping))
      console.log(listProducts)
    }
  }
  const handleCallBack2 = (data) => {
    if (!order) {
      if (amountTotal > 0) {
        if (amountTotal - 1 <= 0) setEmptyCart(true)
        setAmountTotal(amountTotal - 1)
      }
      listProducts[data].quantity--
      if (listProducts[data].quantity <= 0) {
        let temp = []
        for (let i = 0; i < listProducts.length; i++) {
          if (i !== data) {
            temp.push(listProducts[i])
          }
        }
        setListProducts(temp)
        if (!temp || temp.length <= 0) {
          sendCart('')
          props.setLength(0)
        }
        // console.log(temp)
      }
      // else {
      let topping = 0
      if (listProducts[data].topping === 'Hương Vani' || listProducts[data].topping === 'Hương Hạt Dẻ') topping += 10
      else if (listProducts[data].topping === 'Trân Châu Trắng' || listProducts[data].topping === 'Thạch Cà Phê') topping += 7
      setTotal2(total - 1 * listProducts[data].price.slice(0, -1) - topping)
      setTotal(total - 1 * listProducts[data].price.slice(0, -1) - topping)
      // }
    }
  }

  const sendCart = (total2) => {
    // console.log(listCart)
    if (cookie.get("JWT")) {
      const headers = {
        'authorization': `Bearer ${cookie.get("JWT")}`
      }
      let products = []
      for (let i in listProducts) {
        if (listProducts[i].quantity > 0) {
          const object = {
            "productName": listProducts[i].productName,
            "image": listProducts[i].image,
            "quantity": listProducts[i].quantity,
            "topping": listProducts[i].topping,
            "price": listProducts[i].price,
            "note": listProducts[i].note
          }
          products.push(object)
        }
      }
      // console.log('ok')
      const object = { 'products': products, "totalPrice": total2 }
      // console.log(object)
      axios.post(process.env.REACT_APP_ipAddress + '/tcf/v1/cart/shopping-cart', object, { headers: headers }).then((res) => {
        setTotal2(0)
      }).catch(error => {
        console.log(error)
      })
    }
    else {
      let products = []
      for (let i in listProducts) {
        if (listProducts[i].quantity > 0) {
          const object = {
            "productName": listProducts[i].productName,
            "image": listProducts[i].image,
            "quantity": listProducts[i].quantity,
            "topping": listProducts[i].topping,
            "price": listProducts[i].price,
            "note": listProducts[i].note
          }
          products.push(object)
        }
      }
      localStorage.setItem('shoppingCart', JSON.stringify({ products: products, totalPrice: total2 }));
    }
  }

  const [order, setOrder] = useState(false)

  const sendOrder = () => {
    if (!emptyCart) {
      if (!name || !phone || (!address && paymentMethod === "Giao hàng trực tuyến"))
        return alert('Vui lòng nhập đầy đủ thông tin giao hàng để tiếp tục thanh toán.');

      if (!place && paymentMethod !== "Giao hàng trực tuyến")
        return alert('Vui lòng chọn cửa hàng bạn muốn đặt.');

      if ((phone.split('')).length !== 10 || (((phone.split('')).filter((c) => c >= '0' && c <= '9')).join('')) !== phone)
        return alert('Số điện thoại không hợp lệ.');

      if (methodDelivery === 'Thanh toán qua ví momo')
        return alert('Thanh toán qua ví momo chưa hỗ trợ')

      setOrder(true)
      let headers = {};
      if (cookie.get("JWT")) {
        headers = {
          'authorization': `Bearer ${cookie.get("JWT")}`
        }
      }
      let cart = []
      for (let i in listProducts) {
        if (listProducts[i].quantity > 0) {
          const object = {
            "productName": listProducts[i].productName,
            "image": listProducts[i].image,
            "quantity": listProducts[i].quantity,
            "topping": listProducts[i].topping,
            "price": listProducts[i].price,
            "note": listProducts[i].note
          }
          cart.push(object)
        }
      }
      const object = {
        'paymentMethod': paymentMethod,
        'userName': name,
        'phone': phone,
        'address': (paymentMethod !== "Giao hàng trực tuyến") ? place : address,
        'noteAll': note,
        'methodDelivery': methodDelivery,
        'storeLocation': place,
        'promotion': promotion,
        'products': cart,
        'totalPrice': total,
        'userAction': 'order'
      }
      console.log(object)
      axios.post(process.env.REACT_APP_ipAddress + '/tcf/v1/order/orders', object, { headers: headers }).then((res) => {
        // setOrder(true)
        localStorage.removeItem('shoppingCart');
        props.setLength(0);
      }).catch(error => {
        console.log(error)
      })
    }
  }

  const listPlace = [
    '53H Nguyễn Du, Phường Bến Nghé, Quận 1, TP.HCM.',
    '37Bis Mạc Đĩnh Chi, Phường Đa Kao, Quận 1, TP.HCM.',
    '267-269 Lê Thánh Tôn, Phường Bến Thành, Quận 1, TP.HCM.',
    'IMC Tower, 62 Trần Quang Khải, Phường Tân Định, Quận 1, TP.HCM.',
    '107A Trương Định, Phường Võ Thị Sáu, Quận 3, TP.HCM.',
    '45 Tú Xương, Phường Võ Thị Sáu, Quận 3, TP.HCM.',
    'S26-1 Sky Garden, Phường Tân Phong, Quận 7, TP.HCM.',
    '47 Dương Quang Đông, Phường 5, Quận 8, TP.HCM.',
    'Số 1 Ấp Bắc, Phường 13, Quận Tân Bình, TP.HCM.',
    '280A Hòa Bình, Phường Hiệp Tân, Quận Tân Phú, TP.HCM.',
    'Số 6, Đường số 20, Phường Hiệp Bình Chánh, TP. Thủ Đức, TP.HCM.'
  ]

  const [place, setPlace] = useState('')

  const [openList, setOpenList] = useState(false)
  const handleChoosePlace = (data) => {
    setOpenList(false)
    setPlace(data)
  }

  useEffect(() => {
    if (cookie.get("JWT")) {
      const headers = {
        'Authorization': `Bearer ${cookie.get("JWT")}`
      }
      axios.get(process.env.REACT_APP_ipAddress + '/tcf/v1/users/userProfile', { headers: headers }).then((res) => {
        console.log('Successfully!!!')
        setName(res.data.data.user.name)
        setPhone(res.data.data.user.phoneNumber)
        setAddress(res.data.data.user.address)
      }).catch(error => {
        console.log(error)
      })
    }
  }, [])

  const [paymentMethod, setPaymentMethod] = useState('Giao hàng trực tuyến')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [note, setNote] = useState('')
  const [methodDelivery, setMethodDelivery] = useState('Thanh toán khi nhận hàng')
  const [promotion, setPromotion] = useState('Mã khuyến mãi')

  const handleSetPaymentMethod = data => {
    if (!order) {
      setOptions(data)
      if (data === 1) setPaymentMethod('Giao hàng trực tuyến')
      else setPaymentMethod('Nhận trực tiếp tại cửa hàng')
    }
  }
  const enteredName = event => { setName(event.target.value) }
  const enteredPhone = event => { setPhone(event.target.value) }
  const enteredAddress = event => { setAddress(event.target.value) }
  const enteredNote = event => { setNote(event.target.value) }
  const handleSetMethod = data => {
    setMethod(data)
    if (data === 1) setMethodDelivery('Thanh toán khi nhận hàng')
    else setMethodDelivery('Thanh toán qua ví momo')
  }
  const enteredPromotion = event => { setPromotion(event.target.value) }

  return (
    <div className='PAY_PAGE'>
      <div className='onlineDelivery'>
        <button onClick={() => { handleSetPaymentMethod(1); setAddress(''); setNote(''); }}
          className={`onlineDeliveryButton ${options === 2 && 'Choose'}`}>Giao hàng trực tuyến</button>
      </div>
      <div className='atStore'>
        <button onClick={() => { handleSetPaymentMethod(2); setAddress(''); setNote(''); }}
          className={`atStoreButton ${options === 1 && 'Choose'}`}>Nhận trực tiếp tại cửa hàng</button>
      </div>
      <div className='shipDetails'>
        <div className='titleT'>thông tin giao hàng</div>
        <div className='informationT'>
          <div className='in'>
            <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1079_1189)">
                <path d="M6.22255 7.11111C4.26255 7.11111 2.66699 5.51556 2.66699 3.55556C2.66699 1.59556 4.26255 0 6.22255 0C8.18255 0 9.7781 1.59556 9.7781 3.55556C9.7781 5.51556 8.18255 7.11111 6.22255 7.11111ZM6.22255 1.77778C5.24255 1.77778 4.44477 2.57556 4.44477 3.55556C4.44477 4.53556 5.24255 5.33333 6.22255 5.33333C7.20255 5.33333 8.00033 4.53556 8.00033 3.55556C8.00033 2.57556 7.20255 1.77778 6.22255 1.77778Z" fill="black" />
                <path d="M11.5556 16H0.888889C0.397778 16 0 15.6022 0 15.1111V12.4444C0 9.99333 1.99333 8 4.44444 8H8C10.4511 8 12.4444 9.99333 12.4444 12.4444V15.1111C12.4444 15.6022 12.0467 16 11.5556 16ZM1.77778 14.2222H10.6667V12.4444C10.6667 10.9733 9.47111 9.77778 8 9.77778H4.44444C2.97333 9.77778 1.77778 10.9733 1.77778 12.4444V14.2222Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_1079_1189">
                  <rect width="12.4444" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {!order && <input onChange={enteredName} spellCheck='false' className='inputT' value={name} placeholder='Họ và tên người nhận' />}
            {order && <p className='inputTT'>{name}</p>}
          </div>
          <div className='in'>
            <svg width="14" height="15" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.8519 16H10.5926C4.75241 16 0 10.8156 0 4.44444V0.888889C0 0.397778 0.36463 0 0.814815 0H4.88889C5.2637 0 5.58963 0.277777 5.67926 0.673333L6.49407 4.22889C6.58778 4.63333 6.41056 5.05333 6.06833 5.24L4.91333 5.86889C5.14352 8.38222 6.98296 10.3867 9.28685 10.64L9.86333 9.38C10.0344 9.00667 10.4194 8.81333 10.7902 8.91556L14.0494 9.80444C14.412 9.90444 14.6667 10.2578 14.6667 10.6667V15.1111C14.6667 15.6022 14.302 16 13.8519 16ZM1.62963 1.77778V4.44444C1.62963 9.83556 5.65074 14.2222 10.5926 14.2222H13.037V11.36L11.0285 10.8133L10.507 11.9533C10.3685 12.2533 10.0874 12.4444 9.77778 12.4444C6.18241 12.4444 3.25926 9.25333 3.25926 5.33333C3.25926 4.99556 3.43444 4.68889 3.70944 4.53778L4.75444 3.96889L4.25333 1.77778H1.62963Z" fill="black" />
            </svg>
            {!order && <input onChange={enteredPhone} value={phone} spellCheck='false' className='inputT' placeholder='Số điện thoại người nhận' />}
            {order && <p className='inputTT'>{phone}</p>}
          </div>
          {options === 1 && <div className='in'>
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.99995 16C5.79933 16 5.6062 15.914 5.46558 15.76C4.90683 15.152 0 9.724 0 6.4C0 2.872 2.6906 0 5.99995 0C9.3093 0 11.9999 2.872 11.9999 6.4C11.9999 9.724 7.09494 15.152 6.53432 15.76C6.3937 15.914 6.20057 16 5.99995 16ZM5.99995 1.6C3.51935 1.6 1.49999 3.754 1.49999 6.4C1.49999 8.416 4.37996 12.164 5.99995 14.038C7.61994 12.164 10.4999 8.418 10.4999 6.4C10.4999 3.754 8.48055 1.6 5.99995 1.6Z" fill="black" />
              <path d="M5.99997 9.59922C4.34624 9.59922 3 8.16322 3 6.39922C3 4.63522 4.34624 3.19922 5.99997 3.19922C7.65371 3.19922 8.99995 4.63522 8.99995 6.39922C8.99995 8.16322 7.65371 9.59922 5.99997 9.59922ZM5.99997 4.79922C5.17311 4.79922 4.49999 5.51722 4.49999 6.39922C4.49999 7.28122 5.17311 7.99922 5.99997 7.99922C6.82684 7.99922 7.49996 7.28122 7.49996 6.39922C7.49996 5.51722 6.82684 4.79922 5.99997 4.79922Z" fill="black" />
            </svg>
            {!order && <input onChange={enteredAddress} value={address} spellCheck='false' className='inputT' placeholder='Địa chỉ người nhận' />}
            {order && <p className='inputTT'>{address}</p>}
          </div>}
          {options === 1 && <div className='in'>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.855068 16C0.630559 16 0.412465 15.9124 0.249963 15.7499C0.0382835 15.5382 -0.0472436 15.2281 0.0254545 14.9373L0.880726 11.5163C0.919214 11.3666 0.996188 11.2276 1.10524 11.1186L9.65795 2.56584C9.99151 2.23228 10.5325 2.23228 10.8682 2.56584L13.434 5.13166C13.7675 5.46521 13.7675 6.00617 13.434 6.34187L4.88126 14.8946C4.77221 15.0036 4.63323 15.0827 4.48356 15.1191L1.06247 15.9744C0.99405 15.9915 0.92349 16 0.855068 16ZM2.48222 12.1599L2.03107 13.9688L3.83997 13.5155L11.6187 5.73676L10.2631 4.38116L2.48222 12.1599Z" fill="black" />
              <path d="M12.5787 -6.44937e-05L11.3691 1.20947L14.7906 4.63095L16.0002 3.42141L12.5787 -6.44937e-05Z" fill="black" />
            </svg>
            <input onChange={enteredNote} spellCheck='false' className='inputT' placeholder='Ghi chú.......'></input>
            {order && <p className='editNote'>Sửa</p>}
          </div>}
        </div>
        <div className='time'>

        </div>
        {!order && <div className='titleT'>phương thức thanh toán</div>}
        {!order && <div className='method'>
          <div className='receive' onClick={() => handleSetMethod(1)}>
            <svg className={`receiveIcon ${method === 1 && 'chooseIcon'}`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="8" />
            </svg>
            <p>Thanh toán khi nhận hàng</p>
          </div>
          <div className='momo' onClick={() => handleSetMethod(2)}>
            <svg className={`receiveIcon ${method === 2 && 'chooseIcon'}`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="8" />
            </svg>
            <p>Thanh toán qua ví momo</p>
          </div>
        </div>}
      </div>
      <div className='informationLine'>
        {options === 2 && !order && <div className='placeSection'>
          {!order && <div className='titleT'>thông tin đơn hàng</div>}
          <div className='place'>
            <div className='placeForm' onClick={() => setOpenList(!openList)}>
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.8883 9.77762H0.888288C0.626065 9.77762 0.379399 9.66206 0.21051 9.46428C0.0416209 9.26428 -0.0317124 9.00206 0.012732 8.74428L0.899399 3.40873C0.97051 2.97984 1.34162 2.6665 1.77718 2.6665H15.9994C16.435 2.6665 16.8038 2.97984 16.8772 3.40873L17.7661 8.74206C17.8083 8.99984 17.7372 9.26428 17.5683 9.46206C17.3994 9.66206 17.1505 9.77539 16.8905 9.77539L16.8883 9.77762ZM1.93718 7.99984H15.8394L15.2461 4.44428H2.53051L1.93718 7.99984Z" fill="black" />
                <path d="M16.8887 0H0.888672V1.77778H16.8887V0Z" fill="black" />
                <path d="M10.6664 16H1.77756C1.28645 16 0.888672 15.6022 0.888672 15.1111V8.88892H2.66645V14.2222H9.77756V8.88892H11.5553V15.1111C11.5553 15.6022 11.1576 16 10.6664 16Z" fill="black" />
                <path d="M16.8881 8.88892H15.1104V16H16.8881V8.88892Z" fill="black" />
              </svg>
              <div>
                {place === '' && <p>Chọn cửa hàng</p>}
                {place !== '' && <p>{place}</p>}
              </div>
              <svg className='arrow' width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1079_1743)">
                  <path d="M-4.62826e-08 1.05882L1.41177 -4.62826e-07L6 6.11691L10.5882 -6.17102e-08L12 1.05882L6.70588 8.11765C6.53824 8.34044 6.27794 8.47059 6 8.47059C5.72206 8.47059 5.46176 8.34044 5.29412 8.11765L-4.62826e-08 1.05882Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_1079_1743">
                    <rect width="8.47059" height="12" fill="white" transform="translate(12) rotate(90)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            {openList && <div className='listPlace'>
              {listPlace.map((values, index) => (
                <div key={index} className='placeItem' onClick={() => handleChoosePlace(values)}>{values}</div>
              ))}
            </div>}
          </div>
        </div>}
        {order && <div className='titleT'>tình trạng đơn hàng</div>}
        {order && <div className='orderState'>
          <p className='p1'>Bạn đã đặt hàng thành công!</p>
          <p className='p2'>Tài xế sẽ tới trong giây lát nữa . . . . . . .</p>
          <svg width="35" height="35" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 30C6.7275 30 0 23.2725 0 15C0 6.7275 6.7275 0 15 0C23.2725 0 30 6.7275 30 15C30 23.2725 23.2725 30 15 30ZM15 3C8.38125 3 3 8.385 3 15C3 21.615 8.38125 27 15 27C21.6187 27 27 21.615 27 15C27 8.385 21.6187 3 15 3Z" fill="#00B512" />
            <path d="M13.4997 21.0002C13.1172 21.0002 12.731 20.854 12.4385 20.5615L7.93848 16.0615L10.061 13.939L13.4997 17.3777L21.4385 9.43896L23.561 11.5615L14.561 20.5615C14.2685 20.854 13.886 21.0002 13.4997 21.0002Z" fill="#00B512" />
          </svg>

        </div>}
        {!order && <div className='titleT'>giỏ hàng của bạn</div>}
        {order && <div className='titleT'>đơn hàng của bạn</div>}
        {order && options === 2 && <div className='place' style={{ borderBottom: '2px solid #bfbfbf' }}>
          <div className='placeForm' >
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.8883 9.77762H0.888288C0.626065 9.77762 0.379399 9.66206 0.21051 9.46428C0.0416209 9.26428 -0.0317124 9.00206 0.012732 8.74428L0.899399 3.40873C0.97051 2.97984 1.34162 2.6665 1.77718 2.6665H15.9994C16.435 2.6665 16.8038 2.97984 16.8772 3.40873L17.7661 8.74206C17.8083 8.99984 17.7372 9.26428 17.5683 9.46206C17.3994 9.66206 17.1505 9.77539 16.8905 9.77539L16.8883 9.77762ZM1.93718 7.99984H15.8394L15.2461 4.44428H2.53051L1.93718 7.99984Z" fill="black" />
              <path d="M16.8887 0H0.888672V1.77778H16.8887V0Z" fill="black" />
              <path d="M10.6664 16H1.77756C1.28645 16 0.888672 15.6022 0.888672 15.1111V8.88892H2.66645V14.2222H9.77756V8.88892H11.5553V15.1111C11.5553 15.6022 11.1576 16 10.6664 16Z" fill="black" />
              <path d="M16.8881 8.88892H15.1104V16H16.8881V8.88892Z" fill="black" />
            </svg>
            {place !== '' && <p>{place}</p>}
          </div>
          {openList && <div className='listPlace'>
            {listPlace.map((values, index) => (
              <div key={index} className='placeItem' onClick={() => handleChoosePlace(values)}>{values}</div>
            ))}
          </div>}
        </div>}
        <div className='mainT'>
          {emptyCart && <div className='notify'>Giỏ hàng trống? Mời bạn tiếp tục mua hàng</div>}
          {listProducts.length > 0 && listProducts.map((values, index) => (
            <ItemInCart key={index}
              callBack1={handleCallBack1} callBack2={handleCallBack2}
              i={index}
              amount={values.quantity}
              name={values.productName}
              topping={values.topping}
              price={values.price}
              src={values.image}
              note={values.note}
              state={order}
            />
          ))}
        </div>
        <div className='promo'>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.1111 15.9999H0.888889C0.397778 15.9999 0 15.6021 0 15.111V5.33322C0 4.84211 0.397778 4.44434 0.888889 4.44434H15.1111C15.6022 4.44434 16 4.84211 16 5.33322V15.111C16 15.6021 15.6022 15.9999 15.1111 15.9999ZM1.77778 14.2221H14.2222V6.22211H1.77778V14.2221Z" fill="black" />
            <path d="M8.00033 6.22222H5.7781C4.06255 6.22222 2.66699 4.82667 2.66699 3.11111C2.66699 1.39556 4.06255 0 5.7781 0C7.49366 0 8.88921 1.39556 8.88921 3.11111V5.33333C8.88921 5.82444 8.49144 6.22222 8.00033 6.22222ZM5.7781 1.77778C5.04255 1.77778 4.44477 2.37556 4.44477 3.11111C4.44477 3.84667 5.04255 4.44444 5.7781 4.44444H7.11144V3.11111C7.11144 2.37556 6.51366 1.77778 5.7781 1.77778Z" fill="black" />
            <path d="M10.2224 6.22222H8.00022C7.50911 6.22222 7.11133 5.82444 7.11133 5.33333V3.11111C7.11133 1.39556 8.50688 0 10.2224 0C11.938 0 13.3336 1.39556 13.3336 3.11111C13.3336 4.82667 11.938 6.22222 10.2224 6.22222ZM8.88911 4.44444H10.2224C10.958 4.44444 11.5558 3.84667 11.5558 3.11111C11.5558 2.37556 10.958 1.77778 10.2224 1.77778C9.48688 1.77778 8.88911 2.37556 8.88911 3.11111V4.44444Z" fill="black" />
            <path d="M8.88911 4.44434H7.11133V15.111H8.88911V4.44434Z" fill="black" />
          </svg>
          {!order && <input onChange={enteredPromotion} spellCheck='false' className='inputT' placeholder='Mã khuyến mãi' />}
          {order && <p className='inputTT'>{promotion}</p>}
        </div>
        {order && <div className='orderedMethod'>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" fill="#FF0000" />
          </svg>
          <p className='inputTT'>{methodDelivery}</p>
        </div>}
        <div className='titleT'>tổng đơn hàng</div>
        <div className='orderTotal'>
          <div>Số lượng: {amountTotal}</div>
          <div>
            <div className='totalT'>
              <p style={{ marginLeft: '17px' }}>Tổng:</p>
              {listProducts.length > 0 && <p>{total}.000đ</p>}
              {listProducts.length <= 0 && <p>0đ</p>}
            </div>
            <p style={{ marginLeft: '-50px' }}>Phí vận chuyển:</p>
            <p style={{ marginLeft: '-28px' }}>Khuyến mãi:</p>
            <div className='total1'>
              <p style={{ marginLeft: '-33px' }}>Tổng cộng:</p>
              {listProducts.length > 0 && <p style={{ color: 'red' }}>{total}.000đ</p>}
              {listProducts.length <= 0 && <p style={{ color: 'red' }}>0đ</p>}
            </div>
          </div>
        </div>
        {!order && <button onClick={sendOrder} className='orderButton'>đặt hàng</button>}
      </div>
    </div>
  )
}

export default PAY_PAGE