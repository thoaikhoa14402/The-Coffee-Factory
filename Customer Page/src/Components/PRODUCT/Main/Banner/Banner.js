import style from './Banner.module.css'

export default function Banner(props) {
  return <div className={style.Banner}>
    <img src={props.src} alt='banner' />
  </div>
}
