import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import { Row, Column } from '../../styles/grid';
import {
  Container, Divider, Items, SubTotal,
} from './styles';

const BasketList = ({
  items, subTotal, totalSavings, updateTotalSavings,
}) => {
  useEffect(() => {
    updateTotalSavings(items);
  }, [items]);

  return (
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
      {/* totalSavings !== 0 */ true && (
        <>
          <Divider />
          <Row>
            <Column>Total savings</Column>
            <Column align="right">
              <SubTotal>
                £
                {totalSavings}
              </SubTotal>
            </Column>
          </Row>
        </>
      )}
      <Divider />
      <Row>
        <Column>Total to pay</Column>
        <Column align="right">
          <SubTotal>
            £
            {subTotal + totalSavings}
          </SubTotal>
        </Column>
      </Row>
    </Container>
  );
};

BasketList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  subTotal: PropTypes.number.isRequired,
  totalSavings: PropTypes.number.isRequired,
  updateTotalSavings: PropTypes.func.isRequired,
};

export default BasketList;
