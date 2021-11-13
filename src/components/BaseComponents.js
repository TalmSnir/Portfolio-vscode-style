import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header1 = styled.h1`
  font-size: ${({ theme }) => theme.fsHeadingH1};

  @media screen and (min-width: ${({ theme }) => theme.bpSm}) {
    font-size: ${({ theme }) => `calc(${theme.fsHeadingH1}*${theme.smFc})`};
  }
  @media screen and (min-width: ${({ theme }) => theme.bpMd}) {
    font-size: ${({ theme }) => `calc(${theme.fsHeadingH1}*${theme.mdFc})`};
  }
`;
export const Header2 = styled.h2`
  font-size: ${({ theme }) => theme.fsHeadingH2};
  color: ${props => (props.color && props.theme[props?.color]) || 'inherit'};
  @media screen and (min-width: ${({ theme }) => theme.bpSm}) {
    font-size: ${({ theme }) => `calc(${theme.fsHeadingH2}*${theme.smFc})`};
  }
  @media screen and (min-width: ${({ theme }) => theme.bpMd}) {
    font-size: ${({ theme }) => `calc(${theme.fsHeadingH2}*${theme.mdFc})`};
  }
`;
export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fsBodyB1};
  max-width: 600px;
  line-height: 1.6em;
  @media screen and (min-width: ${({ theme }) => theme.bpMd}) {
    font-size: ${({ theme }) => `calc(${theme.fsBodyB1}*${theme.xsFc})`};
  }
`;

export const StyledLink = styled(NavLink)`
  appearance: none;
  border: 0;
  outline: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  block-size: 48px;
  inline-size: 48px;
  cursor: pointer;
  opacity: 0.4;
  &.active {
    opacity: 1;
    &::before {
      display: block;
    }
  }

  color: ${({ theme }) => theme.clrWhite};
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    block-size: 100%;
    inline-size: 2px;
    background-color: ${({ theme }) => theme.clrWhite};
    display: none;
  }
  &:hover {
    opacity: 1;
  }
  &:focus-visible::before {
    display: block;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.dir || 'row'};
  align-items: ${props => props.ai || 'center'};
  justify-content: ${props => props.jc || 'center'};
  gap: ${props => props.gap || ''};
  padding: ${props => props.padding || ''};
  margin: ${props => props.margin || ''};
  inline-size: ${props => props.inlineSize || ''};
  ${({ bpSmCol }) => {
    if (bpSmCol)
      return css`
        @media screen and (max-width: ${({ theme }) => theme.bpSm}) {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      `;
  }}
  ${({ bpMdCol }) => {
    if (bpMdCol)
      return css`
        @media screen and (max-width: ${({ theme }) => theme.bpMd}) {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      `;
  }} 
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
`;
