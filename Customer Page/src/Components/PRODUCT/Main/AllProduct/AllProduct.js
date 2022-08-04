import './AllProduct.css'
import { useEffect, useState } from 'react'
import CaPhe from '../Product/CaPhe'
import DaXay from '../Product/DaXay'
import SodaMojito from '../Product/SodaMojito'
import TCFCake from '../Product/TCFCake'
import Tra from '../Product/Tra'


export default function Products(props) {

  // const [data, setData] = useState(props.dataS)
  // console.log(data)
  // const [scrollB, setScrollB] = useState(1)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY >= 6000) setScrollB(5)
  //     else if (window.scrollY >= 4000) setScrollB(4)
  //     else if (window.scrollY >= 2000) setScrollB(3)
  //     else if (window.scrollY >= 1000) setScrollB(2)
  //   }
  //   window.addEventListener('scroll', handleScroll)
  // }, [])
  // useEffect(() => {
  //   if (props.dataS.length > 0) {
  //     setData(props.dataS)
  //   }
  // }, [props.dataS])
  // ======================================
  const handleCallBack = (data) => {
    props.callBack(data)
  }
  // console.log(props.dataS)
  // ======================================
  return <div className='AllProduct'>
    {props.dataS && <CaPhe callBack={handleCallBack} dataS={props.dataS} />}
    {props.dataS && <DaXay callBack={handleCallBack} dataS={props.dataS} />}
    {props.dataS && <Tra callBack={handleCallBack} dataS={props.dataS} />}
    {props.dataS && <SodaMojito callBack={handleCallBack} dataS={props.dataS} />}
    {props.dataS && <TCFCake callBack={handleCallBack} dataS={props.dataS} />}
  </div>
}