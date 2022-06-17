import React from 'react';
import PropTypes from 'prop-types';
import "./BestSelling.css"

const BestSelling = () => {
    return (
        <div className='containers'>
            <div className='title-container'>
                <p className='title-best-selling'>SẢN PHẨM BÁN CHẠY</p>
            </div>
            <div className='best-selling-container'>

                <div className='selling-card'>
                    <div className='img-product'>
                        <img src='../../ImgProduct/ChristmasPie.png'></img>
                    </div>
                    <p>Christmas Pie</p>
                    <p className='price-vnd'>45.000đ</p>
                    <div className='add-product1'>
                        <svg className='border' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect className='background' width="30" height="30" rx="15" fill="#FF0000" />
                            <rect className='ver' x="13.3334" y="6.6665" width="3.33333" height="16.6667" fill="white" />
                            <rect className='hor' x="23.3334" y="13.3333" width="3.33333" height="16.6667" transform="rotate(90 23.3334 13.3333)" fill="white" />
                        </svg>
                    </div>
                </div>

                <div className='selling-card'>
                    <div className='img-product'>
                        <img src='../../ImgProduct/TràDưaHấuVải.png'></img>
                    </div>
                    <p>Trà Dưa Hấu Vải</p>
                    <p className='price-vnd'>42.000đ</p>
                    <div className='add-product2'>
                        <svg className='border' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect className='background' width="30" height="30" rx="15" fill="#FF0000" />
                            <rect className='ver' x="13.3334" y="6.6665" width="3.33333" height="16.6667" fill="white" />
                            <rect className='hor' x="23.3334" y="13.3333" width="3.33333" height="16.6667" transform="rotate(90 23.3334 13.3333)" fill="white" />
                        </svg>
                    </div>
                </div>

                <div className='selling-card'>
                    <div className='img-product'>
                        <img src='../../ImgProduct/TCFCoffee.png'></img>
                    </div>
                    <p>TCF Coffee</p>
                    <p className='price-vnd'>45.000đ</p>
                    <div className='add-product3'>
                        <svg className='border' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect className='background' width="30" height="30" rx="15" fill="#FF0000" />
                            <rect className='ver' x="13.3334" y="6.6665" width="3.33333" height="16.6667" fill="white" />
                            <rect className='hor' x="23.3334" y="13.3333" width="3.33333" height="16.6667" transform="rotate(90 23.3334 13.3333)" fill="white" />
                        </svg>
                    </div>
                </div>

                <div className='selling-card'>
                    <div className='img-product'>
                        <img src='../../ImgProduct/TràHibicuslựuđỏ.png'></img>
                    </div>
                    <p>Trà Hibicus Lựu Đỏ</p>
                    <p className='price-vnd'>42.000đ</p>
                    <div className='add-product4'>
                        <svg className='border' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect className='background' width="30" height="30" rx="15" fill="#FF0000" />
                            <rect className='ver' x="13.3334" y="6.6665" width="3.33333" height="16.6667" fill="white" />
                            <rect className='hor' x="23.3334" y="13.3333" width="3.33333" height="16.6667" transform="rotate(90 23.3334 13.3333)" fill="white" />
                        </svg>
                    </div>
                </div>

                <div className='selling-card'>
                    <div className='img-product'>
                        <img src='../../ImgProduct/ChocolateCaramelĐáXay.png'></img>
                    </div>
                    <p>Chocolate Caramel</p>
                    <p className='price-vnd'>45.000đ</p>
                    <div className='add-product5'>
                        <svg className='border' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect className='background' width="30" height="30" rx="15" fill="#FF0000" />
                            <rect className='ver' x="13.3334" y="6.6665" width="3.33333" height="16.6667" fill="white" />
                            <rect className='hor' x="23.3334" y="13.3333" width="3.33333" height="16.6667" transform="rotate(90 23.3334 13.3333)" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

    );
};


BestSelling.propTypes = {

};


export default BestSelling;
