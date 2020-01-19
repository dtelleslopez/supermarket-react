import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product';
import { Container } from './styles';

const ProductsList = ({ products }) => (
  <Container data-cy="products-list">
    {products.map(({ name, price, unit }) => (
      <Product
        key={name}
        name={name}
        price={price}
        unit={unit}
      />
    ))}
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
