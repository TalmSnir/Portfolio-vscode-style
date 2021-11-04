import React from 'react';
import {
  VscBell,
  VscError,
  VscSourceControl,
  VscSync,
  VscFeedback,
  VscWarning,
  VscArrowSmallUp,
  VscArrowSmallDown,
} from 'react-icons/vsc';

import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.clrAccentBlue06};
  color: ${({ theme }) => theme.clrBase01};
  font-size: ${({ theme }) => theme.fsBodyB2};
  padding: ${({ theme }) => `${theme.spacingXxs} ${theme.spacingXs}`};
  grid-row: -1;
  grid-column: 1/-1;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacingXs};
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacingXs};
`;

const IconWithText = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => `calc(${theme.spacingXxs}/2)`};
`;
export default function Footer() {
  return (
    <FooterContainer>
      <RightSide>
        <IconWithText>
          <VscSourceControl />
          main
        </IconWithText>
        <IconWithText>
          <VscSync />
          <IconWithText>
            0
            <VscArrowSmallDown />
          </IconWithText>
          <IconWithText>
            1
            <VscArrowSmallUp />
          </IconWithText>
        </IconWithText>

        <IconWithText>
          0
          <VscError />
        </IconWithText>
        <IconWithText>
          0
          <VscWarning />
        </IconWithText>
      </RightSide>
      <LeftSide>
        <span>Ln 17, col 3 Spaces:2</span>
        <span>UTF-8</span>
        <span>LF</span>
        <span>JavaScript</span>
        <VscFeedback />
        <VscBell />
      </LeftSide>
    </FooterContainer>
  );
}
