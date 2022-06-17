import React from 'react';
import PropTypes from 'prop-types';
import Navbars from './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='container-details'>
                <div className='logo-img'>
                    <img src="../../img/Logo.png" alt="logo"></img>
                </div>
                <div className='detail-describe'>
                    <p>TRANG CHỦ</p>
                    <p>SẢN PHẨM</p>
                    <p>THÔNG TIN ƯU ĐÃI</p>
                    <p>CỬA HÀNG</p>
                    <p>LIÊN HỆ</p>
                </div>
            </div>


            <div className='search-icons'>
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
                <div className='shop-icons'>
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
                    <div className='icon-list'>
                        <svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 7H0V9H30V7Z" fill="#231F20" />
                            <path d="M30 14H0V16H30V14Z" fill="#231F20" />
                            <path d="M30 0H0V2H30V0Z" fill="#231F20" />
                        </svg>

                    </div>
                </div>
            </div>

        </div>
    );
};


Navbar.propTypes = {

};


export default Navbar;
