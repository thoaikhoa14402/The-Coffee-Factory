import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./FavoriteProduct.css";

const FavoriteProduct = () => {
    // const [hover, setHover] = useState(0);
    return (
        <div className='containers'>
            <div className='title-container'>
                <p className='title-best-selling'>SẢN PHẨM YÊU THÍCH</p>
            </div>
            <div className='favorite-product-container'>
                <div className='favorite-product-card1'>
                    <div className='img-bg1'>
                        <img src='../../ImgProduct/Bg_1.png' alt='Img-bg'></img>
                    </div>
                    <div className='img-favorite-product1'>
                        <img src='../../ImgProduct/FavoriteProduct1.png' alt='Img favorite product'></img>
                    </div>
                    <div className='container-hover'>
                        <div className='bg-hover'>
                            <img src='../../ImgProduct/BgZoom1.png' alt='Background zoom 1'></img>
                        </div>
                        <div className='product-hover'>
                            <img src='../../ImgProduct/FavoriteProductScale1.png' alt='Product zoom 1'></img>
                        </div>
                    </div>

                </div>

                <div className='favorite-product-card2'>
                    <div className='img-bg2'>
                        <img src='../../ImgProduct/Bg_2.png' alt='Img-bg'></img>
                    </div>
                    <div className='img-favorite-product2'>
                        <img src='../../ImgProduct/FavoriteProduct2.png' alt='Img favorite product'></img>
                    </div>
                    <div className='container-hover'>
                        <div className='bg-hover2'>
                            <img src='../../ImgProduct/BgZoom2.png' alt='Background zoom 2'></img>
                        </div>
                        <div className='product-hover2'>
                            <img src='../../ImgProduct/FavoriteProductScale2.png' alt='Product zoom 2'></img>
                        </div>
                    </div>
                </div>

                <div className='favorite-product-card3'>
                    <div className='img-bg3'>
                        <img src='../../ImgProduct/Bg_3.png' alt='Img-bg'></img>
                    </div>
                    <div className='img-favorite-product3'>
                        <img src='../../ImgProduct/FavoriteProduct3.png' alt='Img favorite product'></img>
                    </div>

                    <div className='container-hover'>
                        <div className='bg-hover3'>
                            <img src='../../ImgProduct/BgZoom3.png' alt='Background zoom 3'></img>
                        </div>
                        <div className='product-hover3'>
                            <img src='../../ImgProduct/FavoriteProductScale3.png' alt='Product zoom 3'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


FavoriteProduct.propTypes = {

};


export default FavoriteProduct;
