import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import { Container } from './styles';

const BasketList = ({ basket }) => (
  <Container>
    {basket.map(({
      name, price, unit, quantity,
    }) => (
      <Item
        key={name}
        name={name}
        price={price}
        unit={unit}
        quantity={quantity}
      />
    ))}
  </Container>
);

BasketList.propTypes = {
  basket: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
};

export default BasketList;
