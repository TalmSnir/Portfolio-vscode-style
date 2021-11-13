import React from 'react';
import styled, { css } from 'styled-components';
import { FlexContainer } from '.';
import { ReactComponent as Hero } from '../assets/hero.svg';
import { Paragraph, Header1, Header2 } from '.';
const PrimaryButton = styled.button`
  appearance: none;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: ${({ theme }) => theme.clrAccentBlue};
  color: inherit;
  padding: ${({ theme }) => theme.spacingXs};
  font-size: ${({ theme }) => theme.fsBodyB1};
  text-transform: capitalize;
  transition: 0.1s ease-in-out;
  &:hover,
  &:focus {
    filter: brightness(90%);
    transform: scale(1.05);
  }
`;
const LandingContainer = styled.div`
  display: flex;
  align-items: ${props => props.ai || 'center'};
  justify-content: ${props => props.jc || 'center'};
  gap: ${props => props.gap || ''};
  padding: ${props => props.padding || ''};
  isolation: isolate;
  height: 100%;
  ${({ bpLgCol }) => {
    if (bpLgCol)
      return css`
        @media screen and (max-width: ${({ theme }) => theme.bpLg}) {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      `;
  }}
  @media screen and (min-width: ${({ theme }) => theme.bpMd}) {
    padding: ${({ theme }) => `${theme.spacingXs} ${theme.spacingMd}  `};
  }
  @media screen and (min-width: ${({ theme }) => theme.bpXl}) {
    padding: ${({ theme }) => `${theme.spacingMd} ${theme.spacingXl}  `};
  }
`;
const HeroSvg = styled(Hero)`
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0;
  opacity: 0.1;
  z-index: -1;
  @media screen and (min-width: ${({ theme }) => theme.bpLg}) {
    position: unset;
    opacity: 1;
    z-index: unset;
    flex: 1 1 50%;
    max-height: 100%;
    max-width: 50%;
  }
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
      }, 800);
      idx += 1;
      if (idx === tooltips.length) clearInterval(interval);
    }, 900);
  };

  return (
    <LandingContainer padding='2rem' gap='2rem' bpLgCol>
      <FlexContainer
        gap='3rem'
        dir='column'
        ai='flex-start'
        style={{ flex: '1 1 50%' }}
        bpLgCol>
        <div>
          <Header1 style={{ marginBlockEnd: '1rem' }}>
            Welcome To My Portfolio
          </Header1>
          <Header2 color='clrAccentBlue'>I'm Tal Snir</Header2>
        </div>
        <div>
          <Paragraph>
            A frontend developer with a passion for UI design.
            <br />I love to create tools to help others ease their day to day
            work in the fields of design and development.
          </Paragraph>
        </div>
        <PrimaryButton onClick={showQuickTour}>show quick tour</PrimaryButton>
      </FlexContainer>
      <HeroSvg />
    </LandingContainer>
  );
}
