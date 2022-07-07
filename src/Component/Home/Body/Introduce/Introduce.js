import React from 'react';
import PropTypes from 'prop-types';
import "./Introduce.css"
import { ImgCoffee1, ImgCoffee2, ImgCoffeeL, ImgCoffeeR } from './ImgCoffee';
import { Link } from 'react-router-dom';

const Introduce = () => {
    return (
        <div className='introduce-container'>
            <div className='img-coffee'>
                <ImgCoffeeL/>
                <ImgCoffeeR/>
            </div>
            <div className='img-coffee-tree'>
                <ImgCoffee1/>
                <ImgCoffee2/>
            </div>
            <div className='introduces'>
                <p className='title-intro'>GIỚI THIỆU</p>
                <p className='describe-intro'>The Coffee Factory</p>
                <p className='describe-intro'>Chuỗi cà phê rang tươi đầu tiên tại Việt Nam</p>
                <p className='describe-details'>Tháng 11/2013, cửa hàng The Coffee Factory đầu tiên bắt đầu hoạt động ngay mặt tiền đường Trương Định, TP.HCM<br></br>
                    với phong cách khá lạ mắt: tất cả máy rang, xay cà phê, bàn ghế, ống nước cùng được bố trí trong một không gian nhỏ thoáng đãng.
                </p>
                <div className='button-intro'>
                    <Link to = "/home/introducePage" >XEM THÊM</Link>
                </div>
            </div>
            <div className='img-introduce'>
                <img src="../../img/intro.png" alt="img introduce"></img>
            </div>
        </div>
    );
};


Introduce.propTypes = {

};


export default Introduce;
