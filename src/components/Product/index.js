import React from 'react';
import PropTypes from 'prop-types';
import getUnitType from '../../helpers/unitType';
import {
  Container, Image, Details, Name, Price, Actions, Quantity, Button,
} from './styles';

const Product = ({ name, price, unit }) => (
  <Container>
    <Image />
    <Details>
      <Name>{name}</Name>
      <Price>
        £
        {price}
        {getUnitType(unit)}
      </Price>
    </Details>
    <Actions>
      <Quantity type="number" defaultValue="1" />
      <Button onClick={() => {}}>Add</Button>
    </Actions>
  </Container>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default Product;
