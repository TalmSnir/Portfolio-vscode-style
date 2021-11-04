import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '.';
import Hero from '../assets/hero.svg';
const PrimaryButton = styled.button`
  appearance: none;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: ${({ theme }) => theme.clrAccentBlue06};
  color: inherit;
  padding: ${({ theme }) => theme.spacingXs};
  font-size: ${({ theme }) => theme.fsBodyB1};
  text-transform: capitalize;
`;
export default function Landing() {
  return (
    <FlexContainer style={{ height: '100%' }} padding='2rem'>
      <FlexContainer
        gap='3rem'
        dir='column'
        ai='flex-start'
        style={{ flex: '1 1 50%' }}>
        <FlexContainer gap='0.5rem' dir='column' ai='flex-start'>
          <h1>Welcome To My Playground</h1>
          <h2>I'm Tal Snir</h2>
        </FlexContainer>
        <div>
          <p>a frontend developer with passion for ui design</p>
          <p>explore my portfolio using the tabs on the left</p>
        </div>

        <PrimaryButton>show quick tour</PrimaryButton>
      </FlexContainer>
      <img src={Hero} alt='hero' style={{ flex: '1 1 50%', maxWidth: '50%' }} />
    </FlexContainer>
  );
}
