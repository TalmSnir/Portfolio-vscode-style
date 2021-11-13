import React, { useState } from 'react';

import Grid1 from '../assets/grid1.png';
import Grid2 from '../assets/grid2.png';
import Grid3 from '../assets/grid3.png';
import styled from 'styled-components';

import { IconContext } from 'react-icons';
import { Image, Modal } from '.';

const Grid = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: relative;
  padding: ${({ theme }) => theme.spacingXs};
  gap: ${({ theme }) => theme.spacingXs};
  flex-wrap: wrap;
  & > * {
    flex: 1 1 33%;
    min-width: 200px;
    max-width: 500px;
  }
  @media screen and (min-width: ${({ theme }) => theme.bpLg}) {
    padding: ${({ theme }) => theme.spacingSm};
  }
  @media screen and (min-width: ${({ theme }) => theme.bpXl}) {
    padding: ${({ theme }) => theme.spacingLg};
    gap: ${({ theme }) => theme.spacingMd};
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
        <Image key={id} src={src} handleClick={handleClick} />
      ))}
      {modal && modal.show && (
        <Modal src={modal.src} handleClick={handleClick} />
      )}
      <PaddingFiller />
    </Grid>
  );
}
