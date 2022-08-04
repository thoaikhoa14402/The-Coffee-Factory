import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Image/img/Logo.png'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

const Navbar = (props) => {
    const [page, setPage] = useState(1)

    const handleLogout = () => {
        cookie.remove('JWT')
        setLogined(false)
    }

    const [hidden, setHidden] = useState(false)
    const state = useLocation();

    const [logined, setLogined] = useState(false)
    useEffect(() => {
        setHidden(false)
        if (state.pathname === '/')
            setPage(1)
        else if (state.pathname === '/products')
            setPage(2)
        // else if (state.pathname === '/introduce')
        // setPage(3)
        else if (state.pathname === '/store')
            setPage(4)
        else if (state.pathname === '/login' || state.pathname === '/register' || state.pathname === '/forget')
            setHidden(true)
        if (cookie.get('JWT')) {
            setLogined(true)
        }
    }, [state])

    const navigate = useNavigate()
    const logoClick = () => {
        navigate('/')
    }

    return (
        <div className={`navbar-container ${hidden && 'hidden'}`}>
            <div className='container-details'>
                <div onClick={logoClick} className='logo-img'>
                    {/* <img src="../../../../Image/img/Logo.png" alt="logo"></img> */}
                    <img src={logo} alt="logo"></img>
                </div>
                <div className='detail-describe'>
                    <Link className={`detail-describe-p ${page === 1 && 'setChoose'}`} to='/'>TRANG CHỦ</Link>
                    <Link className={`detail-describe-p ${page === 2 && 'setChoose'}`} to='/products'>SẢN PHẨM</Link>
                    <p className={`detail-describe-p ${page === 3 && 'setChoose'}`} >THÔNG TIN ƯU ĐÃI</p>
                    <Link className={`detail-describe-p ${page === 4 && 'setChoose'}`} to='/store'>CỬA HÀNG</Link>
                    <p className={`detail-describe-p ${page === 5 && 'setChoose'}`}>LIÊN HỆ</p>
                </div>
            </div>


            <div className='search-icons'>


                <div className='search-form'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1653_710)">
                            <path d="M8.55272 17.1054C3.83536 17.1054 0 13.2701 0 8.55272C0 3.83536 3.83536 0 8.55272 0C13.2701 0 17.1054 3.83536 17.1054 8.55272C17.1054 13.2701 13.2701 17.1054 8.55272 17.1054ZM8.55272 2.13818C5.0167 2.13818 2.13818 5.01671 2.13818 8.55272C2.13818 12.0887 5.0167 14.9673 8.55272 14.9673C12.0887 14.9673 14.9673 12.0887 14.9673 8.55272C14.9673 5.01671 12.0887 2.13818 8.55272 2.13818Z" fill="#231F20" />
                            <path d="M14.6553 13.1421L13.1431 14.6543L18.4888 20L20.001 18.4878L14.6553 13.1421Z" fill="#231F20" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1653_710">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>

                <div className='shop-icons'>
                    <div onClick={() => navigate('/payments')} className='icon-shopping'>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_361_254)">
                                <path d="M14 14H3C2.4475 14 2 13.5525 2 13V5C2 4.4475 2.4475 4 3 4H17C17.3275 4 17.635 4.16 17.8225 4.43C18.01 4.7 18.0525 5.0425 17.9375 5.35L14.9375 13.35C14.7925 13.74 14.4175 14 14 14ZM4 12H13.3075L15.5575 6H4V12Z" fill="black" />
                                <path d="M4 5H2V2H0V0H3C3.5525 0 4 0.4475 4 1V5Z" fill="black" />
                                <path d="M15 18H3C2.4475 18 2 17.5525 2 17V13H4V16H15V18Z" fill="black" />
                                <path d="M9 17H7V20H9V17Z" fill="black" />
                                <path d="M13 17H11V20H13V17Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_361_254">
                                    <rect width="18" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                </div>
                {!logined && <button onClick={() => navigate('/login')} className='login-button'>đăng nhập</button>}
                {!logined && <button onClick={() => navigate('/register')} className='login-button'>đăng kí</button>}
                {logined && <div onClick={() => navigate('/user')} className='imageUser'></div>}
                {logined && <svg onClick={handleLogout} style={{ cursor: 'pointer' }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8889 20H1.11111C0.497222 20 0 19.5028 0 18.8889V14.4444H2.22222V17.7778H17.7778V2.22222H2.22222V5.55556H0V1.11111C0 0.497222 0.497222 0 1.11111 0H18.8889C19.5028 0 20 0.497222 20 1.11111V18.8889C20 19.5028 19.5028 20 18.8889 20Z" fill="black" />
                    <path d="M13.3333 8.88867H0V11.1109H13.3333V8.88867Z" fill="black" />
                    <path d="M9.67476 15.2306L8.10254 13.6584L11.7609 10.0001L8.10254 6.34175L9.67476 4.76953L14.1192 9.21397C14.5525 9.64731 14.5525 10.3501 14.1192 10.7862L9.67476 15.2306Z" fill="black" />
                </svg>}
            </div>

        </div>
    );
};

export default Navbar;
