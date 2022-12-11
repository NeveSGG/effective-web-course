import styled from '@emotion/styled';
import { GridComponents } from 'react-virtuoso';

export const ItemContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: transparent;
  display: flex;
  flex: none;
  align-content: stretch;
`;

export const ItemWrapper = styled.div`
    background: transparent;
    width: 100%;
    height: 550px;
  }
`;

export const ListContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  width: 100%;

  @media (min-width: 0px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
` as GridComponents['List'];
