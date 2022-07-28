import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import './Navbar.css';
import Cookie from 'universal-cookie'


const cookie = new Cookie()
const Navbar = () => {
    const [current, setState] = useState(1);
    const navigate = useNavigate()

    const state = useLocation();

    useEffect(() => {
        if (state.pathname == '/')
            setState(1)
        else if (state.pathname == '/product')
            setState(2)
        else if (state.pathname == '/store')
            setState(4)
    }, [state]);

    const [stateLogin, setStateLogin] = useState(false)
    useEffect(() => {
        if (cookie.get('JWT')) {
            setStateLogin(true)
        }
    }, [])

    const logoutUser = () => {
        cookie.remove('JWT')
        setStateLogin(false)
    }
    return (
        <div className='navbar-container'>
            <div className='container-details'>
                <div className='logo-img'>
                    <img src="../../img/Logo.png" alt="logo"></img>
                </div>
                <div className='detail-describe'>
                    <Link className={`describe ${(current == 1) ? 'title-color' : ''}`} to="/">TRANG CHỦ</Link>
                    <Link className={`describe ${(current == 2) ? 'title-color' : ''}`} to="/product">SẢN PHẨM</Link>
                    <Link className='describe' to="/infor">THÔNG TIN ƯU ĐÃI</Link>
                    <Link className={`describe ${(current == 4) ? 'title-color' : ''}`} to="/store">CỬA HÀNG</Link>
                    <Link className='describe' to="/connect">LIÊN HỆ</Link>

                </div>
            </div>

            <div className='navbar-details'>
                {!stateLogin && <div className='search-icons'>
                    <div className='search-form'>
                        <div className='magnifying-glass'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_77_1550)">
                                    <path d="M6.84218 13.6844C3.06829 13.6844 0 10.6161 0 6.84218C0 3.06829 3.06829 0 6.84218 0C10.6161 0 13.6844 3.06829 13.6844 6.84218C13.6844 10.6161 10.6161 13.6844 6.84218 13.6844ZM6.84218 1.71054C4.01336 1.71054 1.71054 4.01336 1.71054 6.84218C1.71054 9.67099 4.01336 11.9738 6.84218 11.9738C9.67099 11.9738 11.9738 9.67099 11.9738 6.84218C11.9738 4.01336 9.67099 1.71054 6.84218 1.71054Z" fill="#231F20" />
                                    <path d="M11.7242 10.5139L10.5144 11.7236L14.791 16.0002L16.0007 14.7904L11.7242 10.5139Z" fill="#231F20" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_77_1550">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className='input-search'>
                            <input type="text" placeholder="Tìm kiếm..."></input>
                        </div>
                    </div>

                </div>}
                {stateLogin &&
                    <div className='search-form-login'>
                        <div className='magnifying-glass'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_77_1550)">
                                    <path d="M6.84218 13.6844C3.06829 13.6844 0 10.6161 0 6.84218C0 3.06829 3.06829 0 6.84218 0C10.6161 0 13.6844 3.06829 13.6844 6.84218C13.6844 10.6161 10.6161 13.6844 6.84218 13.6844ZM6.84218 1.71054C4.01336 1.71054 1.71054 4.01336 1.71054 6.84218C1.71054 9.67099 4.01336 11.9738 6.84218 11.9738C9.67099 11.9738 11.9738 9.67099 11.9738 6.84218C11.9738 4.01336 9.67099 1.71054 6.84218 1.71054Z" fill="#231F20" />
                                    <path d="M11.7242 10.5139L10.5144 11.7236L14.791 16.0002L16.0007 14.7904L11.7242 10.5139Z" fill="#231F20" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_77_1550">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className='input-search'>
                            <input type="text" placeholder="Tìm kiếm..."></input>
                        </div>
                    </div>
                }
                <div className='icon-shopping'>
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

                {!stateLogin && <Link className='login-btn' to='/login'>ĐĂNG NHẬP</Link>}
                {!stateLogin && <Link className='signup-btn' to='/register'>ĐĂNG KÝ</Link>}

                {stateLogin &&
                    <div className='user-login'>
                        <img src='../../img/userLogin.png'></img>
                    </div>
                }
                {stateLogin &&
                    <div className='logout-btn'>
                        <svg onClick={() => { logoutUser() }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.8889 20H1.11111C0.497222 20 0 19.5028 0 18.8889V14.4444H2.22222V17.7778H17.7778V2.22222H2.22222V5.55556H0V1.11111C0 0.497222 0.497222 0 1.11111 0H18.8889C19.5028 0 20 0.497222 20 1.11111V18.8889C20 19.5028 19.5028 20 18.8889 20Z" fill="black" />
                            <path d="M13.3333 8.88867H0V11.1109H13.3333V8.88867Z" fill="black" />
                            <path d="M9.67476 15.2306L8.10254 13.6584L11.7609 10.0001L8.10254 6.34175L9.67476 4.76953L14.1192 9.21397C14.5525 9.64731 14.5525 10.3501 14.1192 10.7862L9.67476 15.2306Z" fill="black" />
                        </svg >
                    </div>}


            </div>

        </div>
    );
};


Navbar.propTypes = {

};


export default Navbar;
