import './Main.css'
import axios from 'axios'

import Banner from './Banner/Banner'
import AllProduct from './AllProduct/AllProduct'
import CaPhe from './Product/CaPhe'
import DaXay from './Product/DaXay'
import SodaMojito from './Product/SodaMojito'
import TCFCake from './Product/TCFCake'
import Tra from './Product/Tra'


import banner1 from '../../../Image/banner1.jpg'
import banner2 from '../../../Image/banner2.jpg'
import banner3 from '../../../Image/banner3.jpg'
import banner4 from '../../../Image/banner4.jpg'
import banner7 from '../../../Image/banner7.jpg'
import { useEffect, useState } from 'react'

export default function Main(props) {
  const [dataJson, setDataJson] = useState('')
  useEffect(() => {
    axios.get(process.env.REACT_APP_ipAddress + '/tcf/v1/products/get-products').then((res) => {
      // console.log(JSON.parse(res.data.data.productData))
      setDataJson(JSON.parse(res.data.data.productData))

    }).catch(error => {
      console.log(error)
    })
  }, [])

  useEffect(() => {
    // console.log('cbcbcbcbcbb')
    // console.log(props.dataS)
    // if (props.dataS.length > 0) {
    // console.log('da vao day')
    setDataJson(props.dataS)
    // }

  }, [props.dataS])
  // ======================================
  const handleCallBack = (data) => {
    props.callBack(data)
  }
  const [noResult, setNoResult] = useState(false)
  useEffect(() => {
    if (dataJson.length === 0) setNoResult(true)
  }, [dataJson])
  // console.log(dataJson);
  // ======================================

  return <div className='Main'>
    {(props.page === 0) && <Banner src={banner1} />}
    {(props.page === 0) && dataJson && <AllProduct callBack={handleCallBack} dataS={dataJson} />}

    {(props.page === 1) && <Banner src={banner1} />}
    {(props.page === 1) && dataJson && <CaPhe callBack={handleCallBack} dataS={dataJson} />}

    {(props.page === 2) && <Banner src={banner2} />}
    {(props.page === 2) && dataJson && <DaXay callBack={handleCallBack} dataS={dataJson} />}

    {(props.page === 3) && <Banner src={banner3} />}
    {(props.page === 3) && dataJson && <Tra callBack={handleCallBack} dataS={dataJson} />}

    {(props.page === 4) && <Banner src={banner4} />}
    {(props.page === 4) && dataJson && <SodaMojito callBack={handleCallBack} dataS={dataJson} />}

    {(props.page === 7) && <Banner src={banner7} />}
    {(props.page === 7) && dataJson && <TCFCake callBack={handleCallBack} dataS={dataJson} />}

    {(props.page === 0) && dataJson.length === 0 && <p className='no-result'>No result</p>}
  </div>
}