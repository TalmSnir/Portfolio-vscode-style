import React, { useRef, useState } from 'react';

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
  max-inline-size: 1900px;
  margin: 0 auto;
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
  const imageRef = useRef(null);
  const handleClick = (e, src = '') => {
    e.stopPropagation();
    let x, y, left, right;
    if (src !== '') {
      //from image and not from modal
      imageRef.current = e.currentTarget.closest('.image-container');
      imageRef.current.style.visibility = 'hidden';
      const imageRect = imageRef.current.getBoundingClientRect();
      left = imageRect.left;
      right = imageRect.right;
      y = imageRect.y;
      const parentWidth =
        imageRef.current.parentElement.getBoundingClientRect().width;
      x = left < parentWidth - right ? left : right;
      setModal({
        show: true,
        src: src,
        origin: { x, y },
      });
    } else {
      setModal(prevData => {
        return {
          show: false,
          src: prevData.src,
          origin: prevData.origin,
        };
      });
      setTimeout(() => {
        imageRef.current.style.visibility = 'visible';
      }, 400);
    }
  };

  return (
    <Grid>
      <IconContext.Provider
        value={{ size: '2em', color: 'white' }}></IconContext.Provider>
      {[Grid1, Grid2, Grid3, Grid3, Grid2, Grid1].map((src, id) => (
        <Image key={id} src={src} handleClick={handleClick} />
      ))}
      <Modal
        show={modal.show}
        src={modal.src}
        handleClick={handleClick}
        transformOrigin={modal.origin}
      />
      <PaddingFiller />
    </Grid>
  );
}
