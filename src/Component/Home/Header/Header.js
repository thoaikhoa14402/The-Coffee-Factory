import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar/Navbar';
import Slider from './Slider/Slider'

const Header = () => {
    return (
        <div>
            <Navbar/>
            <Slider/>     
        </div>
    );
};


Header.propTypes = {

};


export default Header;
