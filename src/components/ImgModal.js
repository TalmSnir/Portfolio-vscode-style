import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes, css } from 'styled-components';
import { VscScreenNormal } from 'react-icons/vsc';
import { useClickOutside } from '../hooks';
import { ImgControls, ControlButton } from './Image';

const scaleIn = keyframes`
  from{
    transform: scale(0);
  opacity: 0;
}
to {
    transform: scale(1);
    opacity: 1;
  }
`;
const scaleOut = keyframes`
from{
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
`;
const ImgModalContainer = styled.div`
  position: ${props => (props.width < 500 ? 'fixed' : 'absolute')};
  inset: 0;
  backdrop-filter: blur(3px);
  z-index: ${({ theme }) => theme.zIndexModal};
  transform-origin: ${props =>
    `${props.transformOrigin.x}px ${props.transformOrigin.y}px`};

  animation: ${props => {
    if (props.show) {
      return css`
        ${scaleIn} 0.2s ease-in-out forwards
      `;
    }
    return css`
      ${scaleOut} 0.4s ease-in-out
    `;
  }};
`;
const ImgModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  inline-size: ${props => (props.width < 500 ? '100%' : '80%')};
  block-size: ${props => (props.width < 500 ? '100%' : '80%')};
  max-block-size: 1200px;
  max-inline-size: 1200px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
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

export default function Modal({ show, src, handleClick, transformOrigin }) {
  const modalRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(null);
  let container = document.querySelector('#main_outer');
  useEffect(() => {
    show && setShouldRender(true);
  }, [show]);
  useClickOutside(modalRef, handleClick);
  const handleAnimationEnd = () => {
    !show && setShouldRender(false);
  };
  return (
    <>
      {shouldRender &&
        ReactDOM.createPortal(
          <ImgModalContainer
            className='modal'
            width={window.innerWidth}
            transformOrigin={transformOrigin}
            show={show}
            onAnimationEnd={handleAnimationEnd}>
            <ImgModal ref={modalRef} width={window.innerWidth}>
              <ImgControls>
                <ControlButton onClick={e => handleClick(e)}>
                  <VscScreenNormal />
                </ControlButton>
              </ImgControls>
              <img src={src} alt='modal' />
            </ImgModal>
          </ImgModalContainer>,
          container
        )}
    </>
  );
}
