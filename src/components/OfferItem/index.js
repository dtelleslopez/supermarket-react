import React from 'react';
import PropTypes from 'prop-types';
import { Row, Column } from '../../styles/grid';
import {
  Container, Name, Discount,
} from './styles';

const OfferItem = ({ name, discount }) => (
  <Container>
    <Row>
      <Column>
        <Row>
          <Name>{name}</Name>
        </Row>
      </Column>
      <Column align="right">
        <Discount>
          £-
          {discount / 100}
        </Discount>
      </Column>
    </Row>
  </Container>
);

OfferItem.propTypes = {
  name: PropTypes.string.isRequired,
  discount: PropTypes.number.isRequired,
};

export default OfferItem;
