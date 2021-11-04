import React from 'react';
import Grid1 from '../assets/grid1.png';
import Grid2 from '../assets/grid2.png';
import Grid3 from '../assets/grid3.png';
import styled from 'styled-components';

const Grid = styled.section`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const ImgContainer = styled.div`
  overflow: hidden;
`;
const Img = styled.img`
  max-width: 100%;
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(80%);
  &:hover {
    filter: brightness(100%);
    transform: scale(1.1);
  }
`;
export default function ImgGrid() {
  return (
    <Grid>
      {[Grid1, Grid2, Grid3, Grid3, Grid2, Grid1].map((src, id) => (
        <ImgContainer key={id}>
          <Img src={src} alt='grid' />
        </ImgContainer>
      ))}
    </Grid>
  );
}
