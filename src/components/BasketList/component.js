import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import { Row, Column } from '../../styles/grid';
import { Container, Items, SubTotal } from './styles';

const BasketList = ({ items, subTotal }) => (
  <Container>
    <Items>
      {items.map(({
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
    </Items>
    <Row>
      <Column>Sub-total</Column>
      <Column align="right">
        <SubTotal>
          £
          {subTotal}
        </SubTotal>
      </Column>
    </Row>
  </Container>
);

BasketList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  subTotal: PropTypes.number.isRequired,
};

export default BasketList;
