import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '.';
import { ReactComponent as Hero } from '../assets/hero.svg';
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
  let interval;
  const showQuickTour = () => {
    if (interval) clearInterval(interval);
    const tooltips = [...document.querySelectorAll('.tooltip')];
    let idx = 0;
    interval = setInterval(() => {
      let tooltip = tooltips[idx];
      let parentElement = tooltip.parentElement;
      parentElement.classList.add('quickTour');
      setTimeout(() => {
        parentElement.classList.remove('quickTour');
      }, 1000);
      idx += 1;
      if (idx === tooltips.length) clearInterval(interval);
    }, 1100);
  };

  return (
    <FlexContainer style={{ height: '100%' }} padding='2rem' gap='2rem' bpMdCol>
      <FlexContainer
        gap='3rem'
        dir='column'
        ai='flex-start'
        style={{ flex: '1 1 50%' }}
        bpMdCol>
        <div>
          <h1 style={{ marginBlockEnd: '1rem' }}>Welcome To My Playground</h1>
          <h2>I'm Tal Snir</h2>
        </div>
        <div>
          <p>A frontend developer with a passion for ui design</p>
          <p>explore my portfolio using the tabs on the left</p>
        </div>
        <PrimaryButton onClick={showQuickTour}>show quick tour</PrimaryButton>
      </FlexContainer>
      <Hero style={{ flex: '1 1 50%', maxHeight: '100%' }} />
    </FlexContainer>
  );
}
