import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.main`
  overflow-y: hidden;
  overflow-x: hidden;
  position: relative;
  background: ${({ theme }) => theme.clrBase19};
`;
const MainInner = styled.div`
  block-size: 100%;
  inline-size: 100%;

  grid-row: 2;
  grid-column: 2;
  overflow-y: auto;
  overflow-x: hidden;

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => ` ${theme.clrBase17} transparent `};
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-left: ${({ theme }) => `0.5px solid ${theme.clrBase17}`};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.clrBase17};
  }
  color: ${({ theme }) => theme.clrBase01}; ;
`;

export default function Main({ children }) {
  return (
    <MainWrapper id='main_outer'>
      <MainInner id='main_inner'>{children}</MainInner>
    </MainWrapper>
  );
}
