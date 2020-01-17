import React from 'react';
import ProductsList from '../../components/ProductsList';
import BasketList from '../../components/BasketList';
import { Row, Column } from '../../styles/grid';
import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Row>
        <Column size={3}>
          <ProductsList />
        </Column>
        <Column>
          <BasketList />
        </Column>
      </Row>
    </Container>
  );
}

export default Home;
