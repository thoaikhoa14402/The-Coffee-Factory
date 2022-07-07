import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Body from './Body/Body';
// import Footer from './Footer';
import Login_Register from '../Login_Register/Login_Register';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
};


Home.propTypes = {

};


export default Home;
