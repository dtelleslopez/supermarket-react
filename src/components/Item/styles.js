import styled from 'styled-components';
import * as Theme from '../../styles/theme';

export const Container = styled.div`
  margin-bottom: 10px;
`;

export const Name = styled.span``;

export const Quantity = styled.span``;

export const Price = styled.span`
  font-weight: bold;
  vertical-align: middle;
`;

export const Delete = styled.button`
  background-color: ${Theme.DANGER};
  border-radius: 50%;
  border: 0;
  color: ${Theme.DEFAULT_WHITE};
  cursor: pointer;
  font-size: 8px;
  height: 16px;
  margin-left: 10px;
  outline: none;
  padding: 0;
  width: 16px;

  &:hover {
    background-color: ${Theme.DARKER_DANGER};
  }
`;
