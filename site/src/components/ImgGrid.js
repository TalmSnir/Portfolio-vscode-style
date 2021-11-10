import React, { useState } from 'react';

import Grid1 from '../assets/grid1.png';
import Grid2 from '../assets/grid2.png';
import Grid3 from '../assets/grid3.png';
import styled from 'styled-components';
import { VscScreenFull } from 'react-icons/vsc';
import { IconContext } from 'react-icons';
import { Modal } from '.';

const Grid = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  padding: ${({ theme }) => theme.spacingXs};
  gap: ${({ theme }) => theme.spacingXs};
  flex-wrap: wrap;
  & > * {
    flex: 1 1 33%;
    min-width: 200px;
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
`;
const Img = styled.img`
  max-width: 100%;
  display: block;
  height: 100%;
  width: 100%;
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
  background-color: ${({ theme }) => theme.clrAccentBlue06};
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;
export const ControlButton = styled.button`
  appearance: none;
  border: 0;
  cursor: pointer;
  &:focus {
    outline-offset: 2px;
    outline: 1px solid ${({ theme }) => theme.clrBase01};
  }
  &:hover {
    transform: scale(1.1);
  }
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg {
    fill: ${({ theme }) => theme.clrBase01};
  }
`;
const PaddingFiller = styled.div`
  inline-size: 100%;
  block-size: ${({ theme }) => theme.spacingXxs};
`;
export default function ImgGrid() {
  const [modal, setModal] = useState({ show: false, src: '' });

  const handleClick = (src = '') => {
    setModal({ show: !modal.show, src: src });
  };

  return (
    <Grid>
      <IconContext.Provider
        value={{ size: '2em', color: 'white' }}></IconContext.Provider>
      {[Grid1, Grid2, Grid3, Grid3, Grid2, Grid1].map((src, id) => (
        <ImgContainer key={id}>
          <Img src={src} alt='grid' />
          <ImgControls>
            <ControlButton onClick={() => handleClick(src)}>
              <VscScreenFull />
            </ControlButton>
          </ImgControls>
        </ImgContainer>
      ))}
      {modal && modal.show && (
        <Modal src={modal.src} handleClick={handleClick} />
      )}
      <PaddingFiller />
    </Grid>
  );
}
//TODO : calculate the height with scroll relation to show modal.
//[] fix clickoutside modal.
//[] adjust controls background-color
//[] adjust controls position
