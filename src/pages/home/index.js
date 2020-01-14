import React from 'react';
import ProductsList from '../../components/ProductsList';
import { Container } from './styles';

function Home() {
  return (
    <Container>
      Home
      <ProductsList />
    </Container>
  );
}

export default Home;
