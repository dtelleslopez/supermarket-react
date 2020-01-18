import styled from 'styled-components';
import * as Theme from '../../styles/theme';

export const Container = styled.div`
  border-radius: 4px;
  border: 1px solid ${Theme.LIGHT_GRAY};
  margin: 10px;
  min-width: 300px;
  padding: 10px;
`;

export const Divider = styled.div`
  border-bottom: 1px solid ${Theme.LIGHT_GRAY};
  margin: 10px 0 10px;
`;

export const Items = styled.div`
  & > :last-child {
    border-bottom: 1px solid ${Theme.LIGHT_GRAY};
    padding-bottom: 10px;
  }
`;

export const SubTotal = styled.span`
  font-weight: bold;
`;
