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
  border-bottom: ${({ theme }) => `0.5px solid ${theme.clrBase17}`};
`;
const HeaderSections = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacingXs};
  font-size: ${({ theme }) => theme.fsHeadingH5};
  text-transform: capitalize;
`;
export default function Header() {
  return (
    <HeaderContainer>
      <Logo
        style={{
          maxWidth: '32px',
          maxHeight: '32px',
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
