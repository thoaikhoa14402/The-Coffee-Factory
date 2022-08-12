import React from 'react';
import PropTypes from 'prop-types';
import style from "./Store.module.css"
import Footer from '../HOME/Footer/Footer'
import bg_store from '../../Image/imgStore/bg_store.png'
import NguyenDu from '../../Image/imgStore/NguyenDu.png'
import MacDinhChi from '../../Image/imgStore/MacDinhChi.png'
import LeThanhTon from '../../Image/imgStore/LeThanhTon.png'
import TranQuangKhai from '../../Image/imgStore/TranQuangKhai.png'
import TruongDinh from '../../Image/imgStore/TruongDinh.png'
import LogoTCF238x60 from '../../Image/imgStore/LogoTCF238x60.png'
const Store = ({refs}) => {
    return (
        <React.Fragment>
            <div className={style.container_main}>
            <img className={style.img_bg_store} src={bg_store} />
            <div className={style.container_content}>
                <div className={style.sidebar}>
                    <p className={style.sidebar_conrtent}>Tp. Hồ Chí Minh</p>
                    <div className={style.dictrict_container}>
                        <p className={style.dictrict_name}>Tp. Thủ Đức (1)</p>
                        <p className={style.dictrict_name}>Quận 1 (4) </p>
                        <p className={style.dictrict_name}>Quận 3 (2)</p>
                        <p className={style.dictrict_name}>Quận 7 (1)</p>
                        <p className={style.dictrict_name}>Quận 8 (1)</p>
                        <p className={style.dictrict_name}>Quận Tân Bình (1)</p>
                        <p className={style.dictrict_name}>Quận Tân Phú (1)</p>

                    </div>
                </div>

                <div className={style.infor_content}>
                    <div className={style.infor_address}>
                        <img src={NguyenDu} />
                        <div className={style.content_address}>
                            <p className={style.name_address}>TCF Nguyễn Du</p>
                            <a className={style.button_map} href='/'>Xem bản đồ</a>
                            <p className={style.address_detail}>53H Nguyễn Du, Phường Bến Nghé, Quận 1, TP.HCM.</p>
                            <div className={style.time_open}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className={style.time_detail}>06:30 _ 22:30</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.infor_address}>
                        <img src={MacDinhChi} />
                        <div className={style.content_address}>
                            <p className={style.name_address}>TCF Mạc Đĩnh Chi</p>
                            <a className={style.button_map} href='/'>Xem bản đồ</a>
                            <p className={style.address_detail}>37Bis Mạc Đĩnh Chi, Phường Đa Kao, Quận 1, TP.HCM.</p>
                            <div className={style.time_open}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className={style.time_detail}>06:30 _ 22:30</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.infor_address}>
                        <img src={LeThanhTon} />
                        <div className={style.content_address}>
                            <p className={style.name_address}>TCF Lê Thánh Tôn</p>
                            <a className={style.button_map} href='/'>Xem bản đồ</a>
                            <p className={style.address_detail}>37Bis Mạc Đĩnh Chi, Phường Đa Kao, Quận 1, TP.HCM.</p>
                            <div className={style.time_open}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className={style.time_detail}>06:30 _ 22:30</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.infor_address}>
                        <img src={TranQuangKhai} />
                        <div className={style.content_address}>
                            <p className={style.name_address}>TCF Trần Quang Khải</p>
                            <a className={style.button_map} href='/'>Xem bản đồ</a>
                            <p className={style.address_detail}>37Bis Mạc Đĩnh Chi, Phường Đa Kao, Quận 1, TP.HCM.</p>
                            <div className={style.time_open}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className={style.time_detail}>06:30 _ 22:30</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.infor_address}>
                        <img src={TruongDinh} />
                        <div className={style.content_address}>
                            <p className={style.name_address}>TCF Trương Định</p>
                            <a className={style.button_map} href='/'>Xem bản đồ</a>
                            <p className={style.address_detail}>107A Trương Định, Phường Võ Thị Sáu, Quận 3, TP.HCM.</p>
                            <div className={style.time_open}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className={style.time_detail}>06:30 _ 22:30</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.infor_address}>
                        <img className={style.logoTCF} src={LogoTCF238x60} />
                        <div className={style.content_address}>
                            <p className={style.name_address}>TCF Tú Xương</p>
                            <a className={style.button_map} href='/'>Xem bản đồ</a>
                            <p className={style.address_detail}>45 Tú Xương, Phường Võ Thị Sáu, Quận 3, TP.HCM.</p>
                            <div className={style.time_open}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className={style.time_detail}>06:30 _ 22:30</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.infor_address}>
                        <img className={style.logoTCF} src={LogoTCF238x60} />
                        <div className={style.content_address}>
                            <p className={style.name_address}>TCF Sky Garden</p>
                            <a className={style.button_map} href='/'>Xem bản đồ</a>
                            <p className={style.address_detail}>S26_1 Sky Garden, Phường Tân Phong, Quận 7, TP.HCM.</p>
                            <div className={style.time_open}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className={style.time_detail}>06:30 _ 22:30</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.infor_address}>
                        <img className={style.logoTCF} src={LogoTCF238x60} />
                        <div className={style.content_address}>
                            <p className={style.name_address}>TCF Dương Quang Đông</p>
                            <a className={style.button_map} href='/'>Xem bản đồ</a>
                            <p className={style.address_detail}>47 Dương Quang Đông, Phường 5, Quận 8, TP.HCM.</p>
                            <div className={style.time_open}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className={style.time_detail}>06:30 _ 22:30</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.infor_address}>
                        <img className={style.logoTCF} src={LogoTCF238x60} />
                        <div className={style.content_address}>
                            <p className={style.name_address}>TCF Ấp Bắc</p>
                            <a className={style.button_map} href='/'>Xem bản đồ</a>
                            <p className={style.address_detail}>Số 1 Ấp Bắc, Phường 13, Quận Tân Bình, TP.HCM.</p>
                            <div className={style.time_open}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className={style.time_detail}>06:30 _ 22:30</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.infor_address}>
                        <img className={style.logoTCF} src={LogoTCF238x60} />
                        <div className={style.content_address}>
                            <p className={style.name_address}>TCF Hòa Bình</p>
                            <a className={style.button_map} href='/'>Xem bản đồ</a>
                            <p className={style.address_detail}>280A Hòa Bình, Phường Hiệp Tân, Quận Tân Phú, TP.HCM.</p>
                            <div className={style.time_open}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className={style.time_detail}>06:30 _ 22:30</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.infor_address}>
                        <img className={style.logoTCF} src={LogoTCF238x60} />
                        <div className={style.content_address}>
                            <p className={style.name_address}>TCF Đường Số 20</p>
                            <a className={style.button_map} href='/'>Xem bản đồ</a>
                            <p className={style.address_detail}>Số 6, Đường số 20, Phường Hiệp Bình Chánh, TP. Thủ Đức, TP.HCM.</p>
                            <div className={style.time_open}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className={style.time_detail}>06:30 _ 22:30</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer refs={refs} />
        </React.Fragment>
    );
};


Store.propTypes = {

};


export default Store;
