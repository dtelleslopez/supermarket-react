import React from 'react';
import PropTypes from 'prop-types';
import unitType from '../../helpers/unitType';
import { Row, Column } from '../../styles/grid';
import {
  Container, Name, Quantity, Price, Delete,
} from './styles';

const ProductItem = ({
  name, price, unit, quantity, deleteItem,
}) => {
  const handleOnClick = () => {
    const item = {
      name,
      price,
      unit,
      quantity,
    };

    deleteItem(item);
  };

  return (
    <Container>
      <Row>
        <Column>
          <Row>
            <Name>{name}</Name>
          </Row>
          <Row>
            <Quantity>{quantity}</Quantity>
          </Row>
        </Column>
        <Column align="right">
          <Price>
            £
            {price}
            {unitType(unit)}
          </Price>
          <Delete data-cy="delete-product" onClick={handleOnClick}>✕</Delete>
        </Column>
      </Row>
    </Container>
  );
};

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default ProductItem;
