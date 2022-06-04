import './Main.css'

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

export default function Main(props) {

  // ======================================
  const handleCallBack = (data) => {
    props.callBack(data)
  }
  // ======================================

  return <div className='Main'>
    {(props.page === 0) && <Banner src={banner1} />}
    {(props.page === 0) && <AllProduct callBack={handleCallBack} />}

    {(props.page === 1) && <Banner src={banner1} />}
    {(props.page === 1) && <CaPhe callBack={handleCallBack} />}

    {(props.page === 2) && <Banner src={banner2} />}
    {(props.page === 2) && <DaXay callBack={handleCallBack} />}

    {(props.page === 3) && <Banner src={banner3} />}
    {(props.page === 3) && <Tra callBack={handleCallBack} />}

    {(props.page === 4) && <Banner src={banner4} />}
    {(props.page === 4) && <SodaMojito callBack={handleCallBack} />}

    {(props.page === 7) && <Banner src={banner4} />}
    {(props.page === 7) && <TCFCake callBack={handleCallBack} />}

  </div>
}