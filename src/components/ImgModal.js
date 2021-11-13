import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { VscScreenNormal } from 'react-icons/vsc';
import { useClickOutside } from '../hooks';
import { ImgControls, ControlButton } from './Image';

const ImgModalContainer = styled.div`
  position: ${props => (props.width < 500 ? 'fixed' : 'absolute')};
  inset: 0;
  backdrop-filter: blur(3px);
  z-index: ${({ theme }) => theme.zIndexModal};
`;
const ImgModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  inline-size: ${props => (props.width < 500 ? '100%' : '80%')};
  block-size: ${props => (props.width < 500 ? '100%' : '80%')};
  box-shadow: 0 0 4px ${({ theme }) => theme.clrAccentBlue};
  background-color: ${({ theme }) => theme.clrBgMain};
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
  let container = document.querySelector('#main_outer');

  useClickOutside(modalRef, handleClick);

  return ReactDOM.createPortal(
    <ImgModalContainer width={window.innerWidth}>
      <ImgModal ref={modalRef} width={window.innerWidth}>
        <ImgControls>
          <ControlButton onClick={handleClick}>
            <VscScreenNormal />
          </ControlButton>
        </ImgControls>
        <img src={src} alt='modal' />
      </ImgModal>
    </ImgModalContainer>,
    container
  );
}
