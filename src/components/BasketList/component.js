import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import fixTwoDecimals from '../../helpers/fixTwoDecimals';
import ProductItem from '../ProductItem';
import OfferItem from '../OfferItem';
import { Row, Column } from '../../styles/grid';
import {
  Container, Divider, Items, Total,
} from './styles';

const BasketList = ({
  items, subTotal, appliedSavings, totalSavings, updateTotalSavings,
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
          <ProductItem
            key={name}
            name={name}
            price={price}
            unit={unit}
            quantity={quantity}
          />
        ))}
      </Items>
      <Row>
        <Column>
          <Total>Sub-total</Total>
        </Column>
        <Column align="right">
          <Total>
            £
            {subTotal}
          </Total>
        </Column>
      </Row>
      {totalSavings !== 0 && (
        <>
          <Divider />
          <Items>
            {appliedSavings.map(({ name, discount }) => (
              <OfferItem
                key={name}
                name={name}
                discount={discount}
              />
            ))}
          </Items>
          <Row>
            <Column>
              <Total>Total savings</Total>
            </Column>
            <Column align="right">
              <Total>
                £-
                {totalSavings}
              </Total>
            </Column>
          </Row>
        </>
      )}
      <Divider />
      <Row>
        <Column>
          <Total>Total to pay</Total>
        </Column>
        <Column align="right">
          <Total>
            £
            {fixTwoDecimals(subTotal - totalSavings)}
          </Total>
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
  appliedSavings: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
  })).isRequired,
  totalSavings: PropTypes.number.isRequired,
  updateTotalSavings: PropTypes.func.isRequired,
};

export default BasketList;
