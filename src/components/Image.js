import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { VscScreenFull } from 'react-icons/vsc';

const loading = keyframes`
to{
  background-position:-200% 0;
}
`;
const ImgContainer = styled.div`
  overflow: hidden;
  position: relative;
  &:hover {
    img {
      filter: brightness(100%);
      transform: scale(1.1);
      transition: 0.2s ease-in-out;
    }
    & > div {
      opacity: 1;
    }
  }
  ${props => {
    if (props.loading === 'load')
      return css`
        background-image: linear-gradient(
          to right,
          ${({ theme }) => theme.clrBgSidebar},
          ${({ theme }) => theme.clrBgMain},
          ${({ theme }) => theme.clrBgPanel}
        );

        background-size: 200% 100%;
        background-position: 50% 0;
        animation: ${loading} 1s infinite;
      `;
  }}
`;
const Img = styled.img`
  max-width: 100%;
  display: block;
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  filter: brightness(80%);
`;
export const ImgControls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacingXxs};
  background-color: ${({ theme }) => theme.clrAccentBlue};
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;

export const ControlButton = styled.button`
  appearance: none;
  border: 0;
  cursor: pointer;
  inline-size: 32px;
  block-size: 32px;
  @media screen and (max-width: ${({ theme }) => theme.bpMd}) {
    inline-size: 24px;
    block-size: 24px;
  }
  &:focus {
    outline-offset: 2px;
    outline: 1px solid ${({ theme }) => theme.clrText01};
  }
  &:hover {
    transform: scale(1.1);
  }
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg {
    fill: ${({ theme }) => theme.clrText01};
    inline-size: 100%;
    block-size: 100%;
  }
`;
export default function Image({ src, handleClick }) {
  const [loading, setLoading] = useState(true);

  return (
    <ImgContainer loading={loading ? 'load' : ''} className='image-container'>
      <Img onLoad={() => setLoading(false)} src={src} alt='grid' />
      <ImgControls>
        <ControlButton
          onClick={e => {
            handleClick(e, src);
          }}>
          <VscScreenFull />
        </ControlButton>
      </ImgControls>
    </ImgContainer>
  );
}
