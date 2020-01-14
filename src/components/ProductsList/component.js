import React from 'react';
import PropTypes from 'prop-types';
import { Container, Product } from './styles';

const ProductsList = ({ products }) => (
  <Container>
    {products.map(({ name }) => <Product key={name}>{name}</Product>)}
  </Container>
);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
  })).isRequired,
};

export default ProductsList;
