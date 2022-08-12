import React from 'react';
import PropTypes from 'prop-types';
import Introduce from './Introduce/Introduce';
import Product from './Product/Product';
import BestSelling from './BestSelling/BestSelling';
import FavoriteProduct from './FavoriteProduct/FavoriteProduct';


const Body = () => {
    return (
        <div>
            <Introduce/>
            <Product/>
            <BestSelling/>
            <FavoriteProduct/>
        </div>
    );
};


Body.propTypes = {

};


export default Body;
