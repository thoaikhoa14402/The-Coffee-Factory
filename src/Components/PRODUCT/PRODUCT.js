import './PRODUCT.css';
import SideBar from './SideBar/SideBar'
import Main from './Main/Main';
import Cart from './Cart/Cart'
import { useState } from 'react';

export default function PRODUCT() {
  const [click, setClick] = useState(0)

  const handleClick = (data) => {
    setClick(data)
  }

  // ======================================
  const [clickCart, setClickCart] = useState([])
  const handleCallBack = (data) => {
    setClickCart(data)
  }
  // ======================================

  return (
    <div className="PRODUCT">
      <div className="left">
        <SideBar className='sideBar' callBack={handleClick} />
      </div>
      <Main page={click} callBack={handleCallBack} />
      <div className='right'>
        <Cart className='sectionCart' data={clickCart} />
      </div>
    </div>
  );
}

