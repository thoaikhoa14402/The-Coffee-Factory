import React from 'react';
import PropTypes from 'prop-types';
import "./Store.css"
import Navbar from '../Navbar/Navbar';


const Store = () => {
    return (
        <div className='container-main'>
            <Navbar/>
            <img className='img-bg-store' src='../../imgStore/bg_store.png' />
            <div className='container-content'>
                <div className='sidebar'>
                    <p className='sidebar-conrtent'>Tp. Hồ Chí Minh</p>
                    <div className='dictrict-container'>
                        <p className='dictrict-name'>Tp. Thủ Đức (1)</p>
                        <p className='dictrict-name'>Quận 1 (4) </p>
                        <p className='dictrict-name'>Quận 3 (2)</p>
                        <p className='dictrict-name'>Quận 7 (1)</p>
                        <p className='dictrict-name'>Quận 8 (1)</p>
                        <p className='dictrict-name'>Quận Tân Bình (1)</p>
                        <p className='dictrict-name'>Quận Tân Phú (1)</p>

                    </div>
                </div>

                <div className='infor-content'>
                    <div className='infor-address'>
                        <img src='../../imgStore/NguyenDu.png' />
                        <div className='content-address'>
                            <p className='name-address'>TCF Nguyễn Du</p>
                            <a className='button-map' href='/'>Xem bản đồ</a>
                            <p className='address-detail'>53H Nguyễn Du, Phường Bến Nghé, Quận 1, TP.HCM.</p>
                            <div className='time-open'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className='time-detail'>06:30 - 22:30</p>
                            </div>
                        </div>
                    </div>

                    <div className='infor-address'>
                        <img src='../../imgStore/MacDinhChi.png' />
                        <div className='content-address'>
                            <p className='name-address'>TCF Mạc Đĩnh Chi</p>
                            <a className='button-map' href='/'>Xem bản đồ</a>
                            <p className='address-detail'>37Bis Mạc Đĩnh Chi, Phường Đa Kao, Quận 1, TP.HCM.</p>
                            <div className='time-open'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className='time-detail'>06:30 - 22:30</p>
                            </div>
                        </div>
                    </div>

                    <div className='infor-address'>
                        <img src='../../imgStore/LeThanhTon.png' />
                        <div className='content-address'>
                            <p className='name-address'>TCF Lê Thánh Tôn</p>
                            <a className='button-map' href='/'>Xem bản đồ</a>
                            <p className='address-detail'>37Bis Mạc Đĩnh Chi, Phường Đa Kao, Quận 1, TP.HCM.</p>
                            <div className='time-open'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className='time-detail'>06:30 - 22:30</p>
                            </div>
                        </div>
                    </div>

                    <div className='infor-address'>
                        <img src='../../imgStore/TranQuangKhai.png' />
                        <div className='content-address'>
                            <p className='name-address'>TCF Trần Quang Khải</p>
                            <a className='button-map' href='/'>Xem bản đồ</a>
                            <p className='address-detail'>37Bis Mạc Đĩnh Chi, Phường Đa Kao, Quận 1, TP.HCM.</p>
                            <div className='time-open'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className='time-detail'>06:30 - 22:30</p>
                            </div>
                        </div>
                    </div>

                    <div className='infor-address'>
                        <img src='../../imgStore/TruongDinh.png' />
                        <div className='content-address'>
                            <p className='name-address'>TCF Trương Định</p>
                            <a className='button-map' href='/'>Xem bản đồ</a>
                            <p className='address-detail'>107A Trương Định, Phường Võ Thị Sáu, Quận 3, TP.HCM.</p>
                            <div className='time-open'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className='time-detail'>06:30 - 22:30</p>
                            </div>
                        </div>
                    </div>

                    <div className='infor-address'>
                        <img className='logoTCF' src='../../imgStore/LogoTCF238x60.png' />
                        <div className='content-address'>
                            <p className='name-address'>TCF Tú Xương</p>
                            <a className='button-map' href='/'>Xem bản đồ</a>
                            <p className='address-detail'>45 Tú Xương, Phường Võ Thị Sáu, Quận 3, TP.HCM.</p>
                            <div className='time-open'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className='time-detail'>06:30 - 22:30</p>
                            </div>
                        </div>
                    </div>

                    <div className='infor-address'>
                        <img className='logoTCF' src='../../imgStore/LogoTCF238x60.png' />
                        <div className='content-address'>
                            <p className='name-address'>TCF Sky Garden</p>
                            <a className='button-map' href='/'>Xem bản đồ</a>
                            <p className='address-detail'>S26-1 Sky Garden, Phường Tân Phong, Quận 7, TP.HCM.</p>
                            <div className='time-open'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className='time-detail'>06:30 - 22:30</p>
                            </div>
                        </div>
                    </div>

                    <div className='infor-address'>
                        <img className='logoTCF' src='../../imgStore/LogoTCF238x60.png' />
                        <div className='content-address'>
                            <p className='name-address'>TCF Dương Quang Đông</p>
                            <a className='button-map' href='/'>Xem bản đồ</a>
                            <p className='address-detail'>47 Dương Quang Đông, Phường 5, Quận 8, TP.HCM.</p>
                            <div className='time-open'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className='time-detail'>06:30 - 22:30</p>
                            </div>
                        </div>
                    </div>

                    <div className='infor-address'>
                        <img className='logoTCF' src='../../imgStore/LogoTCF238x60.png' />
                        <div className='content-address'>
                            <p className='name-address'>TCF Ấp Bắc</p>
                            <a className='button-map' href='/'>Xem bản đồ</a>
                            <p className='address-detail'>Số 1 Ấp Bắc, Phường 13, Quận Tân Bình, TP.HCM.</p>
                            <div className='time-open'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className='time-detail'>06:30 - 22:30</p>
                            </div>
                        </div>
                    </div>

                    <div className='infor-address'>
                        <img className='logoTCF' src='../../imgStore/LogoTCF238x60.png' />
                        <div className='content-address'>
                            <p className='name-address'>TCF Hòa Bình</p>
                            <a className='button-map' href='/'>Xem bản đồ</a>
                            <p className='address-detail'>280A Hòa Bình, Phường Hiệp Tân, Quận Tân Phú, TP.HCM.</p>
                            <div className='time-open'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className='time-detail'>06:30 - 22:30</p>
                            </div>
                        </div>
                    </div>

                    <div className='infor-address'>
                        <img className='logoTCF' src='../../imgStore/LogoTCF238x60.png' />
                        <div className='content-address'>
                            <p className='name-address'>TCF Đường Số 20</p>
                            <a className='button-map' href='/'>Xem bản đồ</a>
                            <p className='address-detail'>Số 6, Đường số 20, Phường Hiệp Bình Chánh, TP. Thủ Đức, TP.HCM.</p>
                            <div className='time-open'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.588 16 0 12.412 0 8C0 3.588 3.588 0 8 0C12.412 0 16 3.588 16 8C16 12.412 12.412 16 8 16ZM8 1.6C4.47 1.6 1.6 4.47 1.6 8C1.6 11.53 4.47 14.4 8 14.4C11.53 14.4 14.4 11.53 14.4 8C14.4 4.47 11.53 1.6 8 1.6Z" fill="black" />
                                    <path d="M9.83419 10.966L7.43419 8.566C7.28419 8.416 7.2002 8.212 7.2002 8V4H8.8002V7.668L10.9662 9.834L9.83419 10.966Z" fill="black" />
                                </svg>
                                <p className='time-detail'>06:30 - 22:30</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};


Store.propTypes = {

};


export default Store;
