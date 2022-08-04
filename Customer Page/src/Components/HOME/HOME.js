import React from 'react';
// import PropTypes from 'prop-types';
import Header from './Header/Header';
import Slider from './Header/Slider/Slider';
import Body from './Body/Body';
import Footer from './Footer/Footer';


const HOME = (props) => {
    // const sendData = (data) => {
    // props.callBack(data)
    // }
    return (
        <div>
            <Header />
            <Slider />
            <Body />
            <Footer />
        </div>
    );
};

export default HOME;
