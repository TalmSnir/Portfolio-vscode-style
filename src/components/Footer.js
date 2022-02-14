import React from 'react';
import { IconContext } from 'react-icons';
import {
  VscBell,
  VscError,
  VscSourceControl,
  VscSync,
  VscFeedback,
  VscWarning,
  VscArrowUp,
  VscArrowDown,
} from 'react-icons/vsc';

import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.clrBgFooter};
  color: ${({ theme }) => theme.clrWhite};
  font-size: ${({ theme }) => theme.fsBodyB2};
  padding: ${({ theme }) => `0.2rem ${theme.spacingXs}`};
  grid-row: -1;
  grid-column: 1/-1;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacingXs};
  .numbers {
    @media screen and (max-width: ${({ theme }) => theme.bpSm}) {
      display: none;
    }
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacingXs};
  .numbers {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacingXxs};
    @media screen and (max-width: ${({ theme }) => theme.bpMd}) {
      display: none;
    }
  }
`;

const IconWithText = styled.span`
  display: flex;
  align-items: flex-end;
  line-height: 12px;
  gap: 0.1rem;
`;
export default function Footer() {
  return (
    <FooterContainer>
      <IconContext.Provider value={{ size: 12 }}>
        <LeftSide>
          <IconWithText style={{ gap: '0.5rem' }}>
            <VscSourceControl />
            <span>talmsnir@gmail.com</span>
          </IconWithText>

          <IconWithText className='numbers'>
            <VscSync />
            0
            <VscArrowDown />
            1
            <VscArrowUp />
          </IconWithText>

          <IconWithText className='numbers'>
            0
            <VscError />
            0
            <VscWarning />
          </IconWithText>
        </LeftSide>

        <RightSide>
          <div className='numbers'>
            <span>Ln 17, col 3 Spaces: 2021</span>
            <span>UTF-8</span>
            <span>LF</span>
            <span>TalmSnir</span>
          </div>
          <VscFeedback />
          <VscBell />
        </RightSide>
      </IconContext.Provider>
    </FooterContainer>
  );
}
