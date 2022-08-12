import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./FavoriteProduct.css";
import Bg_1 from '../../../../Image/ImgProduct/Bg_1.png'
import Bg_2 from '../../../../Image/ImgProduct/Bg_2.png'
import Bg_3 from '../../../../Image/ImgProduct/Bg_3.png'
import FavoriteProduct1 from '../../../../Image/ImgProduct/FavoriteProduct1.png'
import FavoriteProduct2 from '../../../../Image/ImgProduct/FavoriteProduct2.png'
import FavoriteProduct3 from '../../../../Image/ImgProduct/FavoriteProduct3.png'
import BgZoom1 from '../../../../Image/ImgProduct/BgZoom1.png'
import BgZoom2 from '../../../../Image/ImgProduct/BgZoom2.png'
import BgZoom3 from '../../../../Image/ImgProduct/BgZoom3.png'
import FavoriteProductScale1 from '../../../../Image/ImgProduct/FavoriteProductScale1.png'
import FavoriteProductScale2 from '../../../../Image/ImgProduct/FavoriteProductScale2.png'
import FavoriteProductScale3 from '../../../../Image/ImgProduct/FavoriteProductScale3.png'

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
                        {/* <img src='../../ImgProduct/Bg_1.png' alt='Img-bg'></img> */}
                        <img src={Bg_1} alt='Img-bg'></img>
                    </div>
                    <div className='img-favorite-product1'>
                        {/* <img src='../../ImgProduct/FavoriteProduct1.png' alt='Img favorite product'></img> */}
                        <img src={FavoriteProduct1} alt='Img favorite product'></img>
                    </div>
                    <div className='container-hover'>
                        <div className='bg-hover'>
                            {/* <img src='../../ImgProduct/BgZoom1.png' alt='Background zoom 1'></img> */}
                            <img src={BgZoom1} alt='Background zoom 1'></img>
                        </div>
                        <div className='product-hover'>
                            {/* <img src='../../ImgProduct/FavoriteProductScale1.png' alt='Product zoom 1'></img> */}
                            <img src={FavoriteProductScale1} alt='Product zoom 1'></img>
                        </div>
                    </div>

                </div>

                <div className='favorite-product-card2'>
                    <div className='img-bg2'>
                        {/* <img src='../../ImgProduct/Bg_2.png' alt='Img-bg'></img> */}
                        <img src={Bg_2} alt='Img-bg'></img>
                    </div>
                    <div className='img-favorite-product2'>
                        {/* <img src='../../ImgProduct/FavoriteProduct2.png' alt='Img favorite product'></img> */}
                        <img src={FavoriteProduct2} alt='Img favorite product'></img>
                    </div>
                    <div className='container-hover'>
                        <div className='bg-hover2'>
                            {/* <img src='../../ImgProduct/BgZoom2.png' alt='Background zoom 2'></img> */}
                            <img src={BgZoom2} alt='Background zoom 2'></img>
                        </div>
                        <div className='product-hover2'>
                            {/* <img src='../../ImgProduct/FavoriteProductScale2.png' alt='Product zoom 2'></img> */}
                            <img src={FavoriteProductScale2} alt='Product zoom 2'></img>
                        </div>
                    </div>
                </div>

                <div className='favorite-product-card3'>
                    <div className='img-bg3'>
                        {/* <img src='../../ImgProduct/Bg_3.png' alt='Img-bg'></img> */}
                        <img src={Bg_3} alt='Img-bg'></img>
                    </div>
                    <div className='img-favorite-product3'>
                        {/* <img src='../../ImgProduct/FavoriteProduct3.png' alt='Img favorite product'></img> */}
                        <img src={FavoriteProduct3} alt='Img favorite product'></img>
                    </div>

                    <div className='container-hover'>
                        <div className='bg-hover3'>
                            {/* <img src='../../ImgProduct/BgZoom3.png' alt='Background zoom 3'></img> */}
                            <img src={BgZoom3} alt='Background zoom 3'></img>
                        </div>
                        <div className='product-hover3'>
                            {/* <img src='../../ImgProduct/FavoriteProductScale3.png' alt='Product zoom 3'></img> */}
                            <img src={FavoriteProductScale3} alt='Product zoom 3'></img>
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
