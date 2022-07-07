import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./Product.css";

const Product = () => {
    const [hover, setHover] = useState(0);
    // console.log(hover);

    return (
        <div className='product-container'>
            <div className='rectangle-product'>
            </div>
            <div className="product-form">
                {/* <ImgProductForm /> */}
                <svg width="500" height="672" viewBox="0 0 500 672" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 624V647.979L27.0371 631.105L250 410.269L472.963 631.105L490 647.979V624V20V10H480H20H10V20V624Z" fill="white" stroke="#FBB422" stroke-width="20" />
                </svg>
            </div>
            <div className='img-title1'>
                <img src="../../img/TITLE1.png" alt="title product 1"></img>
            </div>
            <div className='white-circles'>
                <svg width="1136" height="178" viewBox="0 0 1136 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="216" cy="69" r="49" fill="white" />
                    <circle cx="93.5" cy="138.5" r="37.5" fill="white" />
                    <circle cx="22" cy="22" r="22" fill="white" />
                    <circle r="49.5" transform="matrix(-1 0 0 1 916.5 69.5)" fill="white" />
                    <circle r="38" transform="matrix(-1 0 0 1 1041 140)" fill="white" />
                    <ellipse rx="22.5" ry="22" transform="matrix(-1 0 0 1 1113.5 22)" fill="white" />
                </svg>
                {/* <ImgWhiteCircles /> */}
            </div>

            <div className='ellipse-background'>
                <span className='ellipses'></span>
                <span className='ellipses'></span>
            </div>
            <div className='background-yellow-flex'>
                <div className='background-yellow'>
                    <div className={'img-bubble-left ' + (hover === 1 ? "img-bubble-left-animation" : "")}>
                        <img src='../../img/BUBBLEL.png' className='img-bubble-chart'>
                        </img>
                    </div>
                    <img src='../../img/RectangleL.png' className='img-tea-left'
                    >
                    </img>
                    <p className='content-left'>
                        Sự hòa nguyện từ vị thanh Trà Oloong, mùi ngọt dịu của Thơm, và dai giòn của Trân Châu Trắng đập tan đi cái nóng khắc nghiệt của mùa hè. Hứa hẹn sẽ mang cho bạn làn gió mát.
                    </p>
                    <button className='button-more'>XEM THÊM</button>
                    <div className={'img-thom-left ' + (hover === 1 ? "img-thom-left-animation" : "")}>
                        <img src='../../img/thom.png'
                            onMouseOver={() => setHover(1)}
                            onMouseOut={() => setHover(0)}>
                        </img>
                    </div>
                </div>

                <div className='background-yellow'>
                    <div className={'img-bubble-right ' + (hover === 2 ? "img-bubble-right-animation" : "")}>
                        <img src='../../img/BUBBLER.png' className='img-bubble-chart'>
                        </img>
                    </div>
                    <img src='../../img/RectangleR.png' className='img-tea-right'
                    >
                    </img>

                    <p className='content-right'>
                        Sự hòa nguyện từ Trà Oloong, vị ngọt ngây ngất của Xoài, và dai giòn của Trân Châu Trắng đập tan đi cái nóng khắc nghiệt của mùa hè. Hứa hẹn sẽ mang tới cho bạn làn gió mát.
                    </p>
                    <button className='button-more'>XEM THÊM</button>

                    <div className={'img-xoai-right ' + (hover === 2 ? "img-xoai-right-animation" : "")}>
                        <img src='../../img/xoai.png'
                            onMouseOver={() => setHover(2)}
                            onMouseOut={() => setHover(0)}>
                        </img>
                    </div>
                </div>
            </div>

            <div className='background-white'>
                <img src='../../img/bg-white.png' className='img-background-white'>
                </img>
            </div>

            <div className='bg-yellow'>
                <img src='../../img/bg-yellow.png' className='img-background-yellow'>
                </img>
            </div>


        </div>
    );
};


Product.propTypes = {

};


export default Product;
