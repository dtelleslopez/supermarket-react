import styled from 'styled-components';
import * as Theme from '../../styles/theme';

export const Container = styled.div`
  border-radius: 4px;
  border: 1px solid ${Theme.LIGHT_GRAY};
  margin: 10px;
  padding: 10px;
  transition: 0.3s;

  &:hover {
    box-shadow: ${Theme.BOX_SHADOW};
  }
`;

export const Image = styled.div`
  background-color: ${Theme.LIGHT_GRAY};
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
`;

export const Name = styled.span``;

export const Price = styled.span``;

export const Actions = styled.div`
  margin-top: 6px;
`;

export const Quantity = styled.input`
  border-radius: 4px 0 0 4px;
  border: 1px solid ${Theme.LIGHT_GRAY};
  outline: none;
  padding: 3px 6px;
  width: 150px;
`;

export const Button = styled.button`
  background-color: ${Theme.PRIMARY_COLOR};
  border-radius: 0 4px 4px 0;
  border: 0;
  color: ${Theme.DEFAULT_WHITE};
  cursor: pointer;
  outline: none;
  padding: 4px 10px;

  &:hover {
    background-color: ${Theme.SECONDARY_COLOR};
  }
`;
