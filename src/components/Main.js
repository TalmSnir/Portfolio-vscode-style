import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.main`
  overflow-y: hidden;
  overflow-x: hidden;
  position: relative;
  background: ${({ theme }) => theme.clrBgMain};
`;
const MainInner = styled.div`
  block-size: 100%;
  inline-size: 100%;
  grid-row: 2;
  grid-column: 2;
  overflow-y: auto;
  overflow-x: hidden;

  color: ${({ theme }) => theme.clrText01};
`;

export default function Main({ children }) {
  return (
    <MainWrapper id='main_outer'>
      <MainInner id='main_inner'>{children}</MainInner>
    </MainWrapper>
  );
}
