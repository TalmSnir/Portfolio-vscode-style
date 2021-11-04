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
  background-color: ${({ theme }) => theme.clrBase12};
  color: ${({ theme }) => theme.clrBase01};
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
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacingXs};
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
          <IconWithText>
            <VscSourceControl />
            main
          </IconWithText>
          <IconWithText>
            <VscSync />
            0
            <VscArrowDown />
            1
            <VscArrowUp />
          </IconWithText>

          <IconWithText>
            0
            <VscError />
            0
            <VscWarning />
          </IconWithText>
        </LeftSide>
        <div>talmsnir@gmail.com</div>
        <RightSide>
          <span>Ln 17, col 3 Spaces: 2021</span>
          <span>UTF-8</span>
          <span>LF</span>
          <span>TalmSnir</span>
          <VscFeedback />
          <VscBell />
        </RightSide>
      </IconContext.Provider>
    </FooterContainer>
  );
}
