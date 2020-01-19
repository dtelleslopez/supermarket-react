import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  & > div {
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
`;
