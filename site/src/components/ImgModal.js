import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { VscScreenNormal } from 'react-icons/vsc';
import { useClickOutside } from '../hooks';
import { ImgControls, ControlButton } from './ImgGrid';
const ImgModalContainer = styled.div`
  position: absolute;
  inset: 0;
  backdrop-filter: blur(3px);
`;
const ImgModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  inline-size: 80%;
  block-size: 80%;
  box-shadow: 0 0 4px ${({ theme }) => theme.clrAccentBlue06};
  background-color: ${({ theme }) => theme.clrBase21};
  img {
    width: 100%;
    height: ${({ theme }) => `calc(100% - ${theme.spacingXxs}*2 - 24px)`};
    max-width: 100%;
    object-fit: contain;
  }
  button > svg {
    inline-size: 24px;
    block-size: 24px;
  }
  div {
    position: unset;
    opacity: 1;
  }
`;

export default function Modal({ src, handleClick }) {
  const modalRef = useRef(null);
  useClickOutside(modalRef, handleClick);
  return ReactDOM.createPortal(
    <ImgModalContainer>
      <ImgModal ref={modalRef}>
        <ImgControls>
          <ControlButton onClick={handleClick}>
            <VscScreenNormal />
          </ControlButton>
        </ImgControls>
        <img src={src} alt='modal' />
      </ImgModal>
    </ImgModalContainer>,
    document.querySelector('#main_outer')
  );
}
