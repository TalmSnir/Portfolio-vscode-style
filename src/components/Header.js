import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/logo.svg';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacingXs};
  grid-column: 1/-1;
  grid-row: 1;
  padding: ${({ theme }) => `calc(${theme.spacingXxs}/2) ${theme.spacingXxs}`};
  background-color: ${({ theme }) => theme.clrBase21};
  color: ${({ theme }) => theme.clrBase06};
  letter-spacing: 0.04em;
  position: relative;
  @media screen and (max-width: ${({ theme }) => theme.bpSm}) {
    background-color: ${({ theme }) => theme.clrBase17};
  }
`;
const HeaderSections = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacingXs};
  font-size: ${({ theme }) => theme.fsHeadingH5};
  text-transform: capitalize;
  @media screen and (max-width: ${({ theme }) => theme.bpSm}) {
    span {
      display: none;
    }
  }
  @media screen and (max-width: 400px) {
    span:last-of-type {
      display: none;
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo
        style={{
          minWidth: '32px',
          minHeight: '32px',
          width: '32px',
          height: '32px',
          stroke: 'rgba(0, 122, 204, 1)',
          fill: 'rgba(0, 122, 204, 1)',
        }}
      />

      <HeaderSections>
        <span>file</span>
        <span>edit</span>
        <span>selection</span>
        <span>view</span>
        <span>go</span>
        <span>run</span>
        <span>terminal</span>
        <span>help</span>
      </HeaderSections>
    </HeaderContainer>
  );
}
