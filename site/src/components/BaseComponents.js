import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header1 = styled.h1`
  font-size: ${({ theme }) => theme.fsHeadingH1};
`;
export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fsBody1};
`;

export const StyledLink = styled(NavLink)`
  appearance: none;
  border: 0;
  outline: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  block-size: 48px;
  inline-size: 48px;
  cursor: pointer;
  opacity: 0.4;
  &.active {
    opacity: 1;
    &::before {
      display: block;
    }
  }

  color: ${({ theme }) => theme.clrBase01};
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    block-size: 100%;
    inline-size: 2px;
    background-color: ${({ theme }) => theme.clrBase01};
    display: none;
  }
  &:hover {
    opacity: 1;
  }
  &:focus-visible::before {
    display: block;
  }
`;
