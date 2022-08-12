import './PRODUCT.css';
import SideBar from './SideBar/SideBar'
import Main from './Main/Main';
import Cart from './Cart/Cart'
import Footer from '../HOME/Footer/Footer'
import { useState } from 'react';


export default function PRODUCT(props) {
  const [click, setClick] = useState(0)

  const handleClick = (data) => {
    setClick(data)
    window.scrollTo(0, 0)
  }

  // ======================================
  const [clickCart, setClickCart] = useState([])
  const handleCallBack = (data) => {
    let temp = data[3]
    data[3] = data[4]
    data[4] = temp

    temp = data[4]
    data[4] = data[5]
    data[5] = temp

    temp = data[5]
    data[5] = data[6]
    data[6] = temp

    setClickCart(data)
    // console.log(data)
  }
  // ======================================
  const [dataS, setDataS] = useState('')
  const setData = (data) => {
    setDataS(data)
  }

  return (
    <div className="PRODUCT">
      <div className='PRODUCTs'>
        <div className="left">
          <SideBar className='sideBar' callBack={handleClick} />
        </div>
        <Main page={click} callBack={handleCallBack} dataS={dataS} />
        <div className='right'>
          <Cart className='sectionCart' setLength={props.setLength} data={clickCart} callback={setData} />
        </div>
      </div>
      <Footer refs={props.refs} />
    </div>
  );
}

