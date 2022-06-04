import style from './Card.module.css'

export default function Card(props) {

  const sendData = (v) => {
    props.callBack(v)
  }

  return <div className={style.Card + ' ' + props.className}>
    <div className={style.image}>
      <img src={props.src} alt='' />
    </div>
    <div className={style.name}>{props.name}</div>
    <div className={style.price}>{props.price}đ</div>


    <button className={style.button} onClick={() => sendData([props.src, props.name, props.price])}>
      <svg className={style.border} width="35" height="35"
        viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">

        <rect className={style.background} x="0.25" y="0.159058"
          width="24.4091" height="24.4091" rx="12.2045" fill="#FF0000" />

        <rect className={style.ver} x="11.0986" y="5.58325"
          width="2.71212" height="13.5606" fill="white" />

        <rect className={style.hor} x="19.2349" y="11.0075" width="2.71212"
          height="13.5606" transform="rotate(90 19.2349 11.0075)" fill="white" />
      </svg>
    </button>
  </div>
}