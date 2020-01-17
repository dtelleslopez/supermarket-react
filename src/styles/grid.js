import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  flex: ${(props) => (props.size ? props.size : 1)};
  text-align: ${(props) => (props.align ? props.align : 'left')}
`;
