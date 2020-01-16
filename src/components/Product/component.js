import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import getUnitType from '../../helpers/unitType';
import {
  Container, Image, Details, Name, Price, Actions, Quantity, Button,
} from './styles';

const Product = ({
  name, price, unit, addItem,
}) => {
  const quantityRef = useRef(null);

  const handleOnClick = () => {
    const item = {
      name,
      price,
      unit,
      quantity: +quantityRef.current.value,
    };

    addItem(item);
  };

  return (
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
        <Quantity ref={quantityRef} type="number" defaultValue="1" min="0" />
        <Button onClick={handleOnClick}>Add</Button>
      </Actions>
    </Container>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  addItem: PropTypes.func.isRequired,
};

export default Product;
