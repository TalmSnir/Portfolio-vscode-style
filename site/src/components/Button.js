import React from 'react';
import styled from 'styled-components';

export const StyleButton = styled.button`
  appearance: none;
  border: 0;
  outline: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  block-size: 48px;
  inline-size: 48px;
  cursor: pointer;
  opacity: ${props => (props.isActive ? 1 : 0.4)};
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
    display: ${props => (props.isActive ? 'block' : 'none')};
  }
  &:hover::before {
    display: block;
  }
  &:focus-visible::before {
    display: block;
  }
`;

export default function Button({
  children,
  onClick = null,
  isActive = false,
  title,
  type = 'button',
}) {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <StyleButton
      onClick={handleClick}
      isActive={isActive}
      title={title}
      type={type}>
      {children}
    </StyleButton>
  );
}
